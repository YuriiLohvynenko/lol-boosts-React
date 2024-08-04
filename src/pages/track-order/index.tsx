import classNames from "../../consts/classNames";

const TrackOrder = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div className="mx-auto max-w-[567px] shadow-sm rounded-lg py-12 bg-indigo-950 bg-opacity-20">
        <div className="max-w-[85%] mx-auto">
          <h4 className="text-2xl font-bold">WoW Custom Order</h4>
          <p className="mt-2 text-gray-500">
            Achievements, transmog sets, old raids, mounts, specific items, rare
            cosmetics or ANYTHING that comes to your mind!
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                className={`${classNames.inputClass}`}
                placeholder="Your Email"
              />
            </div>
            <p>or</p>
            <div className="flex flex-col gap-2">
              <label>Discord ID</label>
              <input
                type="email"
                className={`${classNames.inputClass}`}
                placeholder="Your Discord ID"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <textarea
                className={`${classNames.inputClass} min-h-28`}
                placeholder="For example: I would like a complete boost level 70 Orc Warrior (Arms) with PvP rating of 1800, full honor (467ilvl) and a mount Sunhide Gronnling."
              ></textarea>
            </div>
            <button className={`rounded-lg w-full ${classNames.btnClass}`}>
              Send
            </button>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            * Before submitting the form, please make sure you have selected the
            correct server and filled up the required fields in the form. We
            will contact you as soon as possible.
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackOrder;
