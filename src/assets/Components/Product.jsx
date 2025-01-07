import { Link } from 'react-router-dom';

const Product = ({ equipment }) => {
  return (
    <div className="lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {equipment.map(pro => (
        <div
          key={pro._id}
          className="card card-compact bg-base-100 w-72 shadow-xl"
        >
          <figure>
            <img src={pro.image} alt={pro.itemName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {pro.itemName}</h2>
            <p>Category: {pro.categoryName}</p>
            <div className="card-actions justify-center">
              <Link to={`/equipment/${pro._id}`}>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
