export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
