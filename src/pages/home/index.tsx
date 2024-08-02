import FAQ from "./faq";
import FastSimple from "./fastsimple";
import Hero from "./hero";
import Players from "./players";
import Products from "./products";
import Service from "./service";
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
    </>
  );
};
export default Home;
