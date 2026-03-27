export interface Choice {
  text: string;
  nextNodeId: string;
  style?: 'button' | 'link-purple' | 'link-blue' | 'link';
}

export interface StoryNode {
  id: string;
  title?: string;
  text: string;
  choices: Choice[];
  image?: string;
  imagePrompt?: string;
  isEnding?: boolean;
  endingType?: 'good' | 'bad' | 'neutral';
}
