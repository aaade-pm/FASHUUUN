import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { profileTrigger } from "../redux/slices/profileSlice";
const ProfileIcon = () => {
  const dispatch = useDispatch();
  const handleOpenProfile = () => {
    dispatch(profileTrigger());
  };

  return (
    <div className="user text-2xl">
      <FaUserAlt onClick={handleOpenProfile} />
    </div>
  );
};

export default ProfileIcon;
