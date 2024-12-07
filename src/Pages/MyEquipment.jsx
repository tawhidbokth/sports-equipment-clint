import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyEquipment = () => {
  const equipmentList = useLoaderData();
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        {equipmentList.map(item => (
          <div
            key={item._id}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="mt-2 text-lg font-bold">{item.itemName}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-800 font-semibold">
                Price: ${item.price}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  // onClick={() => handleUpdate(item.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  // onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
