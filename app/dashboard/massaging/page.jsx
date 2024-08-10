"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';
import { useRouter } from 'next/navigation';

const RolesPage = () => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (route) => {
    router.push(route);
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
        <header className={`sticky top-0 p-4 shadow-md z-10 w-full ${scrolling ? 'bg-slate-300' : 'bg-slate-200'} transition-colors duration-300`}>
          <Navbar />
        </header>

   
      </div>
    </div>
  );
};

export default RolesPage;
