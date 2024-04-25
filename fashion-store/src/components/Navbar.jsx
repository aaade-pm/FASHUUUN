import { FaOpencart, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-5 my-3">
      <div className="logo">
        <h1 className="text-2xl font-medium">FASHUUUN</h1>
      </div>
      <div className="nav-links text-2 flex gap-6 text-center mt-2">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="user-and-cart flex gap-6">
        <div className="cart text-2xl">
          <FaOpencart />
        </div>
        <div className="user text-2xl">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
