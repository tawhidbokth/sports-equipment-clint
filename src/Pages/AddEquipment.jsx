import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './Provider/Provider';
const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddEquipment = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const description = form.description.value;

    const addItemList = {
      itemName,
      image,
      categoryName,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      description,
    };

    fetch('http://localhost:5000/equipment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addItemList),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('successfully added');
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">
        Add Sports Equipment
      </h1>
      <form
        onSubmit={handleAddEquipment}
        className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg grid grid-cols-2 gap-5"
      >
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-gray-700"
          >
            Image
          </label>
          <input
            type="url"
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
            value={user.email}
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
            value={user.displayName}
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
