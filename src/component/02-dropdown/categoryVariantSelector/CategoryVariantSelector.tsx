import { useState } from "react";

interface Variant {
  id: number;
  name: string;
}

interface Product {
  id: number;
  category: string;
  varient: Variant[];
}

const productsList: Product[] = [
  { 
    id: 1, 
    category: "size", 
    varient: [
      { id: 1, name: "XS" },
      { id: 2, name: "S" },
      { id: 3, name: "M" },
      { id: 4, name: "L" },
      { id: 5, name: "XL" },
      { id: 6, name: "XXL" }
    ] 
  },
  { 
    id: 2, 
    category: "color", 
    varient: [
      { id: 1, name: "Red" },
      { id: 2, name: "Blue" },
      { id: 3, name: "Green" }
    ] 
  }
];

export default function CategoryVariantSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedVariants, setSelectedVariants] = useState<Variant[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const product = productsList.find(p => p.category === category);
    setSelectedVariants(product ? product.varient : []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Two Dropdown Example</h2>

      <label>Select Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">--Select--</option>
        {productsList.map(product => (
          <option key={product.id} value={product.category}>
            {product.category}
          </option>
        ))}
      </select>

      <br /><br />

      <label>Select Variant:</label>
      <select disabled={!selectedVariants.length}>
        <option value="">--Select--</option>
        {selectedVariants.map(variant => (
          <option key={variant.id} value={variant.name}>
            {variant.name}
          </option>
        ))}
      </select>
    </div>
  );
}
