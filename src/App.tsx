import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SimpleCartTable from "./component/01-cart/CartExampleWithTable/SimpleCartTable";
import SimpleCart from "./component/01-cart/CartExampleWithoutTable/SimpleCart";
import ProductDropdown from "./component/02-dropdown/simpleDropDown/ProductDropdown";
import CategoryVariantSelector from "./component/02-dropdown/categoryVariantSelector/CategoryVariantSelector";
import SimpleDebounce from "./component/06-debounce/simpleDebounce/SimpleDebounce";
import SimpleThrottle from "./component/05-throttle/simpleThrottle/simpleThrottle";
import LodashDebounce from "./component/06-debounce/lodashDebounce/LodashDebounce";
import LodashThrottle from "./component/05-throttle/lodashThrottle/lodashThrottle";
import SimpleCustomHook from "./component/03-customHook/simpleCustomHook/simpleCustomHook";
import HigherOrderComponent from "./component/04-higherOrderComponent/simpleHigherOrderComponent/HigherOrderComponent";
import CapturingExample from "./component/07-eventBubblingAndCapturing/capturingExample/CapturingExample";
import BubblingExample from "./component/07-eventBubblingAndCapturing/bubblingExample/BubblingExample";

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
        <Link to="/higherOrderComponent"> Higher Order Component </Link> |
        <Link to="/bubblingExample"> Event Bubbling Example </Link> |
        <Link to="/capturingExample"> Event Capturing Example </Link>
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
        <Route path="/capturingExample" element={<CapturingExample />} />
        <Route path="/bubblingExample" element={<BubblingExample />} />
      </Routes>
    </Router>
  );
}
