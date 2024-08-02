import AboutBoosts from "./aboutboosts";
import Boosters from "./boosters";
import FAQ from "./faq";
import FastSimple from "./fastsimple";
import Hero from "./hero";
import Players from "./players";
import Products from "./products";
import Service from "./service";
import ServiceBetter from "./servicebetter";
import Trailer from "./tailer";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />
      {/* PRODUCT SECTION */}
      <Products />
      {/* TAILER VIDEO SECTION */}
      <Trailer />
      {/* PLAYERS SECTION */}
      <Players />
      {/* FAQ SECTION */}
      <FAQ />
      {/* SERVICE SECTION */}
      <Service />
      {/* FAST SIMPLE SECTION */}
      <FastSimple />
      {/* SERVICE BETTER */}
      <ServiceBetter />
      {/* BOOSTERS */}
      <Boosters />
      {/* ABOUT LOL BOOSTERS */}
      <AboutBoosts />
    </>
  );
};
export default Home;
