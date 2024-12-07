import React from 'react';

const Product = ({ equipment }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3">
      {equipment.map(pro => (
        <div
          key={pro._id}
          className="card card-compact bg-base-100 w-96 shadow-xl"
        >
          <figure>
            <img src={pro.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
