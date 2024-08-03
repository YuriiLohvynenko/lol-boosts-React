import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTiktok, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import links from "../data/links.json";
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
              <div className="flex justify-end items-center gap-5">
                <div className="flex justify-start items-center gap-3">
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
                <div className="flex items-center gap-2 text-sm">
                  <Link to={`/login`} className={`${classNames.hoverClass}`}>
                    Login
                  </Link>
                  |
                  <Link to={`/register`} className={`${classNames.hoverClass}`}>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classNames.containerClass} pb-3`}>
          <div className="flex justify-between items-en">
            <Link to="/">
              <img
                src="/images/logo/logo-light.png"
                alt="LOGO"
                className="h-16"
              />
            </Link>
            <div className="flex justify-end items-center gap-6">
              {links.map((d: any, index: number) => (
                <NavLink
                  key={index}
                  to={d.link}
                  className={({ isActive }) =>
                    `whitespace-nowrap px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 ${
                      isActive ? "bg-indigo-500" : ""
                    }`
                  }
                >
                  {d.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
