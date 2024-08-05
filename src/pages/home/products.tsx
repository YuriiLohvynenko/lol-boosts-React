import { useEffect } from "react";
import products from "../../data/products.json";
import classNames from "../../consts/classNames";
import { FaStar } from "react-icons/fa";
const Products = () => {
  useEffect(() => {}, []);
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20 relative z-1`}>
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold mt-6 lg:mt-10">
        THE ALL-IN-ONE <br /> Platform for{" "}
        <span className="text-indigo-600">LOL</span>{" "}
        <span className="text-indigo-400">BOOST</span>
      </h1>
      <div className="mt-6 lg:mt-10">
        <p className="text-center mx-auto max-w-[75%]">
          High-Quality Accounts ⸱ Premium Gaming Services ⸱ Expert Coaching
        </p>
        <div className="mt-4 text-center">
          <span className="inline-flex border-green-600 justify-center items-center gap-2 px-6 py-2 border rounded-lg bg-gradient-to-b from-green-900 to-green-[#ddd]">
            <span>Excellent</span>
            <div className="flex items-center gap-[1px]">
              {Array(5)
                .fill(1)
                .map((_: any, index: number) => (
                  <span className="p-1 text-sm rounded bg-green-400">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="flex items-center gap-[1px]">
              <FaStar className="text-green-400" />
              Trustpilot
            </div>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 lg:mt-10">
        {products.map((d: any, index: number) => {
          return (
            <div key={index} className=" hover:scale-105 cursor-pointer group">
              <img
                src={d?.url}
                alt={d.title}
                className="child w-full rounded-lg group-hover:border-[#2d6df7] group-hover:border-2"
              />
              <div className="mt-4 text-xl font-bold">{d.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
