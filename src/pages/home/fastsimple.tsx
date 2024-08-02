import { Carousel } from "flowbite-react";

const FastSimple = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-5xl max-w-2xl"></h1>
        <p className="text-center mt-6">
          Buying accounts, boosting and coaching has never been this easy.
        </p>
        <Carousel
          indicators={false}
          leftControl={<></>}
          rightControl={<></>}
          className="mt-10 h-[900px] lg:h-[800px]"
        >
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="">
              <span className="text-indigo-500">Step #1</span>
              <div className="mt-5 text-2xl font-bold">Secure Checkout</div>
              <p>
                We accept all major credit cards, Google Pay, Apple Pay, Crypto
                and more.
              </p>
              <div className="mt-5">
                <button className="px-6 py-3 rounded-2xl bg-purple-400 text-white hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img src="/images/other/10.png" alt="IMG" className="w-100" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default FastSimple;
