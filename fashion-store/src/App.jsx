import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MobileCart from "./components/MobileCart";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { setUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import supabase from "./supabase";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
  });

  async function getUserData() {
    await supabase.auth.getUser().then((value) => {
      if (value.data?.user) {
        dispatch(setUser(value.data.user));
      }
    });
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<MobileCart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
