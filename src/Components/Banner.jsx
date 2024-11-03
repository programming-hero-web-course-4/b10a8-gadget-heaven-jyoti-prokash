import React from "react";
import BannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="space-y-7 text-center bg-[#9538E2] text-white h-[600px] relative pt-10 rounded-2xl">
        <h1 className="text-6xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
        <Link to="dashboard"><button className="btn mt-5 rounded-3xl text-xl font-bold bg-white text-[#9538E2]">
          Shop Now
        </button></Link>
      </div>

      <div className="absolute -bottom-36 left-[400px] p-4 border-4 rounded-3xl mb-16">
        <img className="w-[1062px] h-[563px] rounded-2xl" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
