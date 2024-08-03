import { RangeSlider } from "flowbite-react";
import classNames from "../../../consts/classNames";

const WinsAmount = () => {
  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          <img
            src="/images/boosting/icon/LolRankBoost.svg"
            className="w-full"
            alt="IMG"
          />
        </span>
        <div>
          <h3 className="text-xl">Wins Amount</h3>
          <p className="text-gray-400 text-sm">
            Select your desired amount of wins.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <RangeSlider id="lg-range" color="info" sizing="lg" />
      </div>
    </div>
  );
};
export default WinsAmount;
