import { FaDiscord } from "react-icons/fa";
import classNames from "../../consts/classNames";
import jobs from "../../data/jobs.json";
import AmazingSeller from "./amazing_seller";
import FAQ from "../home/faq";
import Players from "../home/players";

const Hiring = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="space-y-8">
        <h1 className="max-w-[75%] text-center mx-auto text-3xl lg:text-5xl font-bold">
          Start making money as a <span className="text-indigo-500">1v9er</span>
        </h1>
        <div className="max-w-[65%] text-center mx-auto ">
          Join us as a seller or a booster today and start offering your
          services and products to our huge 1v9 community. ⚡
        </div>
        <button
          className={`flex mx-auto ${classNames.btnClass} flex items-center gap-2 justify-center`}
        >
          <FaDiscord /> Join Discord
        </button>
        <div className="max-w-[75%] mx-auto flex justify-center py-8 flex-wrap gap-2 lg:gap-3">
          {new Array(27).fill(0).map((d: any, index: number) => (
            <img
              key={index}
              src={`/images/hiring/icon/ico-s (${Number(index + 2)}).webp`}
              className="flex-shrink-0 w-12"
              alt="ico"
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-xl">Available Job Offers (6)</h4>
        <div className="mt-4 space-y-4">
          {jobs?.map((d: any, index: number) => (
            <div
              className="rounded-lg bg-indigo-950 bg-opacity-25 px-4 py-3 flex items-center justify-start gap-2 hover:text-indigo-500 cursor-pointer"
              key={index}
            >
              <div className={`flex-shrink-0 w-[120px] lg:w-[25%]`}>
                <img src={d.icon} className="w-[70px]" alt={d.title} />
              </div>
              <div>
                <h6 className="text-xl">{d.title}</h6>
                {d.description && <div>{d.description}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Amazing Seller */}
      <AmazingSeller />
      {/* FAQ Section */}
      <FAQ />
      {/* REVIEWS */}
      <Players />
    </div>
  );
};
export default Hiring;
