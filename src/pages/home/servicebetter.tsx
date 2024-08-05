import classNames from "../../consts/classNames";

const ServiceBetter = () => {
  return (
    <div className={`mt-10 lg:mt-20 ${classNames.containerClass}`}>
      <h1 className="text-3xl lg:text-5xl text-center mx-auto">
        Gaming Services Just Got Better
      </h1>
      <div className="mt-4 text-center text-gray-300 text-lg">
        We are setting the new standard in the gaming industry.
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="flex gap-4 flex-col lg:flex-row">
          <img
            src="/images/other/9-01.png"
            className="w-full lg:w-2/5 flex-shrink-0 rounded-3xl shadow-xl border border-indigo-700"
          />
          <div className="flex-grow grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/other/7-01.png"
                className="h-full opacity-0 object-cover object-center rounded-3xl shadow-xl border border-indigo-700"
              />
              <img
                src="/images/other/8-01.jpg"
                className="h-full object-cover object-center rounded-3xl shadow-xl border border-indigo-700"
              />
            </div>
            <div className="flex-grow">
              <img
                src="/images/other/6-01.jpg"
                className="object-cover object-center rounded-3xl w-full h-full shadow-xl border border-indigo-700 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceBetter;
