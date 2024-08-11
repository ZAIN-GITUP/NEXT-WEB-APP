
"use client";
import React, { useState } from 'react';
import Sidebar from '../dashboard/sidebar/page';
import Navbar from '../dashboard/navbar/page';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditProfile from './addnewuser/page'; // Update the path accordingly
import Image from 'next/image';
import designation from "../../assets/imgs/icons/designation.png"
import email from "../../assets/imgs/scraps.png"
import gallary from "../../assets/imgs/gallery.png"
import block from "../../assets/imgs/block.png"
import phoneno from "../../assets/imgs/add.png"
const ProfileCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Yash',
    lastName: 'Ghori',
    email: 'yghori@asite.com',
    nationality: 'India',
    password: '',
    designation: 'UI - Intern',

  
  });

  const handleDotsClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleEditProfile = () => {
    setIsEditProfileVisible(true);
    setIsPopupOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditProfileVisible(false);
  };

  const handleProfileDataChange = (updatedData) => {
    setProfileData(updatedData);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-44 h-screen fixed top-0 left-0 bg-white shadow-md">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-44">
        {/* Navbar */}
        <header className="sticky top-0 p-2 shadow-md z-10 w-full transition-colors duration-300">
          <Navbar />
        </header>

        {/* Profile and Edit Profile */}
      
      
        <div className="flex gap-6 mt-2 mx-auto sm:mt-6 lg:mt-8 :mx-8 lg:mx-14  flex-col md:flex-row">
           <div>
           <h2 className="text-xl sm:text-2xl font-light text-slate-700 py-2">User Profile</h2>
          <div className="relative bg-slate-200 border border-slate-300 rounded-md shadow-lg overflow-hidden flex flex-col w-full md:w-[212px] h-[412px]">
            {/* 3-Dots Icon */}
            <button
              onClick={handleDotsClick}
              className="absolute top-2 right-2  text-black p-1 rounded z-20"
            >
              <BsThreeDotsVertical />
            </button>

            {/* Popup */}
            {isPopupOpen && (
              <div className="absolute top-8 right-1 bg-white border border-gray-300 shadow-md rounded-md p-1 w-14 z-10">
                <button
                  onClick={handleEditProfile}
                  className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
              </div>
            )}

            {/* Profile Content */}
        
 {/* Section 1: Profile Picture, Name, Country */}
 <div className="bg-slate-100 p-4 flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-pink-500 mb-2"
              />
              <h1 className="text-xl  flex font-bold">{profileData.firstName}{profileData.lastName}</h1>
              <p className="text-gray-600">{profileData.nationality}</p>
            </div>

            {/* Section 2: UI Intern, On-Teak */}
            <div className="bg-slate-100 border-t border-slate-300 p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <Image className="w-4 h-4 mr-2"  src={designation}/>
                <p className="text-gray-700">{profileData.designation}</p>
              </div>
              <div className="flex items-center mb-2">
                <Image className="w-4 h-4 mr-2" src={block}/>
                <p className="text-gray-700">On-Teak</p>
              </div>
            </div>

            {/* Section 3: Phone Number, Email, Level */}
            <div className="bg-slate-100 border-t border-slate-300 p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <Image className="w-6 h-6 mr-2 "  src={phoneno}/>
                <p className="text-gray-700">+91 7048144030</p>
              </div>
              <div className="flex items-center mb-2">
                <Image className="w-6 h-6 mr-2" src={email}/>
                <p className="text-gray-700">{profileData.email}</p>
              </div>
              <div className="flex items-center mb-2">
                <Image className="w-6 h-6 mr-2" src={gallary} />
                <p className="text-gray-700"> PDT - I</p>
              </div>
            </div>
          </div>
          </div>
          {/* Edit Profile Modal */}
          {isEditProfileVisible && (
            <div className="flex-1 bg-gray-100 p-8">
              <EditProfile
                profileData={profileData}
                onProfileDataChange={handleProfileDataChange}
                onClose={handleCancelEdit}
              />
        
          
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
