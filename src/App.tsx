import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORY_DATA } from './data/story';
import { StoryNode } from './types';
import { ChevronRight, RotateCcw, BookOpen, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Cache for generated images
const imageCache: Record<string, string> = {};

export default function App() {
  const [currentNodeId, setCurrentNodeId] = useState<string>(() => {
    return localStorage.getItem('story_node_id') || 'start';
  });
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('story_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentNode: StoryNode = STORY_DATA[currentNodeId];
  const aiRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    // Initialize AI if needed
    if (!aiRef.current && process.env.GEMINI_API_KEY) {
      aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('story_node_id', currentNodeId);
    localStorage.setItem('story_history', JSON.stringify(history));
    
    // Generate image if prompt exists
    const generateImage = async () => {
      if (!currentNode || !currentNode.imagePrompt) {
        setBgImage(currentNode?.image || null);
        return;
      }

      if (imageCache[currentNodeId]) {
        setBgImage(imageCache[currentNodeId]);
        return;
      }

      setIsGenerating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `Atmospheric background for a horror/mystery game: ${currentNode.imagePrompt}. Dark, cinematic, high detail, immersive.` }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            },
          },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            imageCache[currentNodeId] = imageUrl;
            setBgImage(imageUrl);
            break;
          }
        }
      } catch (error) {
        console.error("Failed to generate image:", error);
        setBgImage(currentNode.image || null);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, [currentNodeId, currentNode]);

  const handleChoice = (nextNodeId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  };

  const handleRestart = () => {
    setCurrentNodeId('start');
    setHistory([]);
    localStorage.removeItem('story_node_id');
    localStorage.removeItem('story_history');
  };

  if (!currentNode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0502] text-white p-8">
        <div className="text-center space-y-4">
          <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
          <h1 className="text-2xl font-serif">Lỗi: Không tìm thấy tình tiết tiếp theo</h1>
          <button 
            onClick={handleRestart}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            Quay lại từ đầu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#0a0502] overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Background Atmosphere */}
      <div className="atmosphere" />

      {/* Background Image with Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImage || 'loading'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {bgImage ? (
            <img 
              src={bgImage} 
              alt="Background" 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-[#0a0502]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0502] via-transparent to-[#0a0502]" />
        </motion.div>
      </AnimatePresence>

      {/* Generation Status */}
      {isGenerating && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
          <Loader2 className="w-3 h-3 text-white/60 animate-spin" />
          <span className="text-[10px] uppercase tracking-widest text-white/60">Đang kiến tạo không gian...</span>
        </div>
      )}

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-4xl px-6 py-12 md:py-24 flex flex-col items-center">
        
        {/* Header / Progress - REMOVED AS PER USER REQUEST */}
        <div className="mb-12" />

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.section
            key={currentNodeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full space-y-12"
          >
            {/* Story Title */}
            {currentNode.title && (
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-white mb-8 text-center md:text-left">
                {currentNode.title}
              </h1>
            )}

            {/* Story Text */}
            <div className="space-y-6">
              <div className="story-text text-base md:text-2xl font-light leading-relaxed text-white/90 text-center md:text-left whitespace-pre-wrap">
                {currentNode.text.split('---')[0]}
              </div>
            </div>

            {/* Choices */}
            <div className="grid grid-cols-1 gap-4 py-4">
              {currentNode.choices.length > 0 && (
                currentNode.choices.map((choice, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => handleChoice(choice.nextNodeId)}
                    className="choice-button w-full text-left p-6 rounded-xl glass-panel group flex items-center justify-between border-2 border-white/10 hover:border-white/40 shadow-lg hover:shadow-white/5"
                  >
                    <span className="text-sm md:text-base font-serif text-white/80 group-hover:text-white transition-colors">
                      {choice.text}
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))
              )}
            </div>

            {/* Ending Indicator - REMOVED AS PER USER REQUEST */}
          </motion.section>
        </AnimatePresence>

        {/* Footer Decoration */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="mt-24 flex items-center gap-4"
        >
          <div className="h-px w-24 bg-white" />
          <Sparkles className="w-4 h-4" />
          <div className="h-px w-24 bg-white" />
        </motion.footer>
      </main>

      {/* Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

{/* Default Restart Button for Endings */}
function RestartButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
      onClick={onClick}
      className="mx-auto flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-[#ff4e00] hover:text-white transition-all font-sans font-bold uppercase tracking-widest text-sm"
    >
      <RotateCcw className="w-4 h-4" />
      Chơi lại từ đầu
    </motion.button>
  );
}
