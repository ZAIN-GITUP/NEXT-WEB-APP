import React from 'react';
import { FaMapMarkerAlt, FaUserTag, FaUserClock, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const ProfileCard = () => {
  return (
    <div className="w-[212px] h-[412px] m-8 bg-slate-200 border border-slate-300 rounded-md shadow-lg overflow-hidden flex flex-col">
      {/* Section 1: Profile Picture, Name, Country */}
      <div className="bg-slate-100 p-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mb-2"
        />
        <h1 className="text-xl font-bold">Yash Ghori</h1>
        <p className="text-gray-600">Country</p>
      </div>

      {/* Section 2: UI Intern, On-Teak */}
      <div className="bg-slate-100 border-t border-slate-300 p-4 flex flex-col">
        <div className="flex items-center mb-2">
          <FaUserTag className="text-gray-500 mr-2" />
          <p className="text-gray-700">UI - Intern</p>
        </div>
        <div className="flex items-center">
          <FaUserClock className="text-gray-500 mr-2" />
          <p className="text-gray-700">On-Teak</p>
        </div>
      </div>

      {/* Section 3: Phone Number, Email, Level */}
      <div className="bg-slate-100 border-t border-slate-300 p-6 flex flex-col">
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="text-gray-500 mr-2" />
          <p className="text-gray-700">+91 7048144030</p>
        </div>
        <div className="flex items-center mb-2">
          <IoMailOutline className="text-gray-500 mr-2" />
          <p className="text-gray-700">yghori@asite.com</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <p className="text-gray-700">Level: PDT - I</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
