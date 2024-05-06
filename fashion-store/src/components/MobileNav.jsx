import { RiCloseFill } from "react-icons/ri";
import Navlinks from "../constants";
import PropTypes from "prop-types";
import React from "react";

const MobileNav = ({ mobileNavOpen, handleCloseMobileNav }) => {
  return (
    <>
      {mobileNavOpen && (
        <div className="mobile-nav w-[75vw] h-[100vh]  fixed top-0 left-0 bg-white z-[1000] grid place-items-center">
          <RiCloseFill
            size={40}
            className="absolute top-5 right-9 md:right-20 md:top-10 "
            onClick={handleCloseMobileNav}
          />

          <div className="nav-links  md:text-4xl text-2xl flex flex-col gap-10 text-center">
            {Navlinks.map((link) => (
              <a href={link.path} key={link.name}>
                {link.name}
              </a>
            ))}
            <a href="/cart" className="font-bold">
              Cart
            </a>
          </div>
        </div>
      )}
    </>
  );
};

MobileNav.propTypes = {
  mobileNavOpen: PropTypes.bool.isRequired,
  handleCloseMobileNav: PropTypes.func.isRequired,
};

const MemoizedMobileNav = React.memo(MobileNav);
export default MemoizedMobileNav;
