import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import React from 'react';

const Buttons = () => {
  return (
    <div className="md:w-[400px] mt-5 buttons flex items-center gap-5">
      <a
        target="_blank"
        href="https://web.facebook.com/profile.php?id=100049733073318"
      >
        <FiFacebook className="i"></FiFacebook>
      </a>
      <a target="_blank" href="#">
        <FiTwitter className="i"></FiTwitter>
      </a>
      <a target="_blank" href="#">
        <FiLinkedin className="i"></FiLinkedin>
      </a>
    </div>
  );
};

export default Buttons;
