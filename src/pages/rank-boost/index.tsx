import classNames from "../../consts/classNames";
import BoostNavbar from "../../layout/boost_navbar";

const RankBoost = () => {
  return (
    <div className={`${classNames.containerClass} mt-4 lg:mt-6`}>
      <div className="flex items-center justify-start gap-4">
        <span className="flex w-20 h-20 p-3 bg-black rounded-full border border-gray-300 flex-shrink-0 justify-center items-center">
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
          <div className="w-full lg:w-3/5 rounded-lg border border-indigo-800 shadow-sm shadow-indigo-600">
            <div className="flex p-4 justify-start items-center gap-4">
              <span className="flex w-20 h-20 p-3 bg-black rounded-full border border-gray-300 flex-shrink-0 justify-center items-center">
                <img
                  src="/images/boosting/icon/LolRankBoost.svg"
                  className="w-full"
                  alt="IMG"
                />
              </span>
              <div>
                <h3 className="text-xl">Current Rank</h3>
                <p className="text-gray-400 text-sm">
                  Select your current tier and division.
                </p>
              </div>
            </div>
            <div className="border-t border-indigo-800 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankBoost;
