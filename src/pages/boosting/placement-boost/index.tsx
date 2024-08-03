import classNames from "../../../consts/classNames";
import BoostNavbar from "../boost_navbar";
import Checkout from "../rank-boost/checkout";
import CurrentRank from "../rank-boost/current_rank";
import WinsAmount from "../win-boost/wins_amount";

const PlacementBoost = () => {
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
          <h3 className="text-3xl">LoL Placements Boost</h3>
          <p className="text-gray-400 text-sm">
            Secure your new account with the perfect MMR!
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
              <WinsAmount />
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

export default PlacementBoost;
