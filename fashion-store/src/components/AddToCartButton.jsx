import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import ProtoTypes from "prop-types";
import supabase from "../supabase";

const AddToCartButton = (props) => {
  const { id, title, price, image } = props;
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  async function handleAddToCart() {
    try {
      if (user && user.id) {
        const { data, error } = await supabase
          .from("cart_products")
          .insert({
            user_id: user.id,
            id: id,
            title: title,
            price: price,
            image: image,
          })
          .single();

        if (error) {
          if (error.details?.includes("already exists")) {
            alert("Item already exists in the cart.");
          } else {
            throw error;
          }
        }

        if (data !== null) {
          dispatch(addToCart(data));
        }
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
};

export default AddToCartButton;
