import React from 'react';

const Footer = () => {
    return (
        <div className='mt-24'>
            <footer className="text-center bg-base-200 text-base-content border-base-300 border-t px-10 py-4 pt-24">
                <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
                <p className='text-base mt-2 w-7/12 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </footer>
            <footer className="footer bg-base-200 text-base-content p-10 pb-24 justify-evenly">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;