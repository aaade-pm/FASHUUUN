import CartList from "../components/CartList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../redux/slices/addToCartSlice";
import { setLoading } from "../redux/slices/loadingSlice";
import supabase from "../supabase";

const CartPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.isLoading);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      if (user?.id) {
        const { data, error } = await supabase
          .from("cart_products")
          .select("*")
          .eq("user_id", user.id);
        if (error) {
          throw error;
        }
        if (data !== null) {
          dispatch(addToCart(data));
          console.log("hippppp");
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2xl text-center mt-8">Cart Page</h1>
        {loading ? (
          <Loader color="#fff" />
        ) : (
          <div
            style={{ width: "90%" }}
            className="cart-itempy-4 border-2 border-black mx-auto my-7 py-3"
          >
            <CartList bg={"#fff"} text={"#000"} cartText={"#000"} width={95} />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
