import { Book, BookCategory } from './types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 'Reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    rating: 4.5,
    genre: ['Fiction', 'Romance', 'Historical Fiction'],
    publishedYear: 2017,
    pages: 400,
    isbn: '978-1501139239',
    price: 16.99,
    featured: true,
    bestseller: true
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    rating: 4.8,
    genre: ['Self-Help', 'Psychology', 'Business'],
    publishedYear: 2018,
    pages: 320,
    isbn: '978-0735211292',
    price: 18.99,
    featured: true,
    bestseller: true
  },
  {
    id: '3',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop',
    rating: 4.2,
    genre: ['Fiction', 'Fantasy', 'Philosophy'],
    publishedYear: 2020,
    pages: 304,
    isbn: '978-0525559474',
    price: 17.99,
    featured: true
  },
  {
    id: '4',
    title: 'Educated',
    author: 'Tara Westover',
    description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop',
    rating: 4.6,
    genre: ['Memoir', 'Biography', 'Education'],
    publishedYear: 2018,
    pages: 352,
    isbn: '978-0399590504',
    price: 19.99,
    bestseller: true
  },
  {
    id: '5',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.',
    coverImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop',
    rating: 4.7,
    genre: ['Science Fiction', 'Thriller', 'Adventure'],
    publishedYear: 2021,
    pages: 496,
    isbn: '978-0593135204',
    price: 20.99,
    featured: true
  },
  {
    id: '6',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn\'t necessarily about what you know. It\'s about how you behave.',
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=450&fit=crop',
    rating: 4.5,
    genre: ['Finance', 'Psychology', 'Business'],
    publishedYear: 2020,
    pages: 256,
    isbn: '978-0857197689',
    price: 15.99
  },
  {
    id: '7',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A woman\'s act of violence against her husband—and the therapist obsessed with finding out why—has this instant #1 New York Times bestseller.',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    rating: 4.3,
    genre: ['Thriller', 'Mystery', 'Psychological Fiction'],
    publishedYear: 2019,
    pages: 336,
    isbn: '978-1250301697',
    price: 16.99
  },
  {
    id: '8',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us.',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop',
    rating: 4.4,
    genre: ['History', 'Anthropology', 'Non-fiction'],
    publishedYear: 2014,
    pages: 443,
    isbn: '978-0062316097',
    price: 18.99,
    bestseller: true
  }
];

export const categories: BookCategory[] = [
  {
    id: 'fiction',
    name: 'Fiction',
    description: 'Imaginative stories and novels',
    icon: '📚'
  },
  {
    id: 'non-fiction',
    name: 'Non-Fiction',
    description: 'Real stories and factual content',
    icon: '📖'
  },
  {
    id: 'mystery',
    name: 'Mystery & Thriller',
    description: 'Suspenseful and thrilling reads',
    icon: '🕵️'
  },
  {
    id: 'romance',
    name: 'Romance',
    description: 'Love stories and romantic fiction',
    icon: '💕'
  },
  {
    id: 'self-help',
    name: 'Self-Help',
    description: 'Personal development and growth',
    icon: '💪'
  },
  {
    id: 'science-fiction',
    name: 'Science Fiction',
    description: 'Futuristic and speculative fiction',
    icon: '🚀'
  }
];

export const featuredBooks = books.filter(book => book.featured);
export const bestsellerBooks = books.filter(book => book.bestseller);
