import PropTypes from "prop-types";

const ProductCard = ({ key, product, index, handleToggleModal }) => {
  return (
    <div
      key={key}
      onClick={() => handleToggleModal(index)}
      className="product-card border-1 border-solid border-black pt-2 mt-9 md:w-[70vw] lg:w-[370px] xl:w-[300px] w-[80vw]  h-[400px] flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg hover:scale-[1.1] transition-all duration-300 ease-in-out"
    >
      <div className="product-image w-[250px] h-[250px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-lg object-cover:fit"
        />
      </div>
      <h1 className="text-lg font-medium text-center p-2">{product.title}</h1>
      <p className="text-lg font-medium">${product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  key: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ProductCard;
