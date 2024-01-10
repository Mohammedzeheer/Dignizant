import React from 'react';

const QuizHeader = ({ title, description }) => {
  return (
    <div className="m-2 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border-t-8 border-purple-800">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
};

export default QuizHeader;
