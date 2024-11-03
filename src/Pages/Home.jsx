import Gadgets from "../Components/Gadgets/Gadgets";
import Banner from "../Components/Banner"



const Home = () => {
    return (
        <div className="">
            <div>
            <Banner></Banner>
            </div>
            
            <div className="mt-96"><Gadgets></Gadgets></div>
        </div>
    );
};

export default Home;