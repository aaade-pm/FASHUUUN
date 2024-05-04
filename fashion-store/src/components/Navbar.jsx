import { HiMenuAlt3 } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { openMobileNav, closeMobileNav } from "../redux/slices/mobileNavSlice";
import { triggerCart } from "../redux/slices/cartTriggerSlice";
import { useDispatch, useSelector } from "react-redux";
import Navlinks from "../constants";
import MobileNav from "./MobileNav";
import Cart from "./Cart";
import ProfileDisplay from "./ProfileDisplay";
import ProfileIcon from "./ProfileIcon";

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

  return (
    <>
      <MobileNav
        handleCloseMobileNav={handleCloseMobileNav}
        mobileNavOpen={mobileNavOpen}
      />

      <div className="flex justify-between  lg:mx-5 md:mx-5 mx-3 my-3">
        <div className="logo">
          <h1 className="text-2xl  font-serif font-bold">FASHUUUN</h1>
        </div>
        <div className="nav-links text-2 lg:flex lg:visible hidden gap-6 text-center mt-2 ">
          {Navlinks.map((link) => (
            <a
              href={link.path}
              key={link.name}
              className="hover:border-b-2 hover:border-black transition duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="user-and-cart lg:flex lg:visible hidden  gap-6">
          <div className="cart text-2xl">
            <FaOpencart onClick={handleOpenCart} />
          </div>
          <ProfileIcon />
        </div>
        <div className="flex gap-3 lg:hidden place-items-center">
          <ProfileIcon />
          <div className="menu-icon">
            <HiMenuAlt3 size={30} onClick={handleOpenMobileNav} />
          </div>
        </div>
      </div>
      {cartTrigger && <Cart />}
      {userProfile && <ProfileDisplay />}
    </>
  );
};

export default Navbar;
