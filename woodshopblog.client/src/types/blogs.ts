export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  thumbnailUrl: string;
  tags: string[];
  excerpt: string;
  content: Content[];
}

export type Content =
  { type: 'heading'; level: number; text: string; }
  | { type: 'paragraph'; text: string } 
  | { type: 'list'; ordered: boolean; items: string[]; }
  | { type: 'image'; source: string; alt: string; caption: string; } 
  | { type: 'link'; source: string; text: string; }
