import PropTypes from "prop-types";
import { closeModal } from "../redux/slices/modalSlice";
import { setQuantity } from "../redux/slices/quantitySlice";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import AddToCartButton from "./AddToCartButton";
import QuantitySelector from "./QuantitySelector";

const Modal = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  const formattedPrice = product.price.toFixed(2);
  const productTotal = product.price * quantity;
  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(setQuantity(1));
  };
  return (
    <div className="w-full h-full bg-white z-[100] fixed top-0 overflow-y-hidden grid place-items-center">
      <RiCloseFill
        onClick={handleCloseModal}
        size={30}
        className="absolute top-5 right-5"
      />
      <div className="modal lg:flex grid justify-center lg:gap-48 gap-16">
        <div className="product-image lg:w-[30vw] w-[50vw] lg:h-[75vh] md:h-[40vh] h-[30vh] mx-auto object-cover">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="product-details lg:w-[40vw] w-full h-full grid place-items-center my-auto lg:gap-7 gap-2">
          <h1 className="text-black text-center font-bold md:text-3xl lg:text-4xl">
            {product.title}
          </h1>
          <p className="text-black text-center font-bold text-2xl">
            ${formattedPrice}
          </p>
          <p className="text-black text-center md:text-2xl md:p-8 lg:p-0 px-2 ">
            {product.description}
          </p>
          <div className="flex gap-20 place-items-center">
            <QuantitySelector />
            <AddToCartButton
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              productTotal={productTotal.toFixed(2)}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Modal;
