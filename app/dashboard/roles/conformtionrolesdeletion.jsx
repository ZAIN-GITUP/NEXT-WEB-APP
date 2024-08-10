import React from 'react';

const ConfirmationrolesdeleteModal = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Are you sure?</h2>
        <p className="my-4">Do you really want to delete this post? This process cannot be undone.</p>
        <div className="flex justify-end">
          <button onClick={onCancel} className="mr-2 bg-gray-300 px-4 py-2 rounded-md">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationrolesdeleteModal;
