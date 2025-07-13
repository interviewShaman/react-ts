import React, { useState, ChangeEvent } from "react";

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

export default function SimpleCartTable() {
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
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity to Add</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  placeholder="Qty"
                  value={quantityInputs[product.id] || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
