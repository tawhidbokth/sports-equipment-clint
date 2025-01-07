import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from '../assets/Components/LoadingSpinner';

const MyEquipment = () => {
  const equipmentList = useLoaderData();
  const [loadedequ, setLoadedequ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadedequ(equipmentList);
      setLoading(false);
    }, 1000);
  }, [equipmentList]);

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
        fetch(
          `https://sports-equipment-server-indol.vercel.app/equipment/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remainingequipment = loadedequ.filter(
                item => item._id !== id
              );
              setLoadedequ(remainingequipment);
            }
          });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-4xl font-bold my-10">
        My Sports Equipment
      </h1>
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Name
              </th>
              {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Description
              </th> */}
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loadedequ.map(item => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b font-medium">
                  {item.itemName}
                </td>
                {/* <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {item.description}
                </td> */}
                <td className="px-6 py-4 text-sm text-gray-700 border-b font-semibold">
                  ${item.price}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  <div className="flex gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipment;
