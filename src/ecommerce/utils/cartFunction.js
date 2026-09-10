export function addToCart(cart, setCart, product) {
  const exists = cart.find(item => item._id === product._id);

  if (exists) {
    const updatedCart = cart.map(item =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart); // ✅ fixed (was setCatt)
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
}

export function increaseQty(cart, setCart, id) {
  const updated = cart.map(item =>
    item._id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCart(updated);
}

export function decreaseQty(cart, setCart, id) {
  const updated = cart
    .map(item =>
      item._id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0);

  setCart(updated);
}

export function removeItem(cart, setCart, id) {
  const filtered = cart.filter(item => item._id !== id);
  setCart(filtered);
}

export function clearCart(setCart) {
  localStorage.removeItem("CartItems");
  setCart([]);
}