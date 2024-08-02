import boosters from "../../consts/boosters.json";
const Boosters = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-center mx-auto text-3xl lg:text-5xl font-bold">
        THE BEST LOL ELO BOOSTERS
      </h1>
      <p className="mt-6 text-center">
        Why choose us for LoL Boosting? Because we provide the best boosting
        services.
      </p>
      <div className="mt-10 lg:mt-20">
        <div className="container mx-auto">
          <div className="flex flex-nowrap overflow-hidden gap-4">
            {boosters.map((d: any, index: number) => (
              <div className="w-[200px] flex-shrink-0" key={index}>
                <img
                  src={d.avatar}
                  alt={d.name}
                  className="block mx-auto w-[120px] h-[120px] rounded-full"
                />
                <div className="mt-4 text-center text-lg">{d.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Boosters;
