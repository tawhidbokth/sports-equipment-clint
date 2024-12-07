import { useLoaderData } from 'react-router-dom';

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

  return (
    <div className="card card-compact w-[500px] bg-base-100  shadow-xl mx-auto">
      <figure>
        <img src={image} alt={itemName} />
      </figure>

      <div className="card-body">
        <h1 className="text-2xl font-bold mb-2">{itemName}</h1>
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {categoryName}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Rating:</strong> {rating} stars
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Customization:</strong> {customization}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Processing Time:</strong> {processingTime}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Stock Status:</strong> {stockStatus} available
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
