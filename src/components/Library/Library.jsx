import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import BookList from './BookList';

const Library = () => {
  return (
    <div className='h-screen'>
      <Header></Header>
      <BookList></BookList>
    </div>
  );
};

export default Library;