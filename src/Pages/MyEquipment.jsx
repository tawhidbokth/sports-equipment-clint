import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = () => {
  const equipmentList = useLoaderData();
  const [loadedequ, setLoadedequ] = useState(equipmentList);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipment/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remainingequipment = loadedequ.filter(
                coffee => coffee._id !== id
              );
              setLoadedequ(remainingequipment);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">
        My Sports Equipment
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        {loadedequ.map(item => (
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
                <Link to={`/myequipment/updateequipment/${item._id}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
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
