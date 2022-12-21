import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
