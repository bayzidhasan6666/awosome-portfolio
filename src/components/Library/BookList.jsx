import React, { useEffect, useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/books.json');
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="heading">My Library</h1>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 my-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="card shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={
                'https://4.bp.blogspot.com/-ahPi8XI7wlg/Vxr78Iq7KYI/AAAAAAAARX4/Y--V8HQmBToG8Wa-XbGZYkCMrMK-_-eQQCLcB/s1600/Holy-Quran-1-13.jpg'
              }
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-400 mb-4">Author: {book.author}</p>
              <p className="text-gray-400 mb-4">Genre: {book.genre}</p>
              <p className="text-gray-400 mb-4">Language: {book.language}</p>
              <p className="text-gray-400">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
