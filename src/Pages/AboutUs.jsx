import React from 'react';
import Heading from '../components/Heading';

const AboutUs = () => {
    return (
        <div>
            <Heading title={`About US`}></Heading>
            <p className='text-center text-xl text-gray-500 w-7/12 mx-auto mt-6 mb-10'>StatGadget is dedicated to revolutionizing data accessibility by offering cutting-edge gadgets that bring real-time insights directly to your fingertips. Our mission is to empower users—from individuals to large organizations—with tools that simplify complex data, enabling smarter, faster decision-making. Trust StatGadget to be your partner in data-driven success.</p>
        </div>
    );
};

export default AboutUs;