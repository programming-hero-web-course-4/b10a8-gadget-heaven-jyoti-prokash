import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='mb-72'>
            <div className="relative text-center py-10 text-gray-200 pb-48 bg-[#9538E2] rounded-3xl">
                <div className="w-9/12 mx-auto space-y-6">
                    <h1 className="text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="btn"><Link to="deshboard"><button>Shop Now</button></Link></div>
                </div>
            </div>
            <div className='absolute left-[500px] top-96 max-w-8/12 mx-auto p-6 rounded-xl border'>
                <img className='rounded-xl h-[300px] w-[750px]' src={bannerImg} alt="" />
            </div>
        </div>

    );
};

export default Banner;