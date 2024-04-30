import { FaOpencart, FaUserAlt } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { openMobileNav, closeMobileNav } from "../redux/slices/mobileNavSlice";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { profileTrigger } from "../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Navlinks from "../constants";
import MobileNav from "./MobileNav";
import Cart from "./Cart";
import ProfileDisplay from "./ProfileDisplay";

const Navbar = () => {
  const dispatch = useDispatch();
  const mobileNavOpen = useSelector((state) => state.mobileNav.mobileNavOpen);
  const cartTrigger = useSelector((state) => state.cartTrigger.cartTrigger);
  const userProfile = useSelector((state) => state.userProfile.profileOpen);

  const handleOpenMobileNav = () => {
    dispatch(openMobileNav());
  };

  const handleCloseMobileNav = () => {
    dispatch(closeMobileNav());
  };

  const handleOpenCart = () => {
    dispatch(triggerCart());
  };

  const handleOpenProfile = () => {
    dispatch(profileTrigger());
  };

  return (
    <>
      <MobileNav
        handleCloseMobileNav={handleCloseMobileNav}
        mobileNavOpen={mobileNavOpen}
      />

      <div className="flex justify-between  lg:mx-5 md:mx-5 mx-3 my-3">
        <div className="logo">
          <h1 className="text-2xl font-medium">FASHUUUN</h1>
        </div>
        <div className="nav-links text-2 lg:flex lg:visible hidden gap-6 text-center mt-2 ">
          {Navlinks.map((link) => (
            <a href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="user-and-cart lg:flex lg:visible hidden  gap-6">
          <div className="cart text-2xl">
            <FaOpencart onClick={handleOpenCart} />
          </div>
          <div className="user text-2xl">
            <FaUserAlt onClick={handleOpenProfile} />
          </div>
        </div>
        <div className="menu-icon lg:hidden">
          <HiMenuAlt3 size={30} onClick={handleOpenMobileNav} />
        </div>
      </div>
      {cartTrigger && <Cart />}
      {userProfile && <ProfileDisplay />}
    </>
  );
};

export default Navbar;
