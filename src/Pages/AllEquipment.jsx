import React from 'react';

const AllEquipment = () => {
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
                Gaming Laptop
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                Electronics
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">$1200</td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">15</td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button class="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                Office Chair
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">
                Furniture
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">$150</td>
              <td class="px-6 py-4 text-sm text-gray-700 border-b">50</td>
              <td class="px-6  py-4 text-sm text-gray-700 border-b">
                <button class="px-4 py-2 text-white mb-2 bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </button>

                <button class="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
