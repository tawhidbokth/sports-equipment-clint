import React, { useEffect, useState } from 'react';

const TopRatedCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch('https://sports-equipment-server-indol.vercel.app/equipment')
      .then(res => res.json())
      .then(data => {
        setCampaigns(data);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Top-Rated Campaigns
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {campaigns.map(campaign => (
          <div
            key={campaign.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {campaign.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">
                  ${campaign.price}
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedCampaigns;
