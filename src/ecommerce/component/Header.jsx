import {useContext } from "react";
import { Link } from "react-router-dom"
import { CartItem } from "../context/CartContext";
function Header(){
    const { clearCart}=useContext(CartItem);
    return(
        <header>
            <h1>Ecommerce</h1>
            <ul style={{ color:"#fff" }}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li> <Link to="/whishlist">Whishlist</Link></li>
                <li> <button onClick={clearCart}>clear Cart</button></li>


            </ul>
            </header>
    )
}
export default Header