import { Link } from "react-router-dom";


const Category = ({categories}) => {
    return (
        <div className="border-2 rounded-xl h-80 p-2 mt-16">
            <button className="btn w-40 mb-3 rounded-3xl hover:bg-[#9538E2]">All Product</button>
                {
                    categories.map(category =>(<div>
                        <Link><button className="btn w-40 mb-3 rounded-3xl hover:bg-[#9538E2]">{category.category}</button></Link>
                    </div>))
                }
        </div>
    );
};

export default Category;