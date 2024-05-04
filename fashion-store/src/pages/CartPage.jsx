import CartList from "../components/CartList";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import useGetProducts from "../custom_hooks/useGetProducts";

const CartPage = () => {
  useGetProducts();
  const loading = useSelector((state) => state.loading.isLoading);

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
