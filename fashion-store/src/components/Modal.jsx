import PropTypes from "prop-types";
import { closeModal } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({ product }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className="w-full h-full bg-white z-[100] fixed top-0 overflow-y-hidden grid place-items-center">
      <RiCloseFill
        onClick={handleCloseModal}
        size={30}
        className="absolute top-5 right-5"
      />
      <div className="modal lg:flex grid justify-center lg:gap-48 gap-20">
        <div className="product-image lg:w-[30vw] w-[50vw] lg:h-[75vh] md:h-[40vh] h-[30vh] mx-auto object-cover">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="product-details lg:w-[40vw] w-full h-full grid place-items-center my-auto lg:gap-7 gap-3">
          <h1 className="text-black text-center font-bold md:text-3xl lg:text-4xl">
            {product.title}
          </h1>
          <p className="text-black text-center font-bold text-2xl">
            ${product.price}
          </p>
          <p className="text-black text-center md:text-2xl md:p-8 lg:p-0 p-4">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Modal;
