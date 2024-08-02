import videos from "../../consts/videos.json";
import { Carousel } from "flowbite-react";

const Videos = () => {
  return (
    <Carousel
      pauseOnHover
      // indicators={false}
      className="h-[250px] md:h-[500px]"
    >
      {videos.map((d: any, index: number) => (
        <video
          className="w-full rounded-xl object-cover object-center"
          key={index}
        >
          <source src={d.url} />
        </video>
      ))}
    </Carousel>
  );
};
export default Videos;
