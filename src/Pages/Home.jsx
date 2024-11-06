import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gadget from "../components/Gadget";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* explore gadget section */}
            <Gadget></Gadget>
            <div className="flex flex-col md:flex-row gap-4">
                {/* categories section */}
                <div className='p-6 w-48 bg-blue-100 h-[230px] rounded-xl'>
                    <Categories categories={categories}></Categories>
                </div>
                {/* sub outlet section */}
                <Outlet></Outlet>

                {/* sub outlet */}
            </div>
        </div>
    );
};

export default Home;