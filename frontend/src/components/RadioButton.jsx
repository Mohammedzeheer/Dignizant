import React from 'react';

const RadioButtonComponent = ({ questionText, options, selectedValue, onChange }) => {
  return (
    <div className="m-2 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-4">{questionText}</h1>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={option.id}
              name="rivers"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="mr-2"
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonComponent;
