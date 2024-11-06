import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='mb-72'>
            <div className="relative text-center  mt-8 py-10 text-gray-200 rounded-xl pb-48 bg-violet-800">
                <div className="w-9/12 mx-auto space-y-6">
                    <h1 className="text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="btn"><button>Shop Now</button></div>
                </div>
            </div>
            <div className='absolute left-[350px] top-96 max-w-8/12 mx-auto p-6 rounded-xl border'>
                <img className='rounded-xl h-[300px] w-[600px]' src={bannerImg} alt="" />
            </div>
        </div>

    );
};

export default Banner;