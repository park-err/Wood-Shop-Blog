export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  thumbnailUrl: string;
  tags: string[];
  content: Content[];
}

export interface Content {
  type: string;
  source: string;
  text: string;
}