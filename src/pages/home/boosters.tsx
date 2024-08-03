import { Swiper, SwiperSlide } from "swiper/react";
import boosters from "../../data/boosters.json";
const Boosters = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-center mx-auto text-3xl lg:text-5xl font-bold">
        THE BEST LOL ELO BOOSTERS
      </h1>
      <p className="mt-6 text-center text-lg text-gray-300">
        Why choose us for LoL Boosting? Because we provide the best boosting
        services.
      </p>
      <div className="mt-10 lg:mt-20">
        <div className="container px-4 lg:px-0 mx-auto">
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {boosters.map((d: any, index: number) => (
              <SwiperSlide className="flex-shrink-0" key={index}>
                <img
                  src={d.avatar}
                  alt={d.name}
                  className="block mx-auto w-[120px] h-[120px] rounded-full"
                />
                <div className="mt-4 text-center text-lg">{d.name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Boosters;
