import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import ProtoTypes from "prop-types";
const AddToCartButton = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      })
    );
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
};

export default AddToCartButton;
