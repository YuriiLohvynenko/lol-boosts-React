import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import classNames from "../consts/classNames";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-100 bg-[#0f1a31] shadow-xl ${
          scrolled ? "bg-opacity-90" : "bg-opacity-50"
        }`}
      >
        <div className="w-full bg-[#0c1322]">
          <div className="container px-4 lg:px-0 py-0 mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <span className="hidden lg:block">
                  Expert LOL Coaching now available on LoL boost.
                </span>
              </div>
              <div className="flex justify-end items-center gap-3">
                <button className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50">
                  <FaTiktok />
                </button>
                <button className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50">
                  <FaYoutube />
                </button>
                <button className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50">
                  <FaDiscord />
                </button>
                <button className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50">
                  X
                </button>
                <button className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50">
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 lg:px-0 pb-3 mx-auto">
          <div className="flex justify-between items-en">
            <Link to="/">
              <img
                src="/images/logo/logo-light.png"
                alt="LOGO"
                className="h-16"
              />
            </Link>
            <div className="flex justify-end items-center gap-6">
              <NavLink
                to="/login"
                className={`flex items-center gap-3 ${classNames.hoverClass}`}
              >
                <FaSignInAlt size="22px" />{" "}
                <span className="hidden md:block">Login</span>
              </NavLink>
              <NavLink
                to="/register"
                className={`flex items-center gap-3 ${classNames.hoverClass}`}
              >
                <FaUserPlus size="22px" />{" "}
                <span className="hidden md:block">Register</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
