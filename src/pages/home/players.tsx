import players from "../../consts/players.json";
const Players = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-center text-5xl font-bold">
        Player Testimonials and Reviews
      </h1>
      <div className="max-w-2xl mx-auto text-center mt-4">
        Player Testimonials and Reviews
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="container mx-auto flex gap-4 flex-nowrap overflow-hidden w-full">
          {players.map((d: any, index: number) => {
            return (
              <div
                key={index}
                className="rounded-lg p-4 shadow-sm border border-indigo-700 flex-shrink-0 w-[400px]"
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
                <div className="mt-4">{d.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Players;
