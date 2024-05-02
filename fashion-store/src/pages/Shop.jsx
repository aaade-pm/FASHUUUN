import { openModal } from "../redux/slices/modalSlice";
import { setCategory } from "../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { useGetProductsQuery } from "../redux/service/productData";
import Modal from "../components/Modal";
import CategoryButtons from "../components/CategoryButtons";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const categoryProducts = useSelector((state) => state.category.category);
  const { data, error, isLoading } = useGetProductsQuery();
  const products = data;
  if (isLoading) return <Loader color={"#000"} />;
  if (error) return <p>Error: {error.message}</p>;

  const handleToggleModal = (index) => {
    const clickedProduct = products[index];
    setSelectedProduct(clickedProduct);
    dispatch(openModal());
  };

  const categoryButton = (category) => {
    const newProducts = products.filter(
      (product) => product.category === category
    );
    dispatch(setCategory(newProducts));
  };

  const allProducts = () => {
    dispatch(setCategory(null));
  };

  return (
    <>
      <Navbar />
      <CategoryButtons
        handleCategoryClick={categoryButton}
        handleAllProducts={allProducts}
      />

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 place-items-center mt-9 mb-9 border-t-2 border-black-200">
        {categoryProducts
          ? categoryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                handleToggleModal={handleToggleModal}
              />
            ))
          : products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                handleToggleModal={handleToggleModal}
              />
            ))}

        {modalOpen && selectedProduct && <Modal product={selectedProduct} />}
      </div>
    </>
  );
};

export default Shop;
