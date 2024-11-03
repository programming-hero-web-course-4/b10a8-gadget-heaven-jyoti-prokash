import React from "react";

const Gadget = ({ gadget }) => {
  const {title,price,image} = gadget;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="gadget"
          />
        </figure>
        <div className="card-body">
          <h2 className="product_title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
