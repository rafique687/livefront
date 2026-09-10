import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Whislist() {

  const { isAuthenticated, cktoken } = useContext(AuthContext);

  const [whishlistprod, setWhishlist] = useState([]);

  // Fetch Wishlist
  useEffect(() => {

    const fetchWishlist = async () => {

      try {

        const res = await fetch(
          "http://127.0.0.1:5000/api/user/wishlist",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${cktoken}`,
              "Content-Type": "application/json"
            }
          }
        );

        const data = await res.json();

        console.log("Fetched wishlist data:", data);

        if (data.success) {
          setWhishlist(data.data);
        } else {
          setWhishlist([]);
        }

      } catch (error) {

        console.error("Wishlist Error:", error);

      }

    };

    if (cktoken && isAuthenticated) {
      fetchWishlist();
    }

  }, [cktoken, isAuthenticated]);


  // Remove Wishlist Item
  const removeWishlist = async (wishlistId) => {

    try {

      const res = await fetch(
        `http://127.0.0.1:5000/api/user/wishlist/${wishlistId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${cktoken}`,
            "Content-Type": "application/json"
          }
        }
      );

      const data = await res.json();

      console.log("Remove wishlist response:", data);

      if (data.success) {

        // Remove item from React state
        setWhishlist((prevWishlist) =>
          prevWishlist.filter((item) => item._id !== wishlistId)
        );

      } else {

        alert(data.message || "Unable to remove item");

      }

    } catch (error) {

      console.error("Remove Wishlist Error:", error);

    }

  };


  return (
    <div className="container">

      <h3>Wishlist</h3>

      {whishlistprod.length > 0 ? (

        <div className="wishlist-container">

          {whishlistprod.map((list) => {

            const product = list.productid;

            return (
              <div
                key={list._id}
                className="wishlist-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "20px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px"
                }}
              >

                {/* Product Image */}
                <div className="wishlist-image">

                  <img
                    src={
                      product?.image
                        ? product.image
                        : "/placeholder.jpg"
                    }
                    alt={product?.productname || "Product"}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover"
                    }}
                  />

                </div>


                {/* Product Details */}
                <div className="wishlist-details">

                  {/* Product Name */}
                  <h4>
                    {product?.productname}
                  </h4>

                  {/* Product Price */}
                  <p>
                    ₹{product?.price}
                  </p>


                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeWishlist(list._id)}
                  >
                    Remove
                  </button>

                </div>

              </div>
            );

          })}

        </div>

      ) : (

        <p>No items in wishlist</p>

      )}

    </div>
  );
}

export default Whislist;
