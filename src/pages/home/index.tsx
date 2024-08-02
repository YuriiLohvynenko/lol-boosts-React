import FAQ from "./faq";
import Hero from "./hero";
import Players from "./players";
import Products from "./products";
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
    </>
  );
};
export default Home;
