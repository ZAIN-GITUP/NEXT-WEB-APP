"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'; // usePathname hook

import time from '../../../assets/imgs/icons/timer.png';
import massage from '../../../assets/imgs/icons/masseges.png';
import home from "../../../assets/imgs/icons/home.png";
import state from '../../../assets/imgs/icons/static.png';
import setting from '../../../assets/imgs/icons/setting.png';
import log from '../../../assets/imgs/icons/log.png';
import roles from '../../../assets/imgs/icons/roles.png';
import employees from '../../../assets/imgs/icons/employees.png';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const [activePage, setActivePage] = useState('Home'); // Default active page

  useEffect(() => {
    // Update activePage based on the current route
    if (pathname.includes('/dashboard/employee')) {
      setActivePage('Employee');
    } else if (pathname.includes('/dashboard/roles')) {
      setActivePage('Roles');
    } else if (pathname.includes('/dashboard')) {
      setActivePage('Home');
    }
  
  }, [pathname]);

  const getImageClass = (page) => (
    activePage === page ? 'filter brightness-0 invert' : ''
  );

  const handleNavigation = (page, route) => {
    router.push(route);
    setActivePage(page);
  };

  return (
    <div className="flex container h-fit w-full lx:w-full">
      <div className='bg-white h-full mt-8 w-44 fixed'>
        <div className='mt-16'>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Home' ? 'bg-blue-600 text-white px-6 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => handleNavigation('Home', '/dashboard')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Home')}`}
              src={home}
              alt="Home Icon"
            /> Home
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Employee' ? 'bg-blue-600 text-white px-2 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => handleNavigation('Employee', '/dashboard/employee')}
          >
            <Image
              className={`w-6 h-6 ${getImageClass('Employee')}`}
              src={employees}
              alt="Employee Icon"
            /> Employee
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Roles' ? 'bg-blue-600 text-white px-2 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => handleNavigation('Roles', '/dashboard/roles')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Roles')}`}
              src={roles}
              alt="Roles Icon"
            /> Roles
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Time Tracking' ? 'bg-blue-600 text-white px-01 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => setActivePage('Time Tracking')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Time Tracking')}`}
              src={time}
              alt="Time Tracking Icon"
            /> Time Tracking
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Massaging' ? 'bg-blue-600 text-white px-2 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => setActivePage('Massaging')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Massaging')}`}
              src={massage}
              alt="Massaging Icon"
            /> Massaging
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Statistics' ? 'bg-blue-600 text-white px-2 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => setActivePage('Statistics')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Statistics')}`}
              src={state}
              alt="Statistics Icon"
            /> Statistics
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'Settings' ? 'bg-blue-600 text-white px-4 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => setActivePage('Settings')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('Settings')}`}
              src={setting}
              alt="Settings Icon"
            /> Settings
          </h2>
          <h2
            className={`m-4 flex items-center gap-1 ${
              activePage === 'LogOut' ? 'bg-blue-600 text-white px-6 rounded-s-sm p-1' : 'text-gray-600'
            }`}
            onClick={() => setActivePage('LogOut')}
          >
            <Image
              className={`w-4 h-4 ${getImageClass('LogOut')}`}
              src={log}
              alt="Log Out Icon"
            /> LogOut
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
