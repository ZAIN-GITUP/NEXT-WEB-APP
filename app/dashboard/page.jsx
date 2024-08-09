"use client "; 
import React from 'react'

import Image from 'next/image'

import Sidebar from './sidebar/page';
import Navbar from './navbar/page';
const rolespages = () => {
  return (

    <div className="flex container h-fit w-full  lx :w-full">

    <div className='h-dvh  fixed sm:fixed md:fixed lg:fixed'>
       <Sidebar/>
          </div>
    <div className="ml-44 left-0  w-full right-0">
      <div className="p-2 ml-1 place-items-start flex bg-slate-200 w-full">
 <Navbar/>
      </div>
      </div>
      </div>
  )
}

export default rolespages