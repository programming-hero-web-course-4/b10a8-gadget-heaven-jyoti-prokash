import { useLoaderData } from "react-router-dom";
import Heading from "../Components/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoredCart, getWishList } from "../Components/Utility";
import { MdOutlineDeleteForever } from "react-icons/md";

const Dashboard = () => {
  const allData = useLoaderData();
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const storeData = getStoredCart();
    const storeDataInt = storeData.map((id) => parseInt(id));
    const storeCart = allData.filter((cart) =>
      storeDataInt.includes(cart.productId)
    );
    setCartList(storeCart);
  }, []);
  //   wishlist
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storeWishList = getWishList();
    const storeWishListInt = storeWishList.map((id) => parseInt(id));
    const storeWish = allData.filter((wish) =>
      storeWishListInt.includes(wish.productId)
    );
    setWishList(storeWish);
  }, []);

  // short by price

  const handleShort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...cartList].sort((a, b) => b.price - a.price);
      setCartList(sorted);
    }
  };

  return (
    <div>
      <div>
        <Heading
          title={`Dashboard`}
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
      </div>
      <div>
        <Tabs>
          <TabList className="flex justify-center ">
            <Tab className="font-bold text-xl btn mt-5 px-[50px] mr-10">
              Cart
            </Tab>
            <Tab className="font-bold text-xl btn mt-5 px-[50px]">Wishlist</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="flex justify-between items-center p-5">
                <div>
                  <h2 className="text-2xl font-bold">
                    Cart: {cartList.length}{" "}
                  </h2>
                </div>
                <div className="flex gap-5 justify-center items-center">
                  <h2 className="mr-5 text-2xl font-bold">Total cost: 0</h2>
                  <button
                    onClick={() => handleShort("price")}
                    className="btn rounded-3xl border-[#9538E2] text-[#9538E2] text-lg font-semibold"
                  >
                    Sort By price
                  </button>
                  <button className="btn rounded-3xl bg-[#9538E2] text-white">
                    Purchase
                  </button>
                </div>
              </div>

              <div>
                {cartList.map((cart, productId) => (
                  <div
                    key={cart.productId}
                    className="flex justify-between items-center border-2 rounded-2xl gap-4 mt-5 px-5"
                  >
                    <div className="flex items-center">
                      <div>
                        <img
                          className="w-[180px] p-2 rounded-xl"
                          src={cart.image}
                          alt=""
                        />
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-2xl font-bold">{cart.title}</h1>
                        <p>{cart.description}</p>
                        <p className="font-bold">Price $ {cart.price}</p>
                      </div>
                    </div>
                    <div className="text-2xl mr-10">
                      <MdOutlineDeleteForever />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h1 className="text-2xl font-bold">Wishlist :</h1>
              {wishList.map((wish, productId) => (
                <div
                  key={wish.productId}
                  className="flex items-center border-2 rounded-2xl gap-4 mt-5"
                >
                  <div>
                    <img
                      className="w-[180px] p-2 rounded-xl"
                      src={wish.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{wish.title}</h1>
                    <p>{wish.description}</p>
                    <p className="font-bold">Price $ {wish.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default Dashboard;
