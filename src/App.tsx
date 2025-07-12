import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SimpleCartTable from "./component/cart/CartExampleWithTable/SimpleCartTable";
import SimpleCart from "./component/cart/CartExampleWithoutTable/SimpleCart";
import ProductDropdown from "./component/dropdown/simpleDropDown/ProductDropdown";
import CategoryVariantSelector from "./component/dropdown/categoryVariantSelector/CategoryVariantSelector";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Cart with Table</Link> |
        <Link to="/SimpleCart"> Cart without Table</Link> |
        <Link to="/dropdown"> Dropdown </Link> | 
        <Link to="/multipleDropdown"> Two Dropdown Example </Link>
      </nav>

      <Routes>
        <Route path="/" element={<SimpleCartTable />} />
        <Route path="/SimpleCart" element={<SimpleCart />} />
        <Route path="/dropdown" element={<ProductDropdown />} />
        <Route path="/multipleDropdown" element={<CategoryVariantSelector />} />
      </Routes>
    </Router>
  );
}
