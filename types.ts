
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  status: 'CLASSIFIED' | 'DECLASSIFIED' | 'RESTRICTED';
}

export interface TerminalMessage {
  type: 'user' | 'system' | 'ai';
  content: string;
  timestamp: string;
}
