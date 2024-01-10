import React from 'react';

const DropdownComponent = ({ questionText, options, selectedValue, onChange }) => {
  return (
    <div className="m-2 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-4">{questionText}</h1>
      <div className="flex items-center">
        <select
          className="px-4 py-2 border rounded-md outline-none"
          value={selectedValue}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownComponent;
