import { useDispatch, useSelector } from "react-redux";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { addToCart } from "../redux/slices/addToCartSlice";
import { setLoading } from "../redux/slices/loadingSlice";
import { RiCloseFill } from "react-icons/ri";
import { useEffect } from "react";
import CartList from "./CartList";
import supabase from "../supabase";
import Loader from "./Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.loading.isLoading);

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
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleCloseCart = () => {
    dispatch(triggerCart());
  };

  return (
    <div>
      <div className="lg:w-[450px] w-full lg:h-[320px] h-full z-[100] absolute top-16 lg:right-1 py-3 bg-black overflow-y-scroll">
        <button onClick={handleCloseCart} className="text-white">
          <RiCloseFill size={30} className="absolute top-3 right-5" />
        </button>
        <h1 className="text-white absolute top-3 left-5 font-bold text-xl">
          Cart
        </h1>
        {loading ? (
          <Loader color="#fff" />
        ) : (
          <div className="cart-item py-4">
            <CartList bg={"#fff"} text={"#000"} cartText={"#fff"} width={95} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
