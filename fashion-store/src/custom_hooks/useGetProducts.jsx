import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import { setLoading } from "../redux/slices/loadingSlice";
import supabase from "../supabase";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    getProducts();
  }, [user]);

  const getProducts = async () => {
    try {
      if (user?.id) {
        const { data, error } = await supabase
          .from("cart_products")
          .select("*")
          .eq("user_id", user.id);
        if (error) {
          throw error;
        }
        if (data !== null) {
          dispatch(addToCart(data));
          dispatch(setLoading(false));
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default useGetProducts;
