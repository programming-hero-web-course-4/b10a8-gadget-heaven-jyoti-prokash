import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CategoryCard = () => {
    const data = useLoaderData()

    const category = useParams();
    const [products, setProducts] = useState(data);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(product => product.category === category.category)
            setProducts(filterByCategory);
        }
    }, [category, data]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
    );
};

export default CategoryCard;