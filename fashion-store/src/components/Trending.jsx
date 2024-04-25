import { useGetTrendingQuery } from "../redux/service/productData";
const Trending = () => {
  const { data, error, isLoading } = useGetTrendingQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div className=" mx-9 h-[100vh]  bg-slate-200">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-black mt-9">Trending</h1>
        </div>
        <div className="flex justify-center mx-6 my-5 gap-20">
          {data.map((product) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
