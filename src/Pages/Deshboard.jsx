import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllCard, getAllWish } from "../components/utilities";
import { TiDeleteOutline } from "react-icons/ti";
import Heading from "../components/Heading";

const Deshboard = () => {

    const [product, setProduct] = useState([]);
    // console.log(product)
    const [productPrice, setProductPrice] = useState(0);
    useEffect(() => {
        const sum = product.reduce((accumulator, item) => accumulator + (item.price || 0), 0);
        setProductPrice(sum);
    }, [product]);
    useEffect(() => {
        const card = getAllCard()
        setProduct(card)

    }, [])

    const [wistList, setWishList] = useState([]);
    useEffect(() => {
        const wish = getAllWish()
        setWishList(wish)
    }, [])
    const handleSort = sortBy => {
        if (sortBy == 'price') {
            const sorted = [...product].sort((a, b) => b.price - a.price)
            setProduct(sorted);
        }
    }

    const confirmPurchase = () => {
        setProduct([]);  // Clear products
        setProductPrice(0);  // Reset price
        document.getElementById('my_modal_5').close();  // Close modal
    };


    return (
        <div>
            <div className="m-5">
            <Heading title={`Dash Board`} subtitle={`Dashboard Overview: Access real-time data, monitor trends, and analyze key metrics, all in one streamlined platform for smarter decision-making.`}></Heading>
            </div>
            
            <div>
                <Tabs>
                    <TabList className="flex justify-center gap-4">
                        <Tab className="btn px-[40px]">Card</Tab>
                        <Tab className="btn px-[40px]">WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div className="flex w-10/12 mx-auto my-6 gap-4 items-center justify-end">
                                <h2 className="text-xl font-bold">Total cost :{productPrice} <span></span></h2>
                                <button onClick={() => handleSort('price')} className="btn">Sort by Price</button>
                                <div>
                                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl text-center">Payment Successfully</h3>
                                            <p className="text-center mt-4">Thanks for purchasing</p>
                                            <p className="py-4 text-center">Total cost: ${productPrice}</p>
                                            <div className="modal-action justify-center">
                                                <button className="btn" onClick={confirmPurchase}>Close</button>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            {
                                product.map(product => (
                                    <div key={product.product_id} className="w-10/12 mx-auto">
                                        <div className="flex justify-between items-center mb-4 p-4 rounded-xl bg-gray-200">
                                            <div className="flex gap-4">
                                                <div>
                                                    <img className="h-32 rounded-xl" src={product.product_image} alt="" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{product.product_title}</h2>
                                                    <h2 className="text-base">{product.description}</h2>
                                                    <p className="text-xl font-bold">price: ${product.price}</p>
                                                </div>
                                            </div>
                                            <div className="mr-12 cursor-pointer"><TiDeleteOutline className="text-6xl text-red-400" /></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div>
                            {
                                wistList.map(product => (
                                    <div key={product.product_id} className="w-10/12 mx-auto mt-12">
                                        <div className="flex justify-between items-center mb-4 p-4 rounded-xl bg-gray-200">
                                            <div className="flex gap-4">
                                                <div><img className="h-32 rounded-xl" src={product.product_image} alt="" /></div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{product.product_title}</h2>
                                                    <p className="text-base">{product.description}</p>
                                                    <p className="text-xl font-bold">Price: ${product.price}</p>
                                                </div>
                                            </div>
                                            <div className="mr-12 cursor-pointer"><TiDeleteOutline className="text-6xl text-red-400" /></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <Outlet></Outlet>

        </div>

    );
};

export default Deshboard;