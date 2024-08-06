import classNames from "../../../consts/classNames";
import materials from "../../../data/materials.json";
import materials2 from "../../../data/materials2.json";
import counts from "../../../data/counts.json";
import counts2 from "../../../data/counts2.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesiredMaterial,
  setDesiredRank,
} from "../../../redux/slice/boostSlice";
const DesiredRank = () => {
  const { game } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [cdata, setCData] = useState<any[]>([]);
  const desired_rank = useSelector((d: any) => d?.boost?.desired_rank);
  const dispatch = useDispatch();
  useEffect(() => {
    if (game != "valorant") {
      setData(materials.filter((d: any) => d.type != "tft"));
      setCData(counts);
      if (materials.length) {
        dispatch(setDesiredMaterial(materials[0]));
        dispatch(setDesiredRank(counts[0]));
      }
    } else {
      setData(materials2);
      setCData(counts2);
      if (materials2.length) {
        dispatch(setDesiredMaterial(materials2[0]));
        dispatch(setDesiredRank(counts2[0]));
      }
    }
  }, []);
  return (
    <div className=" rounded-lg border p-4  border-indigo-800">
      <div className="flex flex-wrap justify-start items-center gap-4">
        <span
          className={`flex w-16 h-16 p-3 rounded-full border ${classNames.bgDarkClass} ${classNames.borderLClass} flex-shrink-0 justify-center items-center`}
        >
          {desired_rank && (
            <img
              src={desired_rank?.material?.url}
              className="w-full"
              alt="IMG"
            />
          )}
        </span>
        <div>
          <h3 className="text-xl">Desired Rank</h3>
          <p className="text-gray-400 text-sm">
            Select your desired rank and division
          </p>
        </div>
      </div>
      <div className="border-t border-indigo-800 pt-4 mt-4">
        <div className="flex flex-wrap items-center justify-start gap-4">
          {data.map((d: any, index: number) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                desired_rank?.material?._id == d?._id
                  ? "bg-indigo-800"
                  : "bg-indigo-950"
              } flex-shrink-0 hover:bg-indigo-800 bg-opacity-70`}
              onClick={() => dispatch(setDesiredMaterial(d))}
            >
              <img src={d.url} alt="ICO" className="w-8" />
            </button>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          {cdata.map((d: any, index: number) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-lg ${
                desired_rank?.rank?.value == d?.value
                  ? "bg-indigo-800"
                  : "bg-indigo-950"
              } hover:bg-indigo-800 bg-opacity-70`}
              onClick={() => dispatch(setDesiredRank(d))}
            >
              {d.mark}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DesiredRank;
