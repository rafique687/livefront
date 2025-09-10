import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { CartItem } from "../ecommerce/context/CartContext.jsx";
// import { WishlistItems } from "./context/WishlistItems.jsx";
import { WishlistItems } from "../ecommerce/context/WhishlistItems.jsx";

import "./ecommerce.css";

function Home() {
  const [cart, setCart] = useState(
    localStorage.getItem("CartItem")
      ? JSON.parse(localStorage.getItem("CartItem"))
      : []
  );

  const [whishlistprod, setWhishlist] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("CartItem", JSON.stringify(cart));
    }
  }, [cart]);


  function addToCart(idToAdd) {
  const productExists = cart.find(item => item._id === idToAdd._id);

  if (productExists) {
    // If product already in cart → increase quantity
    const updatedCart = cart.map(item =>
      item._id === idToAdd._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  } else {
   
      setCart([...cart, { ...idToAdd, quantity: 1 }]);
      console.log(cart)
    
  }
}


 
  function clearCart() {
  setCart([]);                      // clear React state
  localStorage.removeItem("CartItem"); // clear from localStorage
}

  function addToWhishlist(productToWhishlist) {
    setWhishlist([...whishlistprod, productToWhishlist]);
  }

  return (
    <WishlistItems.Provider
      value={{ whishlistprod, setWhishlist, addToWhishlist }}
    >
      <CartItem.Provider value={{ cart, clearCart, setCart, addToCart }}>
        <Header />
        <Outlet />
        <Footer />
      </CartItem.Provider>
    </WishlistItems.Provider>
  );
}

export default Home;
