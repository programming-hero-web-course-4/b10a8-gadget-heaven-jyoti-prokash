import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div>
            <div className="text-center font-bold pb-4">
                <NavLink className={({isActive})=> `font-bold p-2 rounded-xl ${isActive ? 'bg-red-400':''}`} to='/'>all product</NavLink>
            </div>
            {
                categories.map(category => (
                    <div key={category.category} className="text-center mb-4">
                        <NavLink className={({isActive})=> `font-bold p-2 rounded-xl ${isActive ? 'bg-red-400':''}`} to={`/category/${category.category}`}>{category.category}</NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default Categories;