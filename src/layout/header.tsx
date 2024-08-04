import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaInstagram,
  FaBars,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import links from "../data/links.json";
import classNames from "../consts/classNames";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
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
  const socials = [
    { title: "", link: "", element: <FaTiktok /> },
    { title: "", link: "", element: <FaYoutube /> },
    { title: "", link: "", element: <FaDiscord /> },
    {
      title: "",
      link: "",
      element: (
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
      ),
    },
    { title: "", link: "", element: <FaInstagram /> },
  ];
  return (
    <>
      <header
        className={`w-full relative z-1 z-50 transition-all duration-100 bg-[#0f1a31] shadow-xl bg-opacity-75`}
      >
        <div className="w-full bg-[#0c1322]">
          <div className={`${classNames.containerClass} py-1`}>
            <div className="flex justify-between items-center">
              <div>
                <span className="hidden lg:block">
                  Expert <span className={`${classNames.textMClass}`}>LOL</span>{" "}
                  Coaching now available on LoL boost.
                </span>
              </div>
              <div className="flex justify-between w-full lg:w-auto lg:justify-end items-center gap-5">
                <div className="flex justify-start items-center gap-1 lg:gap-3">
                  {socials.map((d: any, index: number) => (
                    <a
                      key={index}
                      href={d.link}
                      className="px-2 py-1 rounded-lg hover:bg-indigo-500 hover:bg-opacity-50"
                    >
                      {d.element}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-1 lg:gap-2 text-sm">
                  <Link to={`/login`} className={`${classNames.hoverClass}`}>
                    <span className="hidden lg:block">Login</span>
                    <FaSignInAlt className="block lg:hidden w-6" />
                  </Link>
                  |
                  <Link to={`/register`} className={`${classNames.hoverClass}`}>
                    <span className="hidden lg:block">Register</span>
                    <FaUserPlus className="block lg:hidden w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classNames.containerClass} pb-3`}>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="flex w-full lg:w-auto items-center justify-between lg:justify-start relative flex-shrink-0">
              <Link to="/">
                <img
                  src="/images/logo/logo-light.png"
                  alt="LOGO"
                  className="h-16"
                />
              </Link>
              <button
                className="block lg:hidden p-3 rounded-lg hover:bg-indigo-400 bg-indigo-800"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={`${
                toggle ? "h-auto py-4" : "h-0"
              } lg:h-auto transition-all duration-300 overflow-clip absolute lg:static w-full lg:w-auto top-full bg-[#0f1a31] px-4 lg:p-0 bg-opacity-75 lg:bg-transparent`}
              tabIndex={1}
              ref={navRef}
              // onBlur={() => setToggle(false)}
            >
              <div className="flex flex-col lg:flex lg:flex-row justify-end items-stretch lg:items-center gap-1">
                {links.map((d: any, index: number) => (
                  <NavLink
                    key={index}
                    to={d.link}
                    className={({ isActive }) =>
                      `whitespace-nowrap px-3 py-2 rounded-md shadow-md hover:bg-indigo-600 ${
                        isActive ? "bg-indigo-500" : ""
                      }`
                    }
                    onClick={() => setToggle(false)}
                  >
                    {d.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
