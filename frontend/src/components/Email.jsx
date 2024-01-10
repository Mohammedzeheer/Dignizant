import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <div className="m-2 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mt-1 block w-full border-gray-50 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder=' Enter Email'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
