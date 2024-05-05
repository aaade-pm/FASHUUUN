import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import ProtoTypes from "prop-types";
import supabase from "../supabase";

const AddToCartButton = (props) => {
  const { id, title, price, image, productTotal, quantity } = props;
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.addToCart.cart);

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    try {
      if (user && user.id) {
        const isItemInCart = cart?.some((item) => item.id === id);
        if (isItemInCart) {
          alert("Item already exists in the cart.");
          return;
        }

        const { data, error } = await supabase
          .from("cart_products")
          .insert({
            user_id: user.id,
            id: id,
            title: title,
            price: price,
            image: image,
            product_total: productTotal,
            quantity: quantity,
          })
          .single();

        if (error) {
          if (error.details?.includes("already exists")) {
            alert("Item already exists in the cart.");
          } else {
            throw error;
          }
        }

        if (data !== null && !isItemInCart) {
          dispatch(addToCart(data));
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
      >
        Add to cart
      </button>
    </div>
  );
};

AddToCartButton.propTypes = {
  id: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  price: ProtoTypes.number.isRequired,
  image: ProtoTypes.string.isRequired,
  productTotal: ProtoTypes.number.isRequired,
  quantity: ProtoTypes.number.isRequired,
};

export default AddToCartButton;
