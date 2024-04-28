import { useDispatch, useSelector } from "react-redux";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { removeFromCart } from "../redux/slices/addToCartSlice";
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addToCart.cart);
  const handleCloseCart = () => {
    dispatch(triggerCart());
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div>
      <div className="lg:w-[400px] w-full lg:h-[320px] h-full z-[100] absolute top-16 lg:right-1 py-3 bg-black overflow-y-scroll">
        <button
          onClick={handleCloseCart}
          className="text-white lg:visible hidden"
        >
          <RiCloseFill size={30} className="absolute top-3 right-5" />
        </button>
        <h1 className="text-white absolute top-3 left-5 font-bold text-xl lg:visible hidden">
          Cart
        </h1>
        <div className="cart-item grid gap-2 py-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className=" w-[350px] flex justify-between bg-white mx-auto place-items-center rounded-md"
              >
                <div className="cart-content flex gap-7 p-3">
                  <div className="cart-image h-full w-1/4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="cart-details">
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                  </div>
                </div>

                <div className="cart-remove mr-2">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <MdOutlineDeleteForever size={30} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart grid place-items-center mt-20 font-bold text-2xl">
              <p className="text-white">Cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
