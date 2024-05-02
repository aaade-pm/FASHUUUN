import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import { setUser } from "../redux/slices/userSlice";
import { useEffect } from "react";

const ProfileDisplay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          dispatch(setUser(value.data.user));
        }
      });
    }
    getUserData();
  }, [dispatch]);

  async function signOutUser() {
    await supabase.auth.signOut();
    dispatch(setUser(null));
    navigate("/");
    window.location.reload();
  }

  const signInUser = () => {
    navigate("/login");
  };

  return (
    <div className=" h-[300px] w-[300px] rounded-lg bg-black text-white absolute top-16 right-5 z-[100] flex flex-col place-items-center">
      <h1 className="mt-4">User Profile</h1>
      <div>
        <p className="border-b-2 w-[280px] text-center py-3 font-bold">
          USER:
          {user && user !== null ? (
            <>
              <span>{user.email}</span>
            </>
          ) : (
            <span> You are not a member yet?</span>
          )}
        </p>
        <div className="sign-out grid place-items-center">
          {user ? (
            <button
              className="bg-white text-black py-2 px-10 rounded-lg absolute bottom-5 hover:bg-[grey] hover:text-white transition duration-300 ease-in-out"
              onClick={signOutUser}
            >
              Sign out
            </button>
          ) : (
            <button
              className="bg-white text-black py-2 px-10 rounded-lg absolute bottom-5 hover:bg-[grey] hover:text-white transition duration-300 ease-in-out"
              onClick={signInUser}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
