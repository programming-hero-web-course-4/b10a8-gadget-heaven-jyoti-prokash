import React from "react";
import Heading from "./Heading";
import { toast } from "react-toastify";

const Contact = () => {
   const handleSubmit = () =>{
    toast.success('success')
   }
  return (
    <div>
      <Heading
        title={`Contact Us`}
        subtitle={`Get in Touch with Us – We're Here to Help with Any Questions, Product Support, or Feedback to Enhance Your Experience!`}
      ></Heading>
      <div>
        <h1 className="text-center mt-10 text-2xl font-bold">Contact Form</h1>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 mx-auto border-2">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <textarea name="massage" id="" cols="50" rows="5" placeholder="Massage" className="border-2 rounded-2xl mt-6"></textarea>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
