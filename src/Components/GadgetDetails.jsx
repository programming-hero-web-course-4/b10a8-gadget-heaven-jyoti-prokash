import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoredCart, addWishList } from './Utility';
import { toast } from 'react-toastify';

const GadgetDetails = () => {
const {productId} = useParams()
const id = parseInt(productId)
const data = useLoaderData();
const product  = data.find(gadget => id === gadget.productId)
const {title,image,price,availability,description,specifications,rating} = product;


const handleCart = (id) =>{
        addStoredCart(id)
    }
const handleWishList = (id) =>{
    addWishList(id)
} 



    return (
        <div className='flex gap-4 items-center p-8 border-2 rounded-2xl m-40'>
            <div>
                    <img className='w-4/6' src={image} alt="" />
            </div>
            <div className='space-y-4 w-5/6'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h3>Price: $ {price}</h3>
                    <button className='btn btn-sm font-bold border-green-500 text-green-500 rounded-3xl'>{availability?(<p>stock</p>):(<p>out of stock</p>)}</button>
                    <p className='text-gray-500'>{description}</p>
                    specifications:
                    {/* {
                        specifications.map((value,index) => <li>{value}</li>)
                    } */}
                    <p className='font-bold'>Rating: {rating}</p>
                    <div className='flex gap-3'>
                    <button onClick={()=>handleCart(productId)} className='bg-[#9538E2] text-white font-bold btn btm-sm rounded-3xl'>Add To Cart</button>
                    <button onClick={()=>handleWishList(productId)} className='btn btm-sm rounded-full'><FaRegHeart /></button>
                    </div>
            </div>
        </div>
    );
};

export default GadgetDetails;