import { useEffect, useState } from "react";
const Accordion = (props: any) => {
  const { title, description } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl shadow-lg border border-indigo-900 mb-4 transition-all duration-100">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <strong className="text-xl">{title}</strong>
        <button className="w-10 h-10 flex-shrink-0 rounded-full bg-indigo-800 bg-opacity-20 hover:bg-indigo-500 rotate-90">
          <span className="">&#10095;</span>
        </button>
      </div>
      <div
        className={` transition-all duration-200 text-gray-300 overflow-clip ${
          open ? "h-auto" : "h-0"
        }`}
      >
        <div className={`border-t border-indigo-900 p-4 `}>{description}</div>
      </div>
    </div>
  );
};
export default Accordion;
