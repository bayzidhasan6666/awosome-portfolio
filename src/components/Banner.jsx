import React from 'react';
import Typewriter from 'typewriter-effect';
import Buttons from './Buttons';

const Banner = () => {
  return (
    <div
      id="home"
      className="mx-auto text-container flex flex-col-reverse md:flex-row items-center justify-around gap-5 md:gap-20 text-[#d4d4d4] space-y-3 pt-20"
    >
      <div className="md:w-1/2">
        <p className="uppercase tg  bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent text-xs">
          WELCOME TO MY World
        </p>
        <h1 className="text-2xl Noto   md:text-4xl font-bold mb-4">
          It's Atikul Islam
          <span className="text-[#c023f9] uppercase font-light Noto text-lg">
            <Typewriter
              options={{
                strings: ['Assalamu Alaikum '],
                autoStart: true,
                loop: true,
                delay: 20,
              }}
            />
          </span>
        </h1>
        <p className="">
          I'm Atikul Islam. I am an teacher at an Islamic school in Gazipur and
          an Imam at a local mosque. In my profession, I have dedicated myself
          to using my extensive knowledge of Islamic Studies and my experience
          as an Imam to help Muslim leaders acquire the knowledge and experience
          they need.
        </p>
        <Buttons></Buttons>
      </div>
      <div className="">
        <img
          className="profile-image"
          src="https://i.ibb.co/Lh9Z3DQ/profile-h-1-removebg-preview.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
