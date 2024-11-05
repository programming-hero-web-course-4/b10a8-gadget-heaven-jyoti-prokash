import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {

    return (
        <div className="container mx-auto">
            <div>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="mt-96">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;