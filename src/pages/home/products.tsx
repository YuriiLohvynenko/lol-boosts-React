import { useEffect } from "react";
import products from "../../data/products.json";
const Products = () => {
  useEffect(() => {}, []);
  return (
    <div className="container px-4 lg:px-0 mx-auto mt-10 lg:mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 lg:mt-20">
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
