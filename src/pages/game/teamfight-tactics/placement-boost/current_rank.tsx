import { useEffect, useState } from "react";
import { Tooltip } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classNames from "../../../../consts/classNames";
import materials from "../../../../data/materials.json";
import counts from "../../../../data/counts.json";
import {
  setCurrentRank,
  setCurrentMaterial,
} from "../../../../redux/slice/boostSlice";
import Number from "../../../../components/custom/Number";
const CurrentRank = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  const dispatch = useDispatch();
  const current_rank = useSelector((d: any) => d.boost.current_rank);
  // initilize variable
  useEffect(() => {
    if (materials.length) {
      dispatch(setCurrentMaterial(materials[0]));
    }
    setData(materials);
    dispatch(setCurrentRank(counts[0]));
  }, []);

  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {current_rank?.material && (
            <img
              src={current_rank?.material?.url}
              className="w-full"
              alt={current_rank?.material?.title}
            />
          )}
        </span>
        <div>
          <h3 className="text-xl">Current Rank</h3>
          <p className="text-gray-400 text-sm">
            Select your current tier and division.
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <div className="flex items-center justify-start gap-x-4 gap-y-2 flex-wrap">
          {data.map((d: any, index: number) => (
            <Tooltip
              key={index}
              content={d?.title}
              placement="bottom"
              className="flex-shrink-0"
            >
              <button
                className={`px-4 py-2 flex-shrink-0 rounded-lg ${
                  current_rank?.material?._id == d?._id
                    ? "bg-indigo-800"
                    : "bg-indigo-950"
                } hover:bg-indigo-800 bg-opacity-70`}
                onClick={() => dispatch(setCurrentMaterial(d))}
              >
                <img src={d?.url} alt="ICO" className="w-8" />
              </button>
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          {!current_rank?.material?.level &&
            counts.map((d: any, index: number) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-lg ${
                  current_rank?.rank?.value == d.value
                    ? "bg-indigo-800"
                    : "bg-indigo-950"
                } hover:bg-indigo-800 bg-opacity-70`}
                onClick={() => dispatch(setCurrentRank(d))}
              >
                {d?.mark}
              </button>
            ))}
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
    </div>
  );
};
export default CurrentRank;
