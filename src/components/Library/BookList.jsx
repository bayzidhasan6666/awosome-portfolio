import React, { useEffect, useState } from 'react';
import { BsArrowUpRightSquare, BsTrash } from 'react-icons/bs';

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
      <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 my-10 w-fit mx-auto">
        {books.map((book) => (
          <>
            {' '}
            <div
              key={book.id}
              className=" group relative items-center justify-center overflow-hidden cursor-pointer "
            >
              <figure className="h-96 w-[350px]">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src="https://wafilife-media.wafilife.com/uploads/2021/03/jibon-theke-neya.jpg"
                  alt="image"
                />
              </figure>
              <div className="absolute inset-0 bg-gradient-to-b group-hover:from-[#1c0202bf] group-hover:via-[#1c0202bf] group-hover:to-[#1c0202bf] from-black/10 via-black/10 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                {' '}
                <h2 className="text-3xl tg  text-white mb-5">{book.title}</h2>
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {book.description}
                </p>
                <div className="card-actions gap-6 mt-1 flex justify-between px-6">
                  <BsTrash className="text-red-500 cursor-pointer w-5 h-5"></BsTrash>
                  <BsArrowUpRightSquare className="text-emerald-500 cursor-pointer w-5 h-5"></BsArrowUpRightSquare>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BookList;
