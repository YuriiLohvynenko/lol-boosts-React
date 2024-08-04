import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { FaArrowRight, FaTimesCircle } from "react-icons/fa";
import classNames from "../../../consts/classNames";

const Checkout = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="border border-indigo-800 p-4 rounded-lg">
      <div className="text-center mb-2">
        <span className="text-xl">Checkout</span>
        <p className="text-gray-500">Add extra options to your boost.</p>
      </div>
      <div className="border-t border-b border-indigo-800 py-4">
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              src="/images/boosting/icon/Gold.webp"
              alt="ICO"
            />{" "}
            Gold IV
          </div>
          <FaArrowRight />
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              src="/images/boosting/icon/Gold.webp"
              alt="ICO"
            />{" "}
            Gold III
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
            <span className="font-bold">Solo Only Queue</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              10%
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
            <span className="font-bold">Priority Completion</span>
            <span className=" text-indigo-500 border rounded-xl border-indigo-500 px-2 text-sm">
              20%
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
            />
            <button className="px-3 py-1 bg-indigo-800 text-sm rounded-md">
              Apply
            </button>
          </div>
        </div>
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