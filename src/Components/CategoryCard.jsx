import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCard = () => {
    const data = useLoaderData()
    console.log(data);
    return (

        <div>
            <h2>hello</h2>
        </div>
    );
};

export default CategoryCard;