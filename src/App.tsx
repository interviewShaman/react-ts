import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SimpleCartTable from "./component/cart/CartExampleWithTable/SimpleCartTable";
import SimpleCart from "./component/cart/CartExampleWithoutTable/SimpleCart";
import ProductDropdown from "./component/dropdown/simpleDropDown/ProductDropdown";
import CategoryVariantSelector from "./component/dropdown/categoryVariantSelector/CategoryVariantSelector";
import SimpleDebounce from "./component/debounce/simpleDebounce/SimpleDebounce";
import SimpleThrottle from "./component/throttle/simpleThrottle/simpleThrottle";
import LodashDebounce from "./component/debounce/lodashDebounce/LodashDebounce";
import LodashThrottle from "./component/throttle/lodashThrottle/lodashThrottle";
import SimpleCustomHook from "./component/customHook/simpleCustomHook/simpleCustomHook";
import HigherOrderComponent from "./component/higherOrderComponent/simpleHigherOrderComponent/HigherOrderComponent";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Cart with Table</Link> |
        <Link to="/SimpleCart"> Cart without Table</Link> |
        <Link to="/dropdown"> Dropdown </Link> |
        <Link to="/multipleDropdown"> Two Dropdown Example </Link> |
        <Link to="/simpleDebounce"> Simple Debounce </Link> |
        <Link to="/simpleThrottle"> Simple Throttle </Link> |
        <Link to="/lodashDebounce"> Lodash Debounce </Link> |
        <Link to="/lodashThrottle"> Lodash Throttle </Link> |
        <Link to="/simpleCustomHook"> Simple Custom Hook </Link> |
        <Link to="/higherOrderComponent"> Higher Order Component </Link>
      </nav>

      <Routes>
        <Route path="/" element={<SimpleCartTable />} />
        <Route path="/SimpleCart" element={<SimpleCart />} />
        <Route path="/dropdown" element={<ProductDropdown />} />
        <Route path="/multipleDropdown" element={<CategoryVariantSelector />} />
        <Route path="/simpleDebounce" element={<SimpleDebounce />} />
        <Route path="/simpleThrottle" element={<SimpleThrottle />} />
        <Route path="/lodashDebounce" element={<LodashDebounce />} />
        <Route path="/lodashThrottle" element={<LodashThrottle />} />
        <Route path="/simpleCustomHook" element={<SimpleCustomHook />} />
        <Route
          path="/higherOrderComponent"
          element={<HigherOrderComponent />}
        />
      </Routes>
    </Router>
  );
}
