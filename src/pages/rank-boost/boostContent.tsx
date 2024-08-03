import classNames from "../../consts/classNames";
import boostContents from "../../data/boostContext.json";
const BoostContent = () => {
  return (
    <div className={`${classNames.containerClass} mt-10 lg:mt-20 space-y-8`}>
      {boostContents.map((d: any, index: number) => (
        <div key={index}>
          <div className="text-2xl font-bold">{d.title}</div>
          <div className="mt-4 text-gray-400">{d.content}</div>
        </div>
      ))}
    </div>
  );
};

export default BoostContent;
