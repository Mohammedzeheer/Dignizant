import React from 'react';

const RadioDropdownComponent = ({
  questionText1,
  questionText2,
  options1,
  options2,
  selectedValue1,
  selectedValue2,
  handleRadioChange1,
  handleDropdownChange1,
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg md:flex md:justify-center">
      <div className="p-6 md:border-r md:pr-6 md:w-3/5">
        <h1 className="text-xl font-semibold mb-4">{questionText1}</h1>
        <div className="space-y-1">
          {options1.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={option.value}
                name="nationalFlower"
                value={option.value}
                checked={selectedValue1 === option.value}
                onChange={handleRadioChange1}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 md:pl-6 md:w-2/5">
        <h1 className="text-xl font-semibold mb-4">{questionText2}</h1>
        <div className="flex items-center">
          <select
            className="px-4 py-2 border rounded-md outline-none"
            value={selectedValue2}
            onChange={handleDropdownChange1}
          >
            {options2.map((option, index) => (
              <option key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RadioDropdownComponent;
