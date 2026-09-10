import React from 'react';
import { useState, useEffect,useContext } from 'react';
import './ecommerce.css';
import './cart.css';
import './LoginPouup.css';
import './nav.css';
import { CartItem } from '../ecommerce/context/CartContext.jsx';
import { WishlistItems } from '../ecommerce/context/WhishlistItems.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import Header from './component/Header.jsx';
import LoginPopup from './component/LoginPopup.jsx';
import { AuthContext } from '../ecommerce/context/AuthContext.jsx';
import Cookies from 'js-cookie';

 import {
  addToCart , increaseQty, clearCart, decreaseQty} from '../ecommerce/utils/cartFunction.js';

function Home3(){
  // const [open, setOpen] = useState(true);
  const { isAuthenticated, cktoken } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    function setpoupopen(value)
    { 
      console.log("set popup called",value);
      if(value === false){
        setOpen(false);
      }else {
          setOpen(true);

      }
      }
    
    
       const [cart, setCart] = useState(
    localStorage.getItem("CartItems")
      ? JSON.parse(localStorage.getItem("CartItems"))
      : []  );
 
   useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("CartItems", JSON.stringify(cart));
    }
  }, [cart]);
  

  
    function removeWish(){
      localStorage.removeItem("WishlistItems");
      setWhishlist([]);
    }
    
    function removeItem(id){
      const filteredCart = cart.filter(item => item._id !== id);
      setCart (filteredCart);
    }



async function addToWhishlist(whishlistprod) {

    // Check if user is logged in
    console.log("isAuthenticated:--", isAuthenticated);
    if (!isAuthenticated) {
        alert("Please login first.");
        setpoupopen(true); // Open login popup
        return;
    }

    try {

        // Get token from localStorage
        //const token = localStorage.getItem("ckusertoken");
       const token = Cookies.get("ckusertoken")

       // console.log("Add to wishlist called:", whishlistprod);

        const response = await fetch(
            "http://localhost:5000/api/user/whishlist",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // Send JWT token
                },
                body: JSON.stringify({
                    item_id: whishlistprod._id,
                }),
            }
        );

        const data = await response.json();

        console.log(data);

        if (response.ok) {
            setMessage("Wishlist item added successfully!");
        } else {
            setMessage(data.message || "Failed to add wishlist item");
        }

    } catch (error) {
        console.error("Error:", error);
        setMessage("Server error. Please try again.");
    }
}


             


     return (
      
       <CartItem.Provider 
       value=
       {{  addToCart: (product) => addToCart(cart, setCart, product),
          cart,
          increaseQty : (id) => increaseQty(cart, setCart,id),
          clearCart : () => clearCart(setCart),
          decreaseQty: (id) => decreaseQty(cart, setCart, id),
          removeItem,
          open,
          setpoupopen
        }} >
        <WishlistItems.Provider 
        value={{ addToWhishlist,removeWish}} >
          <Header/>
        <LoginPopup isOpen={open} onClose={() => setpoupopen(false)} />
        <Outlet />

        </WishlistItems.Provider>
        </CartItem.Provider>
      
     
  );
}

export default Home3;