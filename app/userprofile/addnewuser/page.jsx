"use client";
import React, { useState, useEffect } from 'react';

const EditProfile = ({ onClose, profileData, onProfileDataChange }) => {
  const [localProfileData, setLocalProfileData] = useState(profileData);
  const [isSaving, setIsSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    setLocalProfileData(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalProfileData({
      ...localProfileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSavedMessage('Saving...');
    
    // Simulate saving profile data
    setTimeout(() => {
      console.log('Profile Updated:', localProfileData);
      onProfileDataChange(localProfileData); // Update the profile data in the parent
      setSavedMessage('Saved!');
      
      setTimeout(() => {
        setIsSaving(false);
        setSavedMessage('');
        onClose(); 
      }, 5000); 
    }, 1000); 
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full p-1">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={localProfileData.firstName}
                onChange={handleChange}
                placeholder="Yash"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={localProfileData.lastName}
                onChange={handleChange}
                placeholder="Ghori"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={localProfileData.email}
                onChange={handleChange}
                placeholder="yghori@asite.com"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <input
                list="nationalities"
                name="nationality"
                value={localProfileData.nationality}
                onChange={handleChange}
                placeholder="India"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <datalist id="nationalities">
                <option value="India" />
                <option value="United States" />
                <option value="Canada" />
                <option value="United Kingdom" />
                <option value="Australia" />
                <option value="Other" />
              </datalist>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={localProfileData.password}
                onChange={handleChange}
                placeholder="Change Password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                list="designations"
                name="designation"
                value={localProfileData.designation}
                onChange={handleChange}
                placeholder="UI Intern"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <datalist id="designations">
                <option value="UI Intern" />
                <option value="Frontend Developer" />
                <option value="Backend Developer" />
                <option value="Full Stack Developer" />
                <option value="Software Engineer" />
                <option value="Project Manager" />
                <option value="Other" />
              </datalist>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className={`bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${isSaving ? 'bg-gray-400' : ''}`}
              disabled={isSaving}
            >
              {isSaving ? savedMessage : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
