import classNames from "../../../consts/classNames";
import BoostNavbar from "../boost_navbar";
import Checkout from "./checkout";
import CurrentRank from "./current_rank";
import DesiredRank from "./desired_rank";

const RankBoost = () => {
  return (
    <div className={`${classNames.containerClass} mt-4 lg:mt-6`}>
      <div className="flex items-center justify-start gap-4">
        <span
          className={`flex w-20 h-20 p-3 ${classNames.bgDarkClass} ${classNames.borderLClass} rounded-full border flex-shrink-0 justify-center items-center`}
        >
          <img
            src="/images/boosting/icon/LolRankBoost.svg"
            className="w-full"
            alt="IMG"
          />
        </span>
        <div>
          <h3 className="text-3xl">LoL Rank Boost</h3>
          <p className="text-gray-400 text-sm">
            Challenger player will Boost you to your desired rank.
          </p>
        </div>
      </div>
      <div className="mt-6 lg:mt-8">
        <BoostNavbar />
      </div>
      <div className="mt-4 lg:mt-6">
        <div className="flex justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <CurrentRank />
            <div className="mt-6">
              <DesiredRank />
            </div>
          </div>
          <div className="flex-grow">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankBoost;
