import React, { useState, ChangeEvent, JSX } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const productsList: Product[] = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 150 },
];

export default function SimpleCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantityInputs, setQuantityInputs] = useState<Record<number, string>>(
    {}
  );

  const handleQuantityChange = (productId: number, value: string): void => {
    setQuantityInputs((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const addToCart = (product: Product): void => {
    const quantityToAdd = parseInt(quantityInputs[product.id]) || 1;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: quantityToAdd }];
      }
    });

    setQuantityInputs((prev) => ({
      ...prev,
      [product.id]: "",
    }));
  };

  const updateQuantity = (productId: number, amount: number): void => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getCartCount = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart Items: {getCartCount()}</h2>

      <h3>Products</h3>
      {productsList.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <input
            type="number"
            min="1"
            placeholder="Add count"
            value={quantityInputs[product.id] || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleQuantityChange(product.id, e.target.value)
            }
          />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <span>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          </div>
        ))
      )}
    </div>
  );
}
