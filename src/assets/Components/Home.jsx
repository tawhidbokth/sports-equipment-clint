import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Banner from './Header/Banner';
import Product from './Product';
import React, { useState } from 'react';
import ReviewSection from './ReviewSection';
import FAQSection from './FaqSection';
import TopRatedCampaigns from './TopRatedCampaigns';
import NewsletterSection from './NewsletterSection';
import BlogSection from './BlogSection';

const Home = () => {
  const equipment = useLoaderData();
  const [filteredEquipment, setFilteredEquipment] = useState(equipment);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = category => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredEquipment(equipment);
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

      <div className="flex flex-col md:flex-row mx-aut lg:w-full ">
        <div className="w-full md:w-1/5">
          <Category
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </div>

        <div className="w-full md:w-4/5 bg-slate-100 py-8">
          <h1 className="text-center text-4xl font-bold my-10">
            Sports Equipment
          </h1>
          {filteredEquipment.length > 0 ? (
            <Product equipment={filteredEquipment} />
          ) : (
            <p className="text-center text-red-500 text-xl mt-10">
              No product available
            </p>
          )}
        </div>
      </div>

      <div className="mt-36">
        <BlogSection></BlogSection>
        <NewsletterSection></NewsletterSection>
        <ReviewSection></ReviewSection>
        <FAQSection></FAQSection>
      </div>
    </div>
  );
};

export default Home;
