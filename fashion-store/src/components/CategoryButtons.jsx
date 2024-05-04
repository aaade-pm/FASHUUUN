import { useGetCategoriesQuery } from "../redux/service/productData";
import PropTypes from "prop-types";
import Loader from "./Loader";
import { FaAngleDown } from "react-icons/fa";
import { setCategoryTrigger } from "../redux/slices/categoryTriggerSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryButtons = ({ handleCategoryClick, handleAllProducts }) => {
  const dispatch = useDispatch();
  const categoryTrigger = useSelector(
    (state) => state.categoryTrigger.categoryTrigger
  );
  const handleCategoryTrigger = () => {
    dispatch(setCategoryTrigger(!categoryTrigger));
  };

  const { data, error, isLoading } = useGetCategoriesQuery();
  if (isLoading) return <Loader color={"#000"} />;
  if (error) return <p>Error: {error.message}</p>;
  const categories = data;

  return (
    <>
      <div
        onClick={handleCategoryTrigger}
        className="flex lg:hidden cursor-pointer place-items-center justify-center"
      >
        <p className="font-bold"> Show Categories</p>
        <FaAngleDown />
      </div>
      {categoryTrigger ? (
        <div className="categories grid lg:flex lg:justify-center lg:gap-10 lg:px-4 gap-2 place-items-center mt-6">
          <button
            onClick={handleAllProducts}
            className="category-button rounded-full bg-black text-white w-1/2  px-3 py-1 hover:bg-slate-400 hover:text-black transition-all duration-300 ease-in-out font-medium"
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
      ) : (
        <div className="categories hidden lg:flex lg:justify-center lg:gap-10 lg:px-4 gap-2 place-items-center mt-6">
          <button
            onClick={handleAllProducts}
            className="category-button rounded-full bg-black text-white w-1/2  px-3 py-1 hover:bg-slate-400 hover:text-black transition-all duration-300 ease-in-out font-medium"
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
      )}
    </>
  );
};

CategoryButtons.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
  handleAllProducts: PropTypes.func.isRequired,
};

export default CategoryButtons;
