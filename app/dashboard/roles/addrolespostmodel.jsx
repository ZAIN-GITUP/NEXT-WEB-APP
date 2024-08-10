"use client";

import React, { useState } from "react";
import { useId } from 'react';
const AddRolesPostModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    title: "",
    authorizations: {
      view: false,
      edit: false,
      delete: false,
      create: false,
      export: false,
      manage: false,
    },
  });

if (formData.id=formData.id)

{
formData.id = formData.id + 1;
}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      authorizations: { ...prevData.authorizations, [name]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Role</h2>
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Authorizations</label>
            <div className="flex flex-wrap mt-2">
              {["view", "edit", "delete", "create", "export", "manage"].map((auth) => (
                <div key={auth} className="mr-4 mb-2">
                  <input
                    type="checkbox"
                    name={auth}
                    checked={formData.authorizations[auth]}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700 capitalize">{auth}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRolesPostModal;
