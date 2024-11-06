import { Link, useNavigate } from "react-router-dom";

const Allproduct = ({ products }) => {
    const { product_title, price, product_image,product_id } = products || {}
    const navigate = useNavigate()
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="category image"
                    className="rounded-xl h-48" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/viewDetails/${product_id}`}  className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Allproduct;