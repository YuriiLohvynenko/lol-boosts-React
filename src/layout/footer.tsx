import { Link } from "react-router-dom";
import footers from "../data/footer.json";
const Footer = () => {
  return (
    <footer className="py-10 lg:py-20 border-t border-indigo-800 mt-10 lg:mt-20">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {footers.map((d: any, index: number) => (
            <div key={index}>
              <div className="flex justify-start items-center gap-2">
                <img src={d.icon} alt={d.title} />
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
    </footer>
  );
};
export default Footer;