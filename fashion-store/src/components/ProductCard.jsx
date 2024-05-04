import PropTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product, index, handleToggleModal }) => {
  const formattedPrice = product.price.toFixed(2);
  return (
    <div className="product-card border-1 border-solid border-black pt-2 mt-9 md:w-[70vw] lg:w-[370px] xl:w-[300px] w-[80vw]  h-[485px] flex flex-col items-center place-items-center gap-2 bg-white rounded-lg shadow-lg hover:scale-[1.1] transition-all duration-300 ease-in-out">
      <div className="product-image w-[250px] h-[250px]">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => handleToggleModal(index)}
          className="w-full h-full rounded-lg object-cover:fit"
        />
      </div>
      <h1 className="text-lg font-medium text-center p-2">{product.title}</h1>
      <div className="price-cart grid  gap-3 justify-center px-2 pb-2 ">
        <p className="text-3xl  font-bold">${formattedPrice}</p>
        <AddToCartButton
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ProductCard;
