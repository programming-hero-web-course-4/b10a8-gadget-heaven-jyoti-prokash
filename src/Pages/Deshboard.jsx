import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllCard, getAllWish } from "../components/utilities";
import { TiDeleteOutline } from "react-icons/ti";

const Deshboard = () => {

    const [product, setProduct] = useState([]);

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

    return (
        <div>
            <div>
                <h2 className="text-center text-3xl font-bold mt-6">deshboard</h2>
                <p className="text-center py-4 w-7/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>


            </div>
            <div>
                <Tabs>
                    <TabList className="flex justify-center gap-4">
                        <Tab className="btn">Card</Tab>
                        <Tab className="btn">WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div className="flex w-10/12 mx-auto my-6 gap-4 items-center justify-end">
                                <h2 className="text-xl font-bold">Total cost : <span></span></h2>
                                <button onClick={() => handleSort('price')} className="btn">Sort by Price</button>
                                <button className="btn">Purchase</button>
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