import CartList from "../components/CartList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import useGetProducts from "../custom_hooks/useGetProducts";
import { useMemo } from "react";

const CartPage = () => {
  useGetProducts();
  const loading = useSelector((state) => state.loading.isLoading);
  const cart = useSelector((state) => state.addToCart.cart);
  const sum = useMemo(
    () => cart?.reduce((acc, item) => acc + item.product_total, 0).toFixed(2),
    [cart]
  );

  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2xl text-center mt-8">Cart Page</h1>
        <div className="grid place-items-center mt-6">
          <h1 className="text-black absolute font-bold text-xl">
            TOTAL : <span className="text-lime-900 font-bold">${sum}</span>
          </h1>
        </div>

        {loading ? (
          <Loader color="#000" />
        ) : (
          <div
            style={{ width: "90%" }}
            className="cart-item border-2 border-black mx-auto my-7 py-3"
          >
            <CartList bg={"#fff"} text={"#000"} cartText={"#000"} width={97} />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
