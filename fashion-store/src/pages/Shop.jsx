import { useGetProductsQuery } from "../redux/service/productData";
const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="grid grid-cols-4 place-items-center mt-9 mb-9 border-t-2 border-black-200">
      {data
        ? data.map((product) => (
            <div
              key={product.id}
              className="product-card border-1 border-solid border-black pt-2 mt-9 w-[300px] h-[400px] flex flex-col items-center gap-5 bg-white rounded-lg shadow-lg"
            >
              <div className="product-image w-[250] h-[250px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full rounded-lg object-cover:fit"
                />
              </div>
              <h1 className="text-lg font-medium">{product.name}</h1>
              <p className="text-lg font-medium">${product.price}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Shop;
