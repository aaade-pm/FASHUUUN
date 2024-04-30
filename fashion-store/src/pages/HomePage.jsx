import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Navbar from "../components/Navbar";
import { setUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import supabase from "../supabase";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          dispatch(setUser(value.data.user));
        }
      });
    }
    getUserData();
  }, [dispatch]);

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <Navbar />
          <Hero />
          <Trending />
          <Footer />
        </>
      ) : (
        <div>
          <h1>Sign in to view content</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
