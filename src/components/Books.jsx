import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [booksLoaded, setBooksLoaded] = useState(10);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://seussology.info/api/books');
        const bookData = await response.json();
        setBooks(bookData);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const loadMore = () => {

    setBooksLoaded((prevLoaded) => Math.min(prevLoaded + 10, books.length));
  };

  if (loading) {
    return <div className="text-center mt-20">Loading books...</div>;
  }

  return (
    <div className="mx-auto px-6 sm:px-6 lg:px-16 py-8">
      <h1 id="booksDiv" className="text-xl font-bold mb-8 ml-8 text-customBlack">The Books:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 justify-items-center">
        {books.slice(0, booksLoaded).map((book, index) => (
          <Link 
            to={`/book/${book.id}`} 
            key={book.id} 
            state={{ book }} 
            className={`block w-60 motion-preset-blur-up-lg`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out h-full">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold group-hover:underline">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="mt-2 text-sm text-gray-700 line-clamp-1">{book.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={loadMore}
          className="text-sm font-semibold text-gray-900 border-[1.5px] rounded-full px-6 py-4 border-[#e5e7eb] transition ease duration-300 hover:shadow-md mt-10"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Books;

