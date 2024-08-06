import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { FaArrowRight, FaTimes, FaTimesCircle } from "react-icons/fa";
import classNames from "../../../consts/classNames";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [checked, setChecked] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [applycode, setApplycode] = useState(0);
  const [champion, setChampion] = useState(false);
  const [solo, setSolo] = useState(false);
  const [priority, setPriority] = useState(false);
  const [stream, setStream] = useState(false);
  let timeout: any = null;

  const current_rank = useSelector((d: any) => d.boost?.current_rank);
  const placement_match = useSelector((d: any) => d.boost?.placement_match);

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "applycode":
        setApplycode(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleApply = () => {
    if (discount) return;
    if (applycode) {
      setDiscount(true);
      timeout = setTimeout(() => {
        setDiscount(false);
      }, 3000);
    }
  };

  return (
    <div className="border border-indigo-800 p-4 rounded-lg">
      <div className="text-center mb-2">
        <span className="text-xl">Checkout</span>
        <p className="text-gray-500">Add extra options to your boost.</p>
      </div>
      <div className="border-t border-b border-indigo-800 py-4">
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center gap-1">
            {current_rank && (
              <img
                className="w-6"
                src={current_rank?.material?.url}
                alt="ICO"
              />
            )}
            Gold {current_rank?.rank?.mark}
          </div>
          <FaArrowRight />
          <div className="flex items-center gap-1 text-gray-400">
            <span className="font-bold text-white">{placement_match}</span>{" "}
            Matches
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-bold">Champion and Role</span>
            <span className=" text-green-500 border rounded-xl border-green-500 px-2 text-sm">
              Free
            </span>
          </div>
          <ToggleSwitch
            sizing="sm"
            label=""
            checked={champion}
            onChange={() => setChampion(!champion)}
            color="indigo"
            theme={{
              toggle: {
                checked: {
                  on: "after:translate-x-full after:border-indigo-900 rtl:after:-translate-x-full",
                  off: "border-indigo-900 bg-transparent dark:border-indigo-600 dark:bg-indigo-700",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-bold">Solo Only Queue</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              10%
            </span>
          </div>
          <ToggleSwitch
            sizing="sm"
            label=""
            checked={solo}
            onChange={() => setSolo(!solo)}
            color="indigo"
            theme={{
              toggle: {
                checked: {
                  on: "after:translate-x-full after:border-indigo-900 rtl:after:-translate-x-full",
                  off: "border-indigo-900 bg-transparent dark:border-indigo-600 dark:bg-indigo-700",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-bold">Priority Completion</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              20%
            </span>
          </div>
          <ToggleSwitch
            sizing="sm"
            label=""
            checked={priority}
            onChange={() => setPriority(!priority)}
            color="indigo"
            theme={{
              toggle: {
                checked: {
                  on: "after:translate-x-full after:border-indigo-900 rtl:after:-translate-x-full",
                  off: "border-indigo-900 bg-transparent dark:border-indigo-600 dark:bg-indigo-700",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-bold">Stream Games</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              30%
            </span>
          </div>
          <ToggleSwitch
            sizing="sm"
            label=""
            checked={checked}
            onChange={() => setChecked(!checked)}
            color="indigo"
            theme={{
              toggle: {
                checked: {
                  on: "after:translate-x-full after:border-indigo-900 rtl:after:-translate-x-full",
                  off: "border-indigo-900 bg-transparent dark:border-indigo-600 dark:bg-indigo-700",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="font-bold">Play with booster</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              50%
            </span>
          </div>
          <ToggleSwitch
            sizing="sm"
            label=""
            checked={stream}
            onChange={() => setStream(!stream)}
            color="indigo"
            theme={{
              toggle: {
                checked: {
                  on: "after:translate-x-full after:border-indigo-900 rtl:after:-translate-x-full",
                  off: "border-indigo-900 bg-transparent dark:border-indigo-600 dark:bg-indigo-700",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="border-t border-b border-indigo-800 py-4 flex justify-center items-center gap-2">
        <FaTimesCircle />
        <span className="text-gray-500"> Completion Time: </span>
        <b>~1 day</b>
      </div>
      <div className="py-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-sm text-gray-500">
            Discount Code
          </label>
          <div className=" flex items-center gap-2 justify-between">
            <input
              className="px-3 py-1 w-full rounded-md text-sm bg-indigo-950"
              placeholder="Enter Code BOOST20 to get a 20% discount"
              name="applycode"
              onChange={handleChange}
            />
            <button
              className="px-3 py-1 bg-indigo-800 text-sm rounded-md"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
        {discount && (
          <div
            className="mt-5 text-center py-4 px-6 border-green-600 border rounded-lg bg-gradient-to-b from-green-900 to-green-[#ddd] relative text-green-400"
            data-aos="fade-in"
          >
            -20% discount applied successfully 🎉
            <button
              className="absolute top-1/2 right-[10px] hover:text-green-300 -translate-x-1/2 -translate-y-1/2"
              onClick={() => setDiscount(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="" className=" text-gray-500">
            Total Price
          </label>
          <span className="text-2xl font-bold">$11,091</span>
        </div>
        <button
          className={`w-full py-2 mt-4 flex items-center gap-4 justify-center rounded-lg ${classNames.btnClass}`}
        >
          Buy Boost <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Checkout;
