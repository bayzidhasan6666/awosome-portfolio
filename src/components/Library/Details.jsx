import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://atikul-islam-books-server.vercel.app/books/${id}`
        );
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Header></Header>
      <div className="mt-10 lg:h-screen text-center space-y-4 md:px-5 px-2 py-5">
        <h1 className="text-2xl text-center bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent font-bold mb-4">
          {book.name}
        </h1>
        <p className="text-lg mb-2">প্রকাশনীঃ {book.publishedBy}</p>
        <p className="text-lg mb-2">লেখকঃ {book.writer}</p>
        <img className="w-[300px] h-96 flex mx-auto" src={book.image} alt="" />
        <p className="text-left ">
          <span className="font-bold ">
            কিছু কথাঃ
            <br />
            <br />
          </span>{' '}
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
