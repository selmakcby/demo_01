export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  rating: number;
  genre: string[];
  publishedYear: number;
  pages: number;
  isbn: string;
  price: number;
  featured?: boolean;
  bestseller?: boolean;
}

export interface BookCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}
