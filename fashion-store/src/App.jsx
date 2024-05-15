import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const Shop = React.lazy(() => import("./pages/Shop"));
const About = React.lazy(() => import("./pages/About"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

import useGetUserData from "./custom_hooks/useGetUserData";

const App = () => {
  useGetUserData();

  return (
    <>
      <Router>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
