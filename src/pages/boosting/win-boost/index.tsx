import classNames from "../../../consts/classNames";
import BoostNavbar from "../boost_navbar";
import Checkout from "./checkout";
import CurrentRank from "../rank-boost/current_rank";
import DesiredRank from "../rank-boost/desired_rank";
import WinsAmount from "./wins_amount";
import Players from "../../home/players";
import FAQ from "../../home/faq";
import faq_win_boost from "../../../data/faq_win_boost.json";
const WinBoost = () => {
  return (
    <div className={`${classNames.containerClass} mt-4 lg:mt-6`}>
      <div className="flex items-center justify-start gap-4">
        <span
          className={`flex w-20 h-20 p-3 ${classNames.bgDarkClass} ${classNames.borderLClass} rounded-full border flex-shrink-0 justify-center items-center`}
        >
          <img
            src="/images/boosting/icon/LoLRankBoost.png"
            className="w-full"
            alt="IMG"
          />
        </span>
        <div>
          <h3 className="text-3xl">LoL Win Boost</h3>
          <p className="text-gray-400 text-sm">
            If only pay to win was a thing...or is it?
          </p>
        </div>
      </div>
      <div className="mt-6 lg:mt-8">
        <BoostNavbar />
      </div>
      <div className="mt-4 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-3/5">
            <CurrentRank />
            <div className="mt-6">
              <WinsAmount />
            </div>
          </div>
          <div className="flex-grow">
            <Checkout />
          </div>
        </div>
      </div>
      <Players />
      <FAQ faqs={faq_win_boost} />
    </div>
  );
};

export default WinBoost;
