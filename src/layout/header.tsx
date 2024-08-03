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
        className={`w-full relative z-1 z-50 transition-all duration-100 bg-[#0f1a31] shadow-xl ${
          scrolled ? "bg-opacity-90" : "bg-opacity-50"
        }`}
      >
        <div className="w-full bg-[#0c1322]">
          <div className="container px-4 lg:px-0 py-1 mx-auto">
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
                  <svg
                    className="w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"
                    ></path>
                  </svg>
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
