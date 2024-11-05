import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='bg-[#9538E2] py-10 text-center  text-white'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div className='w-3/6 mx-auto mt-4'>
            <p className=''>{subtitle}</p>
            </div>
        </div>
    );
};

export default Heading;