import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORY_DATA } from './data/story';
import { StoryNode } from './types';
import { ChevronRight, RotateCcw, BookOpen, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Cache for generated images
const imageCache: Record<string, string> = {};

export default function App() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('ending_dream_voice');
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);
  const [collectedMemories, setCollectedMemories] = useState<Record<number, { letter: string, text: string }>>({
    1: { letter: 'C', text: 'Một bữa sáng bình thường...' },
    2: { letter: 'C', text: 'Hình bóng trong gương...' },
    3: { letter: 'B', text: 'Bóng tối đang nuốt chửng lấy bạn.' },
    4: { letter: 'O', text: 'Đừng nhìn lại.' },
    5: { letter: 'M', text: 'Mọi thứ đều là giả dối.' },
    6: { letter: 'P', text: 'Phá vỡ thực tại.' },
    7: { letter: 'K', text: 'Ký ức bị đánh cắp.' },
    8: { letter: 'G', text: 'Gương mặt ấy... thật quen thuộc.' },
    9: { letter: 'N', text: 'Người chú... hay là kẻ canh giữ?' },
    10: { letter: 'K', text: 'Không được lên tiếng.' },
    11: { letter: 'K', text: 'Kẻ đứng sau bức màn.' },
    12: { letter: 'C', text: 'Con đường duy nhất là đối mặt.' }
  });
  const [showGallery, setShowGallery] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isDecodeUnlocked, setIsDecodeUnlocked] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [codeError, setCodeError] = useState<string | null>(null);

  const currentNode: StoryNode = STORY_DATA[currentNodeId];
  const aiRef = useRef<GoogleGenAI | null>(null);

  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState("");

  const parseMemoryFragment = (fragment: string) => {
    const match = fragment.match(/\((\d+)\)\s*([A-Z])\s*-\s*(.*)/);
    if (match) {
      return {
        index: parseInt(match[1]),
        letter: match[2],
        text: match[3]
      };
    }
    return null;
  };

  useEffect(() => {
    setIsLoaded(true);
    // Initialize AI if needed
    if (!aiRef.current && process.env.GEMINI_API_KEY) {
      aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(collectedMemories).length === 13 && !isDecodeUnlocked) {
      const timer = setTimeout(() => {
        setIsDecodeUnlocked(true);
        localStorage.setItem('decode_unlocked', 'true');
        
        // Generate random hint instead of the correct one
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomHint = Array.from({ length: 13 }, () => 
          characters.charAt(Math.floor(Math.random() * characters.length))
        ).join('');
        setHintText(randomHint);
        setShowHint(true);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [collectedMemories, isDecodeUnlocked]);

  useEffect(() => {
    localStorage.setItem('story_node_id', currentNodeId);
    
    // Check for memory fragment
    if (currentNode?.memoryFragment) {
      const parsed = parseMemoryFragment(currentNode.memoryFragment);
      if (parsed) {
        setCollectedMemories(prev => {
          const updated = { 
            ...prev, 
            [parsed.index]: { letter: parsed.letter, text: parsed.text } 
          };
          localStorage.setItem('collected_memories', JSON.stringify(updated));
          return updated;
        });
      }
    }

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

      // If quota was previously exceeded, fall back immediately to save requests
      if (isQuotaExceeded || !process.env.GEMINI_API_KEY) {
        setBgImage(currentNode.image || null);
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

        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
              imageCache[currentNodeId] = imageUrl;
              setBgImage(imageUrl);
              return;
            }
          }
        }
        
        // Fallback if no image part found
        setBgImage(currentNode.image || null);
      } catch (error: any) {
        console.warn("Image generation failed, falling back to default:", error);
        
        // Check for quota exhaustion (429)
        const errorStr = JSON.stringify(error);
        if (errorStr.includes('429') || errorStr.includes('RESOURCE_EXHAUSTED')) {
          setIsQuotaExceeded(true);
        }
        
        setBgImage(currentNode.image || null);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, [currentNodeId, currentNode, isQuotaExceeded]);

  const handleChoice = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  const handleRestart = () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ ký ức và chơi lại từ đầu không?')) {
      setCurrentNodeId('start');
      setCollectedMemories({});
      localStorage.removeItem('story_node_id');
      localStorage.removeItem('collected_memories');
      setShowCodeInput(false);
      setShowGallery(false);
    }
  };

  const handleCodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (secretCode === 'CCBOMPKGNKKCB') {
      setCurrentNodeId('secret_ending_start');
      setShowCodeInput(false);
      setSecretCode('');
      setCodeError(null);
    } else {
      setCodeError('Mật mã không chính xác. Bạn cần thu thập đủ 13 mảnh ký ức để tìm ra mật mã.');
    }
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

      {/* UI Controls - Only show gallery at the very end */}
      {currentNodeId === 'secret_ending_final_thanks' && (
        <div className="fixed top-6 left-6 z-50">
          <button 
            onClick={() => setShowGallery(true)}
            className="p-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all group relative shadow-2xl"
            title="Ký ức đã thu thập"
          >
            <BookOpen className="w-6 h-6 text-white/60 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">
              13
            </span>
          </button>
        </div>
      )}

      {/* Hint Notification */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
          >
            <div className="bg-red-900/90 backdrop-blur-xl border border-red-500/30 p-6 rounded-2xl shadow-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-red-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">Gợi ý giải mã</span>
              </div>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Bạn đã thu thập đủ 13 mảnh ký ức. Hãy sử dụng chữ cái đầu của mỗi mảnh theo thứ tự để giải mã:
              </p>
              <div className="bg-black/40 p-3 rounded-lg font-mono text-xl tracking-[0.5em] text-red-500 font-bold">
                {hintText}
              </div>
              <button 
                onClick={() => setShowHint(false)}
                className="mt-4 text-white/40 hover:text-white/60 text-xs uppercase tracking-widest transition-colors"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Memory Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-2xl w-full glass-panel p-8 rounded-3xl border border-white/10 max-h-[80vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-red-500" />
                  Phòng Trưng Bày Ký Ức ({Object.keys(collectedMemories).length}/13)
                </h2>
                <button onClick={() => setShowGallery(false)} className="text-white/40 hover:text-white text-xl">✕</button>
              </div>
              
              <div className="space-y-4">
                {Array.from({ length: 13 }).map((_, i) => {
                  const index = i + 1;
                  const memory = collectedMemories[index];
                  return (
                    <div key={index} className={`p-4 rounded-xl border ${memory ? 'border-white/20 bg-white/5' : 'border-white/5 bg-transparent opacity-30'}`}>
                      <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Mảnh ký ức #{index}</div>
                      <div className="text-sm font-serif italic">
                        {memory ? `(${index}) ${memory.text}` : 'Chưa thu thập được...'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Code Input Modal */}
      <AnimatePresence>
        {showCodeInput && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full glass-panel p-10 rounded-3xl border border-white/10 text-center"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Giải Mã Ký Ức</h2>
              <p className="text-white/60 text-sm mb-8">Ghép các chữ cái đầu của 13 mảnh ký ức để tìm ra mật mã cuối cùng.</p>
              
              <form onSubmit={handleCodeSubmit} className="space-y-6">
                <div className="space-y-2">
                  <input 
                    type="text"
                    value={secretCode}
                    onChange={(e) => {
                      setSecretCode(e.target.value.toUpperCase());
                      setCodeError(null);
                    }}
                    placeholder="NHẬP 13 KÝ TỰ..."
                    className={`w-full bg-white/5 border ${codeError ? 'border-red-500' : 'border-white/10'} rounded-xl p-4 text-center text-xl tracking-[0.5em] font-mono uppercase focus:outline-none focus:border-red-500 transition-all`}
                    maxLength={13}
                  />
                  {codeError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs italic"
                    >
                      {codeError}
                    </motion.p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => {
                        setShowCodeInput(false);
                        setCodeError(null);
                      }}
                      className="flex-1 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                    >
                      Hủy
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-all shadow-lg shadow-red-500/20"
                    >
                      Giải mã
                    </button>
                  </div>
                  <button 
                    type="button"
                    onClick={handleRestart}
                    className="w-full py-3 rounded-xl border border-red-500/20 text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Quay lại từ đầu để thu thập mảnh ký ức
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
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
              
              {/* Display memory fragment if it's an ending */}
              {currentNode.isEnding && currentNode.memoryFragment && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 font-serif italic text-center text-base md:text-2xl"
                >
                  <Sparkles className="w-5 h-5 mx-auto mb-3 opacity-60" />
                  {(() => {
                    const parsed = parseMemoryFragment(currentNode.memoryFragment);
                    return parsed ? `(${parsed.index}) ${parsed.text}` : currentNode.memoryFragment;
                  })()}
                </motion.div>
              )}
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

              {/* Special Decode Button after 13th memory */}
              {isDecodeUnlocked && currentNode.memoryFragment && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setShowCodeInput(true)}
                  className="w-full p-8 rounded-2xl bg-red-950/40 border border-red-500/30 hover:bg-red-900/40 hover:border-red-500/50 transition-all flex items-center justify-center gap-4 group"
                >
                  <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
                  <span className="text-xl font-serif font-bold text-red-500 uppercase tracking-[0.2em]">
                    Giải mã ký ức
                  </span>
                </motion.button>
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
