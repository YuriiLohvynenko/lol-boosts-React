import { useState } from "react";

const Accordion = (props: any) => {
  const { title, description } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md shadow-sm border border-indigo-500">
      <div
        className="p-3 d-flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <strong className="text-2xl">{title}</strong>
        <button className="w-8 h-8 rounded-full hover:bg-indigo-500">
          <span>&lt;</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-indigo-500 p-3 text-gray-300">
          {description}
        </div>
      )}
    </div>
  );
};
export default Accordion;
