import { Link } from "react-router-dom";
import footers from "../data/footer.json";
import classNames from "../consts/classNames";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 767) {
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
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };
  return (
    <footer className="py-10 lg:py-20 border-t border-indigo-800 mt-10 lg:mt-20">
      <div className={`${classNames.containerClass}`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {footers.map((d: any, index: number) => (
            <div key={index}>
              <div className="flex justify-start items-center gap-2">
                {d.icon && <img src={d.icon} alt={d.title} />}
                <span className="text-lg">{d.title}</span>
              </div>
              <ul className="mt-4 ">
                {d.list?.map((l: any, i: number) => (
                  <li className="mb-1" key={i}>
                    <Link
                      to={l.link}
                      className="cursor-pointer text-gray-500 hover:text-white"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {scrolled && (
        <button
          className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-indigo-950 bg-indigo-500 shadow-2xl fixed bottom-16 end-12 z-10"
          onClick={goToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};
export default Footer;
