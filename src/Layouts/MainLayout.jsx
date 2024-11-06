import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
             <Toaster />
            {/* Navber */}
            <Navber></Navber>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;