import React from 'react';

const EquipmentTable = ({ product }) => {
  const {
    itemName,
    image,
    categoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    description,
  } = product;

  return (
    <div>
      <div class="overflow-x-auto max-w-7xl mx-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Product Name
              </th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Category
              </th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Price
              </th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Stock
              </th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                {itemName}
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                {categoryName}
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">${price}</td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                {stockStatus}
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  View details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentTable;
