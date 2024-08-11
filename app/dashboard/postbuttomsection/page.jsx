"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 

const Postbuttomsection = () => {
  const router = useRouter(); 

  
  const handleAddMemberClick = () => {
    router.push('newmember/addnewmember'); 
  };

  return (
    <div className="bg-white w-full h-auto mt-8 p-2 sm:p-4 lg:p-8">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left">
        Ready to Expand the Team?
      </h1>
      <h3 className="mt-2 mb-4 text-sm sm:text-base lg:text-lg text-center sm:text-left">
        Grow your workforce by adding and tracking their onboarding process.
      </h3>
      <div className="flex justify-center sm:justify-start">
        <button
          className="p-2 text-white bg-blue-600 rounded-md w-full sm:w-36 lg:w-48 hover:shadow-xl hover:bg-blue-400"
          onClick={handleAddMemberClick} // Attach the click handler
        >
          Add Team Members
        </button>
      </div>
    </div>
  );
};

export default Postbuttomsection;
