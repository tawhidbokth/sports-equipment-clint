import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Banner from './Header/Banner';
import Product from './Product';
import React, { useState } from 'react';

const Home = () => {
  const equipment = useLoaderData();
  const [filteredEquipment, setFilteredEquipment] = useState(equipment);
  const [activeCategory, setActiveCategory] = useState('All');

  // ক্যাটাগরি অনুযায়ী ডেটা ফিল্টার করার ফাংশন
  const handleCategoryClick = category => {
    setActiveCategory(category); // Active ক্যাটাগরি সেট করা
    if (category === 'All') {
      setFilteredEquipment(equipment); // সব ডেটা দেখাবে
    } else {
      const filtered = equipment.filter(
        item => item.categoryName.toLowerCase() === category.toLowerCase()
      );
      setFilteredEquipment(filtered);
    }
  };

  return (
    <div>
      <Banner />

      <div className="flex flex-col md:flex-row mx-auto w-[1400px]">
        <div className="w-full md:w-1/5">
          <Category
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </div>

        <div className="w-full md:w-4/5">
          {filteredEquipment.length > 0 ? (
            <Product equipment={filteredEquipment} />
          ) : (
            <p className="text-center text-red-500 text-xl mt-10">
              No product available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
