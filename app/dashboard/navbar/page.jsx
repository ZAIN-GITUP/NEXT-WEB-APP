"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import pict from "../../../assets/imgs/icons/Bill_smit.png";
import searching from "../../../assets/imgs/icons/search.png";
import notifi from "../../../assets/imgs/icons/notifi.png";

const Navbar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex items-center justify-between p-1 ">
      {/* Search Form */}
      <form className="relative flex items-center max-w-md w-full sm:w-1/2 lg:w-1/3">
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Image className="w-6 h-6 opacity-50" src={searching} alt="Search Icon" />
          </div>
          <input
            type="search"
            id="default-search"
            className="w-full pl-10 p-2 text-sm text-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search.."
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
      </form>

      {/* Notifications and User Info */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:shadow-xl hover:bg-slate-400">
          <Image className="w-8 h-6" src={notifi} alt="Notifications" />
        </button>

    
        <Link href="/userprofile"> 
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={pict} alt="User Profile" className="w-10 h-10 rounded-full" />
            <p className="text-sm hidden md:block">Bill Smith</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
 