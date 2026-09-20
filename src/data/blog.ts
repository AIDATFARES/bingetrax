import { post1 } from './posts/post1';
import { post2 } from './posts/post2';
import { post3 } from './posts/post3';
import { post4 } from './posts/post4';
import { post5 } from './posts/post5';
import { post6 } from './posts/post6';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
  cta1?: {
    heading: string;
    copy: string;
    buttonText: string;
    buttonLink: string;
  };
  cta2?: {
    heading: string;
    copy: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
];
