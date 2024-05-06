import { setQuantity } from "../redux/slices/quantitySlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const QuantitySelector = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  const handleIncrement = useCallback(() => {
    dispatch(setQuantity(quantity + 1));
  }, [quantity, dispatch]);

  const handleDecrement = useCallback(() => {
    if (quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  }, [quantity, dispatch]);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          -
        </button>
        <span className="px-4 py-2 font-bold">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantitySelector;
