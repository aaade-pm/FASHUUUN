import { useGetCategoriesQuery } from "../redux/service/productData";
import PropTypes from "prop-types";

const CategoryButtons = ({ handleCategoryClick, handleAllProducts }) => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const categories = data;
  return (
    <div className="categories lg:flex lg:justify-center lg:gap-12 gap-2 grid place-items-center mt-6">
      <button
        onClick={handleAllProducts}
        className="category-button rounded-full bg-black text-white w-1/2 lg:w-0 px-3 py-1 hover:bg-slate-400 hover:text-black transition-all duration-300 ease-in-out font-medium"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          value={category}
          onClick={() => handleCategoryClick(category)}
          className="category-button rounded-full bg-black text-white w-1/2 px-3 py-1 hover:bg-slate-400 hover:text-black transition-all duration-300 ease-in-out font-medium"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryButtons.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  handleAllProducts: PropTypes.func.isRequired,
};

export default CategoryButtons;
