import { openModal } from "../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { useGetProductsQuery } from "../redux/service/productData";
import Modal from "../components/Modal";
const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const { data, error, isLoading } = useGetProductsQuery();
  const products = data;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleToggleModal = (index) => {
    const clickedProduct = products[index];
    setSelectedProduct(clickedProduct);
    dispatch(openModal());
  };

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 place-items-center mt-9 mb-9 border-t-2 border-black-200">
      {products
        ? products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => handleToggleModal(index)}
              className="product-card border-1 border-solid border-black pt-2 mt-9 md:w-[70vw] lg:w-[370px] xl:w-[300px] w-[75vw]  h-[400px] flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg"
            >
              <div className="product-image w-[250px] h-[250px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full rounded-lg object-cover:fit"
                />
              </div>
              <h1 className="text-lg font-medium text-center p-2">
                {product.title}
              </h1>
              <p className="text-lg font-medium">${product.price}</p>
            </div>
          ))
        : null}

      {modalOpen && selectedProduct && <Modal product={selectedProduct} />}
    </div>
  );
};

export default Shop;
