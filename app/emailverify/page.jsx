"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeEmail } from '../lib/features/slices/userslice';
import forgotpasswordimage from '../../assets/login.png';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  // Validate email
  const validate = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return 'Email is required.';
    } else if (!emailPattern.test(email)) {
      return 'Email is invalid.';
    }
    return '';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Perform validation
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
  
    // Prepare the data you want to post
    const data = { email };
  
    try {
      // Make the POST request using Axios
      const response = await axios.post('https://management-system-backend-0wae.onrender.com/verify-email/mongo/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response based on the status code
      if (response.status === 200) {
        // Email exists, navigate to forgot password page
        setMessage('Verifying your email...');
        dispatch(storeEmail(email));
        console.log('Email saved in Redux store:', email);

        setTimeout(() => {
          setMessage('Please verify your email.');
          router.push('/forgotpassword');
        }, 1000);

      } 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Email does not exist
        setError('Email does not exist.');
      } else {
        // Some other issue
        setError('Something went wrong. Please try again.');
      }
      
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-xs">
        <Image src={forgotpasswordimage} alt="Sample image" />
      </div>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Forgot Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          VERIFY EMAIL
        </button>
        
      </form>
    </div>
  );
};

export default EmailForm;
