'use client';

import React, { useState } from 'react';
import { books, categories, featuredBooks, bestsellerBooks } from '@/lib/data';
import { Book, BookCategory } from '@/lib/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.genre.some(genre => 
      categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase().includes(genre.toLowerCase())
    );
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">📚 BookStore</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Next Favorite Book
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of books across all genres. From bestsellers to hidden gems, find your perfect read.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Books
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Books */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">⭐ Featured Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Bestsellers */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">🏆 Bestsellers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestsellerBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* All Books */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Books' : `${categories.find(cat => cat.id === selectedCategory)?.name} Books`}
            {searchQuery && ` (${filteredBooks.length} results)`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="aspect-[2/3] relative">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        {book.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        {book.bestseller && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{book.title}</h4>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{book.rating}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{book.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {book.genre.slice(0, 2).map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {genre}
            </span>
          ))}
          {book.genre.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{book.genre.length - 2}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${book.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
