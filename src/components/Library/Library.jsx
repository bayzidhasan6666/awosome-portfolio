import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import BookList from './BookList';

const Library = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating page loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-fit">
      <Header></Header>

      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-infinity text-red-500 loading-lg"></span>
        </div>
      ) : (
        <BookList></BookList>
      )}
    </div>
  );
};

export default Library;
