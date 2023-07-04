import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Blog from './components/Blog';
import Header from './components/Header';

const App = () => {
  return (
    <div className="space-y-10">
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Blog></Blog>
      <Contact></Contact>
      <div className="h-fit"></div>
    </div>
  );
};

export default App;
