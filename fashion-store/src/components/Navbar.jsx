import { FaOpencart, FaUserAlt } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { openMobileNav, closeMobileNav } from "../redux/slices/mobileNavSlice";
import { useDispatch, useSelector } from "react-redux";
import Navlinks from "../constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const dispatch = useDispatch();
  const mobileNavOpen = useSelector((state) => state.mobileNav.mobileNavOpen);

  const handleOpenMobileNav = () => {
    dispatch(openMobileNav());
  };

  const handleCloseMobileNav = () => {
    dispatch(closeMobileNav());
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
        <div className="nav-links text-2 lg:flex lg:visible invisible gap-6 text-center mt-2 ">
          {Navlinks.map((link) => (
            <a href={link.path} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="user-and-cart lg:flex lg:visible invisible  gap-6">
          <div className="cart text-2xl">
            <FaOpencart />
          </div>
          <div className="user text-2xl">
            <FaUserAlt />
          </div>
        </div>
        <div className="menu-icon lg:hidden">
          <HiMenuAlt3 size={30} onClick={handleOpenMobileNav} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
