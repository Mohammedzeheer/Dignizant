import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return (
    <div className="mt-4">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
