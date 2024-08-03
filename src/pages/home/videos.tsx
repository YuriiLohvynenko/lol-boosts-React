import videos from "../../data/videos.json";
import { Carousel } from "flowbite-react";

const Videos = () => {
  const handlePlay = (event: any) => {
    event.target.play();
  };
  const handleStop = (event: any) => {
    event.target.pause();
  };
  return (
    <Carousel
      pauseOnHover
      // indicators={false}
      className="h-[250px] md:h-[500px]"
    >
      {videos.map((d: any, index: number) => (
        <video
          className="w-full rounded-xl object-cover object-center opacity-75 hover:opacity-100"
          key={index}
          onMouseEnter={(event: any) => handlePlay(event)}
          onMouseLeave={(event: any) => handleStop(event)}
        >
          <source src={d.url} />
        </video>
      ))}
    </Carousel>
  );
};
export default Videos;
