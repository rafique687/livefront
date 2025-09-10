import { useContext} from "react";
import { CartItem } from "../context/CartContext";
function Cart()
{
      const { cart}=useContext(CartItem);
      console.log("cart--item--",cart);
  
    return(
        <>
        <div className="product-wrapper">
        {/* {cart.length===0 && <h1>Cart is Empty</h1>} */}
      { cart.map((cart,key)=>{
        return(
          <div style={{border:"1px solid #000"}} key={key}>
        <div className="colcart">
             <h1>Model : {cart.model}</h1>
            <img  src={cart.image}  style={{ width:"30%", height:"30%"}}/>
        </div>
        <div className="colcart">
                      
           <h3>Price :{cart.price}</h3>
         </div>
         </div>

        )
      })}
        

    </div>
        </>
    )
}
export default Cart
