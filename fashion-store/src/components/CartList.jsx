import { MdOutlineDeleteForever } from "react-icons/md";
import { removeFromCart } from "../redux/slices/addToCartSlice";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../supabase";
import PropTypes from "prop-types";

const CartList = ({ bg, text, cartText, width }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.addToCart.cart);

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
      {cart ? (
        cart.map((piece) => (
          <div
            key={piece.id}
            style={{ backgroundColor: bg, color: text, width: `${width}%` }}
            className=" w-[400px] h-[125px] flex place-items-center mx-auto p-2 rounded-md mt-2 border-2 border-black"
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
            <div className="details-and-remove w-[300px] flex justify-between place-items-center mx-2 ">
              <div className="cart-details">
                <h1 className="font-bold">{piece.title}</h1>
                <p>${piece.price.toFixed(2)}</p>
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
          <p style={{ color: cartText }}>Cart is empty</p>
        </div>
      )}
    </div>
  );
};

CartList.propTypes = {
  bg: PropTypes.string,
  text: PropTypes.string,
  cartText: PropTypes.string,
  width: PropTypes.number,
};
export default CartList;
