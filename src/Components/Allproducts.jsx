import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allproduct from './Allproduct';

const Allproducts = () => {
    const allProducts = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {
                allProducts.map((products,index) => <Allproduct key={index} products={products}></Allproduct>)
            }
        </div>
    );
};

export default Allproducts;