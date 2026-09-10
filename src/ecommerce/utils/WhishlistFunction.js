export function removeWish(setWhishlist) {
  localStorage.removeItem("WishlistItems");
  setWhishlist([]);
}

export async function addToWhishlist(product) {
  try {
    const response = await fetch(
      "http://localhost:5000/api/user/whishlist",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: product._id,
          token: "kkk",
        }),
      }
    );

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}