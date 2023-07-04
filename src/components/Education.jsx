import React from 'react';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaGraduationCap, FaHome, FaSearchLocation } from 'react-icons/fa';
import EduCard from './EduCard';

const Education = () => {
  return (
    <div id="education" className="">
      <div className="space-y-10">
        <h1 className="heading">Educations</h1>
        <ul className="about-description space-y-3">
          <li className="flex items-center gap-3 text-[17px]">
            <FaGraduationCap></FaGraduationCap>
            <span>Studied at Islami Arabi University</span>
          </li>
          <li className="flex items-center gap-3 text-[17px]">
            <FaHome></FaHome>
            <span>Lives in Gazipur, Dhaka, Bangladesh</span>
          </li>
          <li className="flex items-center gap-3 text-[17px]">
            <BiSolidLocationPlus></BiSolidLocationPlus>
            <span>Kapasia, Gazipur</span>
          </li>
        </ul>
      </div>
      <EduCard></EduCard>
    </div>
  );
};

export default Education;
