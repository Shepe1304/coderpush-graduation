export interface StorySection {
  id: string;
  title: string;
  content: string;
  type: 'prologue' | 'act' | 'epilogue';
  order: number;
  emoji?: string;
  image?: string;
  interactive?: boolean;
}

export interface WeekContent {
  week: number;
  title: string;
  sections: StorySection[];
}

export interface InternProfile {
  name: string;
  avatar?: string;
  message?: string;
}