const FAQ = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row gap-4">
          <div className="w-full md:w-2/5">
            <img src="/images/other/3.png" className="w-full" />
          </div>
          <div className="flex-grow">
            <h1 className="text-5xl font-bold">
              Frequently Asked{" "}
              <span className="text-indigo-600">Questions</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
