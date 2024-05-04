import { useGetTrendingQuery } from "../redux/service/productData";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openModal } from "../redux/slices/modalSlice";
import Loader from "./Loader";

const Trending = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const { data, error, isLoading } = useGetTrendingQuery();
  if (isLoading) return <Loader color={"#000"} />;
  if (error) return <p>Error: {error.message}</p>;
  const products = data;
  const handleToggleModal = (index) => {
    const clickedProduct = products[index];
    setSelectedProduct(clickedProduct);
    dispatch(openModal());
  };

  return (
    <div>
      {selectedProduct && modalOpen && <Modal product={selectedProduct} />}
      <div className=" lg:mx-9 mx-0 lg:h-[650px] md:h-[1600x] h-[1700px]  bg-slate-200">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-black mt-9">Trending</h1>
        </div>
        <div className="lg:flex grid place-items-center justify-center mx-6 lg:my-5 my-0 lg:gap-20 gap-2 ">
          {products
            ? products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  handleToggleModal={handleToggleModal}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Trending;
