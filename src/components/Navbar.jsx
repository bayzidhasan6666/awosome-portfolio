import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsBook,
} from 'react-icons/bs';
import './Navbar.css';

import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full  rounded-2xl  h-[100px] p-3 backdrop-blur-2xl  max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-[#ffffff]">
          <Link
            activeClass="active"
            smooth={true}
            offset={-100}
            spy={true}
            to="home"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BiHomeAlt></BiHomeAlt>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BiUser></BiUser>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="library"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsClipboardData></BsClipboardData>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="blog"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsBriefcase></BsBriefcase>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <BsChatSquare></BsChatSquare>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
