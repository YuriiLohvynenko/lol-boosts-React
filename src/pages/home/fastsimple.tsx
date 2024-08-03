import { Carousel } from "flowbite-react";

const FastSimple = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="container px-4 lg:px-0 mx-auto">
        <h1 className="text-center font-bold text-5xl max-w-2xl mx-auto">
          We Keep it Fast And <span className="text-indigo-700">Simple</span>
        </h1>
        <p className="text-center mt-6 text-lg text-gray-300">
          Buying accounts, boosting and coaching has never been this easy.
        </p>
        <Carousel
          indicators={false}
          className="mt-10 h-[600px] sm:h-[700px] md:h-[900px] lg:h-[700px]"
        >
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 md:px-20">
            <div className="">
              <span className="text-indigo-500">Step #1</span>
              <div className="mt-5 text-2xl font-bold">Select Service</div>
              <p className="text-lg text-gray-300 mt-3">
                Pick your desired service and customize your order.
              </p>
              <div className="mt-5">
                <button className="px-6 py-3 rounded-3xl bg-purple-400 text-white hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img src="/images/other/7.png" alt="IMG" className="w-full" />
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 md:px-20">
            <div className="">
              <span className="text-indigo-500">Step #2</span>
              <div className="mt-5 text-2xl font-bold">Order Completed</div>
              <p className="text-lg text-gray-300 mt-3">
                We appreciate your feedback, so dont forget to share your
                experience with us.
              </p>
              <div className="mt-5">
                <button className="px-6 py-3 rounded-3xl bg-purple-400 text-white hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img src="/images/other/4.png" alt="IMG" className="w-full" />
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-0 md:px-20">
            <div className="">
              <span className="text-indigo-500">Step #3</span>
              <div className="mt-5 text-2xl font-bold">Secure Checkout</div>
              <p className="text-lg text-gray-300 mt-3">
                We accept all major credit cards, Google Pay, Apple Pay, Crypto
                and more.
              </p>
              <div className="mt-5">
                <button className="px-6 py-3 rounded-3xl bg-purple-400 text-white hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img src="/images/other/5.png" alt="IMG" className="w-full" />
            </div>
          </div>
        </Carousel>
        <div className="mt-10 lg:mt-20">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-6">
            <div className="p-0 w-full md:w-3/5">
              <img
                src="/images/other/10.png"
                className="w-full block mr-auto"
                alt="IMG"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold lg:text-4xl">
                Premium 24/7 support in multiple languages. By 1v9ers for 1v9ers
              </h2>
              <div className="mt-6 text-lg text-gray-300">
                Our 1v9 support team is available 24/7 to help you with any
                questions or issues you may have.
              </div>
              <div className="mt-6">
                <button className="px-8 py-3 rounded-3xl bg-indigo-500 text-white hover:bg-indigo-800">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FastSimple;
