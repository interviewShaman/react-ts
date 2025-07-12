import React, { useState, ChangeEvent } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const productsList: Product[] = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 150 },
];

export default function ProductDropdown() {
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <>
      <h2>Drop Down</h2>
      <div>
        <select value={selectedProduct} onChange={handleChange}>
          <option value="">Select Product</option>
          {productsList.map((product) => (
            <option key={product.id} value={product.id.toString()}>
              {product.id} - {product.name}
            </option>
          ))}
        </select>

        {selectedProduct && <div>Selected Product ID: {selectedProduct}</div>}
      </div>
    </>
  );
}
