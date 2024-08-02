import { useState } from "react";

const Accordion = (props: any) => {
  const { title, description } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl shadow-lg border border-indigo-900 mb-4">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <strong className="text-xl">{title}</strong>
        <button className="w-10 h-10 rounded-full bg-indigo-800 bg-opacity-20 hover:bg-indigo-500 rotate-90">
          <span className="">&#10095;</span>
        </button>
      </div>
      {open && (
        <div
          className="border-t border-indigo-900 p-4 text-gray-500"
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          {description}
        </div>
      )}
    </div>
  );
};
export default Accordion;
