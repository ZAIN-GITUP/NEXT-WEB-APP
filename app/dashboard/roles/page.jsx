


"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";

import deleting from "../../../assets/imgs/icons/delete.png";
import add from "../../../assets/imgs/icons/addbox.png";
import Sidebar from "../sidebar/page";
import Navbar from "../navbar/page";
import AddRolesPostModal from "./addrolespostmodel";
import ConfirmationrolesdeleteModal from './conformtionrolesdeletion';
import Postbuttomsection from "../postbuttomsection/page";

const Roles = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.id.toString().includes(searchTerm) ||
    post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Pagination 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const firstSetOfPages = [1, 2, 3, 4, 5];
  const lastSetOfPages = totalPages > 5 ? [totalPages - 1, totalPages] : [];
  const middlePages = totalPages > 8 ? [6, 7, 8] : [];

  const handleDeleteClick = (id) => {
    setPostIdToDelete(id);
    setModalVisible(true); // Show the confirmation modal
  };
  
  const handleConfirmDelete = () => {
    setPosts(posts.filter(post => post.id !== postIdToDelete)); // Delete the post
    setPostIdToDelete(null); // Reset the postIdToDelete state
    setModalVisible(false); // Hide the confirmation modal
  };
  
  const handleCancelDelete = () => {
    setPostIdToDelete(null); // Reset the postIdToDelete state
    setModalVisible(false); // Hide the confirmation modal
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  }
  const handleSaveNewPost = (newPost) => {
    const newId = posts.length + 1;  // Automatically generate the ID based on the number of posts
    const postWithId = { ...newPost, id: newId }; // Add the new ID to the post object
    setPosts([...posts, postWithId]); // Add the post to the end of the posts array
    setIsAddModalOpen(false);
  };
  

  
  return (
    <div className="flex container h-fit w-full lx:w-full">
      <div className='h-dvh fixed sm:fixed md:fixed lg:fixed'>
        <Sidebar />
      </div>

      <div className="ml-44 left-0 w-full right-0">
       {/* Navbar */}
       <header className={`ml-1 top-0 p-2 shadow-md  w-full  bg-slate-200  `}>
          <Navbar />
        </header>

        <div className='ml-1 mt-1 h-screen'>
          <div className="flex bg-slate-200 h-10 justify-between mb-0">
            <div><h2 className='text-xl opacity-90 ml-4 p-1 w-full'>Roles</h2></div>
            <div className="flex items-center justify-end">
              <button className='px-1 flex mx-2 bg-slate-200 rounded-md w-16 hover:shadow-xl hover:bg-slate-400' onClick={handleAddClick}>
                ADD
                <Image className="h-4 w-4 object-cover mt-1" src={add} alt="" />
              </button>

              <ConfirmationrolesdeleteModal
  isVisible={isModalVisible}
  onConfirm={handleConfirmDelete}
  onCancel={handleCancelDelete}
/>

            </div>
          </div>

          <div className="px-2 py-2 w-full bg-slate-200 sm:bg-slate-200 md:bg-slate-200 justify-between">
          <table className="bg-white mr-6 w-full divide-y divide-gray-300 rounded-md">
  <thead className="w-full">
    <tr>
      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Create</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Manage</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">View</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Edit</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deletion</th>
      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">Export</th>
    
    </tr>
  </thead>

  <tbody className="divide-y divide-gray-300">
    {currentPosts.map((post, index) => (
      <tr key={index}>
        <td className="px-4 py-2">{post.id}</td>
        <td className="px-2 py-2">{post.name}</td>
        <td className="px-2 py-2 opacity-60 text-sm font-sm">{post.title}</td>
        <td className="pl-6 py-2">
          <input type="checkbox" checked={post.authorizations.create} readOnly />
        </td>
        <td className="pl-6 py-2">
          <input type="checkbox" checked={post.authorizations.manage} readOnly />
        </td>
        <td className="px-4 py-2">
          <input type="checkbox" checked={post.authorizations.view} readOnly />
        </td>
        <td className="px-4 py-2">
          <input type="checkbox" checked={post.authorizations.edit} readOnly />
        </td>
        <td className="pl-6 py-2">
          <input type="checkbox" checked={post.authorizations.delete} readOnly />
        </td>
        <td className="px-4 py-2">
          <input type="checkbox" checked={post.authorizations.export} readOnly />
        </td>
        <td>
  <button className="relative group" onClick={() => handleDeleteClick(post.id)}>
    <Image className="h-4 w-4 mr-6 object-cover opacity-70" src={deleting} alt="" />
    <span className="absolute -left-3 -top-2 transform -translate-y-1/2 ml-2 w-max px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Delete
    </span>
  </button>
  

</td>
      </tr>
    ))}
  </tbody>
</table>

  
        {/* Pagination Section */}
        <div className="w-full">
              <div className="xl:bg-white bg-white md:bg-white flex items-center justify-between w-full h-20 p-6 sm:m-0 sm:p-0">
                {/* Previous Button */}
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`bg-white flex items-center text-black rounded-md border-gray-400 border w-24 mx-1 p-1 mt-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    disabled={currentPage === 1}
                  >
                    <FaArrowLeft />
                    <h4 className="text-center text-black ml-2">Previous</h4>
                  </button>
                </div>

                {/* Pagination Numbers */}
                <div className="flex h-6 w-60 m-2 items-center space-x-2">
                  {firstSetOfPages.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                      disabled={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {!isExpanded && (
                    <>
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="text-black p-1 border-gray-200 border bg-white cursor-pointer"
                      >
                        .....
                      </button>
                      {lastSetOfPages.map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                          disabled={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </button>
                      ))}
                    </>
                  )}

                  {isExpanded && (
                    <>
                      {middlePages.map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                          disabled={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </button>
                      ))}
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="text-black border-gray-200 border p-1 bg-white cursor-pointer"
                      >
                        .....
                      </button>
                      {lastSetOfPages.map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                          disabled={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </button>
                      ))}
                    </>
                  )}
                </div>

       {/* Next Button */}
       <div className="flex items-center justify-end">
         <button
           onClick={() => paginate(currentPage + 1)}
           className={`bg-white flex items-center text-black rounded-md border-gray-400 border w-20 p-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
           disabled={currentPage === totalPages}
         >
           <h4 className="text-center text-black mx-auto">Next</h4>
           <FaArrowRight />
         </button>
                </div>
              </div>
              <Postbuttomsection/>
            </div>
          </div>
        </div>

        {/* Add Roles Modal */}
        <AddRolesPostModal
          isOpen={isAddModalOpen}
          onSave={handleSaveNewPost}
          onClose={() => setIsAddModalOpen(false)}
        />

  
      </div>
    </div>
  );
};

export default Roles;
