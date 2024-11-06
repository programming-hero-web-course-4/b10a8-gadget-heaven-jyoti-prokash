import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-violet-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'bg-green-600' : ''}`} to='/'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/deshboard'>Deshboard</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink className={({ isActive }) => `font-bold p-2 rounded-xl ${isActive ? 'bg-green-600' : ''}`} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => `font-bold p-2 rounded-xl ${isActive ? 'bg-green-600' : ''}`} to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) => `font-bold p-2 rounded-xl ${isActive ? 'bg-green-600' : ''}`} to='/deshboard'>Deshboard</NavLink>
                        <NavLink className={({ isActive }) => `font-bold p-2 rounded-xl ${isActive ? 'bg-green-600' : ''}`} to='/aboutus'>About Us</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link className="text-xl"> <BsCart3 /></Link>
                    <Link><FaRegHeart /></Link>
                </div>
            </div>
            {/* <div className='mb-72'>
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
            </div> */}
        </div>
    );
};

export default Navber;