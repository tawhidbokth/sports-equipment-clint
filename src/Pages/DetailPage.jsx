import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailPage = () => {
  const equipment = useLoaderData();
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
  } = equipment;

  const handlebuynow = () => {
    toast.success('Successfuly! buying', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const handleaddcart = () => {
    toast.success('Add To Cart Successful!', {
      position: 'top-center',
      autoClose: 2000,
    });
  };
  return (
    <div className="max-w-5xl mx-auto mt-20 p-5 bg-base-100 shadow-xl">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={image}
            alt={itemName}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold">{itemName}</h1>
          <p className="text-gray-700">
            <strong>Category:</strong> {categoryName}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> ৳{price}
          </p>
          <p className="text-gray-700">
            <strong>Rating:</strong> {rating} stars
          </p>
          <p className="text-gray-700">
            <strong>Customization:</strong> {customization}
          </p>
          <p className="text-gray-700">
            <strong>Processing Time:</strong> {processingTime}
          </p>
          <p className="text-gray-700">
            <strong>Stock Status:</strong> {stockStatus} available
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={handlebuynow}
              className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Buy Now
            </button>
            <button
              onClick={handleaddcart}
              className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailPage;
