const Hero = () => {
  return (
    <>
      <div className="relative">
        <img src="/images/cover/1.jpeg" className="w-full blur-sm" alt="HERO" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-6">
          <h1 className="text-center text-3xl md:text-5xl lg:text-8xl font-bold mt-6 lg:mt-10">
            THE ALL-IN-ONE <br /> Platform for{" "}
            <span className="text-indigo-600">LOL</span>{" "}
            <span className="text-indigo-400">BOOST</span>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Hero;
