import { Link } from "react-router-dom";
import {useContext } from "react";

import { CartItem } from "../context/CartContext";
function ProductContainer({product}) {
  const { addToCart}=useContext(CartItem);

   function trimContent(input) {

if (input.split(" ").length > 8) {

return input.split(" ").slice(0, 7).join(" ") + "...";

} else return input;

}
  return (
 
  <div className="product" style={{ marginTop:"10px"}}>
     <Link to={`singleproduct/${product._id}`}>
    <img src={product.image} alt="Product Image" style={{ width:"100%", height:"60%"}}/>
    </Link>
    <div className="content" >
         <h3>{trimContent(product.productname)}</h3>
       
       
       
    </div>

  
  <button className="custom-button" onClick={()=>addToCart(product)}>Add To Cart</button>
   <p style={{ boreder: '1px'}}>{trimContent(product.description)}</p>
  </div>

  )
}

export default ProductContainer;
 