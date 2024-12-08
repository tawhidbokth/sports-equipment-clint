import React from 'react';

const Category = ({ onCategoryClick, activeCategory }) => {
  const categories = [
    'All',
    'Bat',
    'Helmet',
    'Stump',
    'Gloves',
    'Ball',
    'Pads',
    'Clothing',
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Categories</h1>

      <div className="border border-orange-400 p-4 rounded-lg bg-white">
        <ul className="flex flex-col gap-3">
          {categories.map(category => (
            <li key={category}>
              <button
                onClick={() => onCategoryClick(category)}
                className={`w-full py-2 px-4 rounded text-lg text-left 
                  ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 hover:bg-orange-200'
                  }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
