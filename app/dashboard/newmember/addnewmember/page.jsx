"use client";
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const AddNewMember = () => {
  const [inputdata, setInputdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    newPassword: '',
    confirmPassword: '',
    employeeRole: '',
    nationality: '',
    level: '',
    joiningDate: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[1-9]\d{1,14}$/; // Simplified international phone number pattern

    // Check required fields
    if (!inputdata.firstName) newErrors.firstName = 'First Name is required';
    
    if (!inputdata.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(inputdata.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!inputdata.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phonePattern.test(inputdata.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number is invalid';
    }

    if (!inputdata.newPassword) newErrors.newPassword = 'New Password is required';
    if (!inputdata.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (inputdata.newPassword && inputdata.confirmPassword && inputdata.newPassword !== inputdata.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!inputdata.employeeRole) newErrors.employeeRole = 'Employee Role is required';
    if (!inputdata.nationality) newErrors.nationality = 'Nationality is required';
    if (!inputdata.level) newErrors.level = 'Level is required';
    if (!inputdata.joiningDate) newErrors.joiningDate = 'Joining Date is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic
      console.log("Form submitted successfully with data:", inputdata);
      // Set success message
    
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
    
      }, 10000);
      setInputdata({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        newPassword: '',
        confirmPassword: '',
        employeeRole: '',
        nationality: '',
        level: '',
        joiningDate: ''
      });
      // Clear errors
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-200 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        style={{ maxWidth: '694px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Member</h1>

        {/* Form Fields */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={inputdata.firstName}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={inputdata.lastName}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputdata.email}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={inputdata.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* New Password */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                value={inputdata.newPassword}
                onChange={handleChange}
                className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-700"
              >
                {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={inputdata.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-700"
              >
                {confirmPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Employee Role */}
          <div>
            <label htmlFor="employeeRole" className="block text-sm font-medium text-gray-700">
              Employee Role
            </label>
            <input
              type="text"
              id="employeeRole"
              name="employeeRole"
              value={inputdata.employeeRole}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Employee Role"
            />
            {errors.employeeRole && <p className="text-red-500 text-xs mt-1">{errors.employeeRole}</p>}
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={inputdata.nationality}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Nationality"
            />
            {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
          </div>

          {/* Level */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <input
              type="text"
              id="level"
              name="level"
              value={inputdata.level}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Level"
            />
            {errors.level && <p className="text-red-500 text-xs mt-1">{errors.level}</p>}
          </div>

          {/* Joining Date */}
          <div>
            <label  className="block text-sm font-medium text-gray-700">
              Joining Date
            </label>
            <input
              type="date"
              id="joiningDate"
              name="joiningDate"
              value={inputdata.joiningDate}
              onChange={handleChange}
              className="mt-1 block w-full h-[40px] p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.joiningDate && <p className="text-red-500 text-xs mt-1">{errors.joiningDate}</p>}
          </div>

          {/* Save Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-14 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {formSubmitted ? 'Saved' : 'Save'}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {formSubmitted && successMessage && (
          <div className="absolute top-0 right-0 p-4 text-green-600">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewMember;
