"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar/page';
import Navbar from './navbar/page';
import { useRouter } from 'next/navigation';
import Postbuttomsection from './postbuttomsection/page';

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

        {/* Main Content Section */}
        <main className=" bg-slate-200 p-4 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-blue-600 to-red-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Employee Management</h2>
              <p className="text-white mb-4">Oversee and manage employee details.</p>
              <button 
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                onClick={() => handleNavigation('/dashboard/employee')}
              >
                View Employees
              </button>
            </div>
              {/* Card 2 */}
            <div className="bg-gradient-to-r from-cyan-300 to-sky-600 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Role Management</h2>
              <p className="text-white mb-4">Manage different roles and permissions in the system.</p>
              <button 
                className="bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-sky-200 transition-colors"
                onClick={() => handleNavigation('/dashboard/roles')}
              >
                View Roles
              </button>
            </div>

            {/* Card 3*/}

                   <div className="bg-gradient-to-r from-red-600 to-yellow-950 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Time Management</h2>
              <p className="text-white mb-10">Atandance and manage Time  details.</p>
              <button 
                className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
                onClick={() => handleNavigation('/employee')}
              >
                View Time Tracking
              </button>
            </div>
            {/* card 4*/}
            <div className="bg-gradient-to-r from-green-600 to-lime-900 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Massaging</h2>
              <p className="text-white mb-4">Manage messaging and communication.</p>
              <button 
                className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
                onClick={() => handleNavigation('/dashboard/massaging')}
              >
                Manage Massaging
              </button>
            </div>
          
            {/* Card 5 */}
            <div className="bg-gradient-to-r from-indigo-400 to-indigo-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Statistics</h2>
              <p className="text-white mb-10">View various statistics and insights.</p>
              <button 
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                onClick={() => handleNavigation('/dashboard/')}
              >
                View Statistics
              </button>
            </div>

  
        

            {/* Card 6 */}
     
            <div className="bg-gradient-to-r from-teal-500 to-teal-900 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Settings Management</h2>
              <p className="text-white mb-10">Set and manage web app settings .</p>
              <button 
                className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-100 transition-colors"
                onClick={() => handleNavigation('/dashboard/settings')}
              >
                Manage Settings
              </button>
            </div>
          
          </div>
      
        </main>
    
      </div>
    </div>
  );
};

export default RolesPage;
