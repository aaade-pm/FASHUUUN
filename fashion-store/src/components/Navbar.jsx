import { FaOpencart, FaUserAlt } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-5 my-3">
      <div className="logo">
        <h1 className="text-2xl font-medium">FASHUUUN</h1>
      </div>
      <div className="nav-links text-2 lg:flex lg:visible hidden gap-6 text-center mt-2 ">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="user-and-cart lg:flex lg:visible hidden gap-6">
        <div className="cart text-2xl">
          <FaOpencart />
        </div>
        <div className="user text-2xl">
          <FaUserAlt />
        </div>
      </div>
      <div className="menu-icon lg:hidden">
        <HiMenuAlt3 size={30} />
      </div>
    </div>
  );
};

export default Navbar;
