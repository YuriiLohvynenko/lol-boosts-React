import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <>
      <div className="h-[300px] sm:h-[450px] xl:h-[550px] 2xl:h-[650px]">
        <Carousel>
          <img src="/images/cover/1.jpeg" className="w-full" alt="HERO" />
          <img src="/images/cover/2.jpg" className="w-full" alt="HERO" />
          <img src="/images/cover/3.jpeg" className="w-full" alt="HERO" />
          <img src="/images/cover/4.jpeg" className="w-full" alt="HERO" />
          <img src="/images/cover/5.jpeg" className="w-full" alt="HERO" />
        </Carousel>
      </div>
    </>
  );
};
export default Hero;
