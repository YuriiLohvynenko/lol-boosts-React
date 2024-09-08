import { Swiper, SwiperSlide } from "swiper/react";
import videos from "../../data/videos.json";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Videos = () => {
  const swiperRef = useRef(null);
  const handlePlay = (event: any) => {
    event.target.play();
  };
  const handleStop = (event: any) => {
    event.target.pause();
  };
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      ref={swiperRef}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
      // indicators={false}
    >
      {videos.map((d: any, index: number) => (
        <SwiperSlide key={index} className="space-y-8">
          <video
            className="w-full rounded-2xl object-cover object-center opacity-75 hover:opacity-100"
            onMouseEnter={(event: any) => handlePlay(event)}
            onMouseLeave={(event: any) => handleStop(event)}
          >
            <source src={d.url} />
          </video>
          <div className="text-center text-2xl font-bold text-indigo-500">
            {d.description}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Videos;
