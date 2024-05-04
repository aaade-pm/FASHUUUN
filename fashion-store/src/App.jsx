import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { setUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import supabase from "./supabase";
import CartPage from "./pages/CartPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    await supabase.auth.getUser().then((value) => {
      if (value.data?.user) {
        dispatch(setUser(value.data.user));
      }
    });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
