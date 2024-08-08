"use client "; 
import React from 'react'

import Image from 'next/image'
import pict from "../../assets/imgs/icons/Bill_smit.png";
import searching from "../../assets/imgs/icons/search.png";
import notifi from "../../assets/imgs/icons/notifi.png";
import Sidebar from '../dashboard/sidebar/page';
const rolespages = () => {
  return (

    <div className="flex container h-fit w-full  lx :w-full">

    <div className='h-dvh  fixed sm:fixed md:fixed lg:fixed'>
       <Sidebar/>
          </div>
    <div className="ml-44 left-0  w-full right-0">
      <div className="p-2 ml-1 place-items-start flex bg-slate-200 w-full">
        <div className="flex">
          <form className="max-w-md ml-4">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search..</label>
            <div className="">
              <div className="absolute mt-1 pointer-events-none">
                <Image className="w-6 h-6 mt-2 ml-4 opacity-30 text-gray-500 dark:text-gray-400 justify-center items-center" src={searching} alt="" />
              </div>
              <input
                type="search"
                id="default-search"
                className="w-72 p-2 ps-10 text-sm text-gray-600 rounded-smm-2 mt-2 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search.."
                required
              />
            </div>
          </form>
        </div>
        <div className='ml-96 flex mt-4 items-center h-4'>
          <p className='ml-52 justify-center items-center p-2 w-10 h-10 rounded-full hover:shadow-xl hover:bg-slate-400'>
            <Image className="w-8 h-6" src={notifi} alt="" />
          </p>
          <Image src={pict} alt="" className='object-center m-2 w-10 h-10 rounded-full' />
          <p className='text-sm py-4'>Bill Smith</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default rolespages