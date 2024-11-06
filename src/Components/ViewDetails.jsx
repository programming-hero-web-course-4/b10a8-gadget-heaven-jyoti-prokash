import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { addCard, addWish, getAllCard, getAllWish} from "./utilities";
const ViewDetails = () => {
    const { product_id } = useParams()
    const allProductData = useLoaderData();
    const [product, setProduct] = useState({});
    const { product_title,product_id: currentId, product_image, price, description, Specification, rating } = product
    const [isCard, setIscard] = useState(false)
    useEffect(() => {
        const singleProduct = allProductData.find(sProduct => sProduct.product_id == product_id);
        setProduct(singleProduct);

        const card = getAllCard()
        const isExit = card.find(item => item.product_id == singleProduct.product_id)
        if(isExit){
            setIscard(true)
        }
    }, [allProductData, product_id])
    const [isWish, setIsWish] = useState(false)
    useEffect(() => {
        const singleProduct = allProductData.find(sProduct => sProduct.product_id == product_id);
        setProduct(singleProduct);

        const wish = getAllWish()
        const isExit = wish.find(item => item.product_id == singleProduct.product_id)
        if(isExit){
            setIsWish(true)
        }
    }, [allProductData, product_id])

    const handleAddCard = (product) => {
        addCard(product)
        setIscard(true)
    }
    const handleAddWish = (product) => {
        addWish(product)
        setIsWish(true)
    }


    return (
        <div>

            <div className="relative bg-[#9538E2] pb-48 mb-80">
                <div className="w-7/12 mx-auto text-white">
                    <h2 className="text-3xl font-bold text-center pt-6">Product Details</h2>
                    <p className="text-center mb-10">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-base-200 rounded-xl absolute top-60 left-60 shadow-xl w-[800px]">
                <img
                    className="w-96 rounded-xl"
                    src={product_image} />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{product_title}</h1>
                    <h4 className="text-xl font-bold">Price: ${price}</h4>
                    <p className="">{description}</p>
                    <p className="font-bold">Specification</p>
                    <p className="">{Specification}</p>
                    <p className="font-bold">Rating</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <p className="ml-4">{rating}</p>
                    </div>

                    <br />
                    <div className="flex gap-6">
                        <button disabled={isCard}  onClick={()=> handleAddCard(product)} className="btn rounded-full px-4 text-white bg-[#9538E2]">Add To Card</button>
                        <button disabled={isWish}  onClick={()=> handleAddWish(product)} className="btn"><FaRegHeart className="text-4xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;