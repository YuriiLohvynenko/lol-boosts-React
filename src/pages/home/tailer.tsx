import Videos from "./videos";

const Trailer = () => {
  return (
    <div className="mt-10 lg:mt-20 container px-4 lg:px-0 mx-auto">
      <div className="text-center max-w-[75%] mx-auto">
        Place the video in a prominent position, ideally above the fold, with a
        large play button. Ensure it’s easily accessible on all devices
      </div>
      <h1 className="text-center text-5xl max-w-[75%] mx-auto font-bold mt-6">
        GAMEPLAY <span className="text-indigo-700">TRAILER</span>
      </h1>
      {/* Trailer Videos */}
      <div className="mt-6 lg:mt-12">
        <Videos />
      </div>
    </div>
  );
};
export default Trailer;
