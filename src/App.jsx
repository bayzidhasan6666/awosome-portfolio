import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Library from './components/Library';
import Blog from './components/Blog';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-site">
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Library></Library>
      <Blog></Blog>
      <Contact></Contact>
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
