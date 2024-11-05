import Gadgets from "../Components/Gadgets/Gadgets";
import Banner from "../Components/Banner"
import Category from "../Components/Category";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="">
            <div>
            <Banner></Banner>
            </div>
            
            <div className="mt-96 flex gap-10">
                <Category categories={categories}></Category>
                <Gadgets></Gadgets>
            </div>
        </div>
    );
};

export default Home;