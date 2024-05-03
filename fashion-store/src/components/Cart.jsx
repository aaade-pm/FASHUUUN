import { useDispatch, useSelector } from "react-redux";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { addToCart, removeFromCart } from "../redux/slices/addToCartSlice";
import { setLoading } from "../redux/slices/loadingSlice";
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useEffect } from "react";
import supabase from "../supabase";
import Loader from "./Loader";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addToCart.cart);
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    getProducts();
  }, []);

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

  const deleteItem = async (itemId) => {
    try {
      if (user && user.id) {
        const { error } = await supabase
          .from("cart_products")
          .delete()
          .eq("id", itemId)
          .eq("user_id", user.id);
        if (error) {
          throw error;
        }

        dispatch(removeFromCart({ id: itemId }));
      }
    } catch (error) {
      alert("An error occurred while deleting the item.");
    }
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
          <div className="cart-item grid gap-2 py-4">
            {cart ? (
              cart.map((piece) => (
                <div
                  key={piece.id}
                  className=" w-[400px] h-[125px] flex place-items-center bg-white mx-4 p-2 rounded-md"
                >
                  <div className="cart-content ">
                    <div className="cart-image h-[95px] w-[90px] ">
                      <img
                        src={piece.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="details-and-remove w-[300px] flex justify-between place-items-center mx-2 text-black">
                    <div className="cart-details">
                      <h1 className="font-bold">{piece.title}</h1>
                      <p>${piece.price}</p>
                    </div>

                    <div className="cart-remove">
                      <button onClick={() => deleteItem(piece.id)}>
                        <MdOutlineDeleteForever size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart grid place-items-center mt-20 font-bold text-2xl">
                <p className="text-white">Cart is empty</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
