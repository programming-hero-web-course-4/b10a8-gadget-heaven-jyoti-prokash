import { json } from "react-router-dom";
import { toast } from "react-toastify";

// getCart items
const getStoredCart = (id) => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storeList = JSON.parse(storedListStr);
    return storeList;
  } else {
    return [];
  }
};
const addStoredCart = (id) => {
  const storedList = getStoredCart();
  if (storedList.includes(id)) {
    toast.warn('Already Added To Cart')
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storeListStr);
    toast.success('Add To Cart')
  }
};
// get wishlist
const getWishList = (id) =>{
    const wishListStr = localStorage.getItem("wish-list");
    if(wishListStr){
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else{
        return [];
    }
}
const addWishList = (id) =>{
    const wishList = getWishList();
    if(wishList.includes(id)){
        toast.warn('Already Added To Wishlist')
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem("wish-list",wishListStr);
        toast.success('Add To Wishlist')
    }
}
export { addStoredCart, getStoredCart,getWishList,addWishList };
