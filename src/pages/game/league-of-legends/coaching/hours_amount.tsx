import { RangeSlider } from "flowbite-react";
import classNames from "../../../../consts/classNames";
import { useDispatch, useSelector } from "react-redux";
import { setWinMatch } from "../../../../redux/slice/boostSlice";

const HoursAmount = () => {
  const win_match = useSelector((d: any) => d.boost?.win_match);
  const dispatch = useDispatch();
  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          <img
            src="/images/boosting/icon/LoLRankBoost.png"
            className="w-full"
            alt="IMG"
          />
        </span>
        <div>
          <h3 className="text-xl">Hours Amount</h3>
          <p className="text-gray-400 text-sm">
            Select your desired amount of wins.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <RangeSlider
          id="lg-range"
          color="info"
          sizing="lg"
          min={1}
          max={5}
          step={1}
          value={win_match}
          onChange={(event: any) => dispatch(setWinMatch(event.target.value))}
        />
      </div>
      <div className="mt-6 flex flex-wrap justify-start gap-x-6 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Select Server</label>
          <select className="bg-indigo-950 rounded-md px-3 py-1 border-none min-w-[125px]">
            <option value="na">North America</option>
            <option value="euw">Europe West</option>
            <option value="eune">Europe Nordic East</option>
            <option value="oce">Oceania</option>
            <option value="ru">Russia</option>
            <option value="tr">Turkey</option>
            <option value="br">Brazil</option>
            <option value="lan">Latin America North</option>
            <option value="las">Latin America South</option>
            <option value="jp">Japan</option>
            <option value="vn">Vietnam</option>
            <option value="ph">Philippines</option>
            <option value="sg">Singapore</option>
            <option value="th">Thailand</option>
            <option value="tw">Taiwan</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default HoursAmount;
