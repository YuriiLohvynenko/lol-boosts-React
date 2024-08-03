import players from "../../data/players.json";
const Players = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-center text-3xl lg:text-5xl mx-auto max-w-[75%] font-bold">
        Player Testimonials and Reviews
      </h1>
      <div className="max-w-[65%] mx-auto text-center mt-4">
        Use a slider or cards to display testimonials. Incorporate star ratings
        or review scores if available
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="container px-4 lg:px-0 mx-auto flex gap-4 flex-nowrap overflow-hidden w-full">
          {players.map((d: any, index: number) => {
            return (
              <div
                key={index}
                className="rounded-2xl p-4 shadow-xl border border-indigo-700 flex-shrink-0 w-[400px]"
              >
                <div className="flex justify-start items-center gap-2">
                  <img
                    src={d.url}
                    alt="IMG"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <strong>{d.name}</strong> <br />
                    <span>{d.country}</span>
                  </div>
                </div>
                <div className="mt-4 text-gray-300">{d.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Players;
