import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

const ProfileDisplay = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  async function signOutUser() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className=" h-[300px] w-[300px] rounded-lg bg-black text-white absolute top-16 right-5 z-[100]">
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button className="bg-white text-black p-3" onClick={signOutUser}>
            Sign out
          </button>
        </div>
      ) : (
        <h1>Not signed in</h1>
      )}
    </div>
  );
};

export default ProfileDisplay;
