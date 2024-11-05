import React from "react";
import { NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {title,price,image,productId} = gadget;
  return (
    <div>
      <div className="card card-compact w-96 border">
        <figure>
          <img className="w-[280px] h-[300px]"
            src={image}
            alt="gadget"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-lg font-medium">Price: ${price}</p>
          <div className="card-actions">
            <NavLink to={`/details/${productId}`}><button className="font-bold text-lg btn border-[#9538E2] text-[#9538E2]">View Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
