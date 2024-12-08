import React from 'react';

const Category = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Categories</h1>

      <div className="border border-orange-400 p-4 rounded-lg bg-white">
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Bat</li>
          <li>Helmet</li>
          <li>Gym Equipment</li>
          <li>Stram</li>
          <li>Ball</li>
          <li>Pad</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
