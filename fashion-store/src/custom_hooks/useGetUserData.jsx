import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import supabase from "../supabase";

const useGetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    await supabase.auth.getUser().then((value) => {
      if (value.data?.user) {
        dispatch(setUser(value.data.user));
      }
    });
  };
};

export default useGetUserData;
