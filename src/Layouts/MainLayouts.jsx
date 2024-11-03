import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {
    return (
        <div className="container mx-auto">
            <div className="">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;