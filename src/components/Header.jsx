import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-3 px-2">
      <div className="container tg mx-auto">
        <div className="flex justify-between items-center">
          <Link to={'/'}>
            {' '}
            <h1 className="text-2xl  bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Atikul Islam
            </h1>
          </Link>
          <Link to={'/library'}>
            {' '}
            <button className=" px-5 py-2 rounded-3xl active2 relative">
              <span
                className="absolute inset-2 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent"
                style={{ zIndex: 1 }}
              >
                Library
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
