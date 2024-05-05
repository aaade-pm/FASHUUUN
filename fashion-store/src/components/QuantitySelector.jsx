import { setQuantity } from "../redux/slices/quantitySlice";
import { useDispatch, useSelector } from "react-redux";

const QuantitySelector = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  const handleIncrement = () => {
    dispatch(setQuantity(quantity + 1));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          -
        </button>
        <span className="px-4 py-2">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
