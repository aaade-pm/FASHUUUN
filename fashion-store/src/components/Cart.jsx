import { useDispatch, useSelector } from "react-redux";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { RiCloseFill } from "react-icons/ri";
import CartList from "./CartList";
import Loader from "./Loader";
import useGetProducts from "../custom_hooks/useGetProducts";
import { useMemo } from "react";

const Cart = () => {
  useGetProducts();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.isLoading);
  const cart = useSelector((state) => state.addToCart.cart);
  const sum = useMemo(
    () => cart?.reduce((acc, item) => acc + item.product_total, 0).toFixed(2),
    [cart]
  );

  const handleCloseCart = () => {
    dispatch(triggerCart());
  };

  return (
    <div>
      <div className="hidden lg:block lg:w-[450px] w-full lg:h-[320px] h-full z-[100] absolute top-16 lg:right-1 py-3 bg-black overflow-y-scroll">
        <button onClick={handleCloseCart} className="text-white">
          <RiCloseFill size={30} className="absolute top-3 right-5" />
        </button>
        <h1 className="text-white absolute top-3 left-5 font-bold text-xl">
          Cart
        </h1>
        <h1 className="text-white absolute top-5 right-32 font-bold text-sm">
          TOTAL : <span className="text-lime-200 font-bold">${sum}</span>
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
