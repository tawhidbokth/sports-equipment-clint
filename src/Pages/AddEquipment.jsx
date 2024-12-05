import React from 'react';

const AddEquipment = () => {
  return (
    <div>
      <form className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg grid grid-cols-2 gap-5">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="itemName"
            className="block text-sm font-semibold text-gray-700"
          >
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="categoryName"
            className="block text-sm font-semibold text-gray-700"
          >
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-semibold text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-semibold text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="customization"
            className="block text-sm font-semibold text-gray-700"
          >
            Customization
          </label>
          <input
            type="text"
            id="customization"
            name="customization"
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="processingTime"
            className="block text-sm font-semibold text-gray-700"
          >
            Processing Time (Delivery Time)
          </label>
          <input
            type="text"
            id="processingTime"
            name="processingTime"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="stockStatus"
            className="block text-sm font-semibold text-gray-700"
          >
            Stock Status
          </label>
          <input
            type="number"
            id="stockStatus"
            name="stockStatus"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="userEmail"
            className="block text-sm font-semibold text-gray-700"
          >
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value="user@example.com"
            readOnly
            className="mt-2 p-2 w-full border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-semibold text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value="John Doe"
            readOnly
            className="mt-2 p-2 w-full border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
