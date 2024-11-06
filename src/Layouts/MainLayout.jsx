import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../components/Navber";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
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