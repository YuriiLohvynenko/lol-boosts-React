import { FaCalendar, FaChartBar, FaRocket, FaUsers } from "react-icons/fa";
import classNames from "../../consts/classNames";

const BoostNumbers = () => {
  const data = [
    {
      icon: <FaUsers />,
      number: 350000,
      title: "Gamers we Empowered",
      description:
        "Proudly serving a thriving community of passionate gamers worldwide!",
    },
    {
      icon: <FaRocket />,
      number: 480000,
      title: "Orders Completed",
      description:
        "Accounts, Boosting, Coaching and we're just getting started.",
    },
    {
      icon: <FaCalendar />,
      number: 2018,
      title: "Operating Since",
      description:
        "That's all it took us to revolutionize the game services industry.",
    },
    {
      icon: <FaChartBar />,
      number: 1500,
      title: "Partners",
      description: "The very best partners stand ready to fulfill your orders.",
    },
  ];
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20`}>
      <div
        className={` flex flex-col  lg:flex-row justify-between items-center lg:items-end gap-4`}
      >
        <h1 className="text-3xl lg:text-4xl font-bold max-lg:text-center">
          GameBoost in <br /> Numbers
        </h1>
        <div className="max-lg:text-center text-gray-400">
          Our team has united the most experienced people in the gaming
          industry,
          <br />
          from all over the world, with one mission:
          <br />
          <p className="text-white">
            ‟To truly change the life of every day gamers.”
          </p>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((d: any, index: number) => (
          <div
            key={index}
            className={`p-6 rounded-2xl ${
              index == 1 ? "bg-indigo-500" : "bg-indigo-900"
            } bg-opacity-40 relative overflow-clip flex flex-col justify-between max-lg:h-80 h-[450px] shadow-lg shadow-indigo-950`}
          >
            <div className="flex flex-col gap-2">
              <span className="flex items-center justify-center rounded-full bg-slate-600 bg-opacity-75 w-16 h-16 text-2xl">
                {d.icon}
              </span>
              <span className="text-2xl font-bold lg:text-3xl">
                {d.number}+
              </span>
              <span>{d.title}</span>
            </div>
            <p className="text-gray-400">{d.description}</p>
            <img
              src="/images/active_numbers.png"
              className="w-full absolute bottom-0 right-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BoostNumbers;
