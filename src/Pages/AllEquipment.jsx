import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../assets/Components/LoadingSpinner';

const AllEquipment = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setLoading(true);
    fetch('https://sports-equipment-server-indol.vercel.app/equipment')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleSort = order => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setSortOrder(order);
    setProducts(sortedProducts);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto py-5 mt-10">
        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-4">
          <select
            className="p-2 border border-gray-300 rounded"
            value={sortOrder}
            onChange={e => handleSort(e.target.value)}
          >
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>

        {/* Card View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product._id}
              className="border border-gray-200 rounded-lg shadow-md p-4 bg-white"
            >
              <img
                src={product.image}
                alt={product.itemName}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.itemName}
              </h3>
              <p className="text-sm text-gray-600">
                Category: {product.categoryName}
              </p>
              <p className="text-sm text-gray-600">Price: ${product.price}</p>
              <p className="text-sm text-gray-600">
                Stock: {product.stockStatus}
              </p>
              <Link to={`/equipment/${product._id}`}>
                <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
