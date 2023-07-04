import React from 'react';
import Tilty from 'react-tilty';


const About = () => {
  return (
    <div id="about" className="about-section">
      <h1 className="heading">Introductions</h1>
      <div className="about-content text-gray-400 my-10">
        <Tilty>
          {' '}
          <img
            className="profile-image2 mx-auto flex"
            src="https://i.ibb.co/NYFmWfs/h-6-removebg-preview.png"
            alt="Profile"
          />
        </Tilty>
        <p className="about-description ">
          Assalamu Alaikum, I'm Atikul Islam. I am an teacher at an school in
          Gazipur and an Imam at a local mosque. In my profession, I have
          dedicated myself to using my extensive knowledge of Islamic Studies
          and my experience as an Imam to help Muslim leaders acquire the
          knowledge and experience they need.
        </p>
      </div>
    </div>
  );
};

export default About;
