import { Outlet } from "react-router-dom";
import FAQ from "../pages/home/faq";
import ServiceBetter from "../pages/home/servicebetter";
import Players from "../pages/home/players";
import FastSimple from "../pages/home/fastsimple";
import BoostContent from "../pages/rank-boost/boostContent";

const BoostLayout = () => {
  return (
    <>
      <Outlet />
      <Players />
      <FAQ />
      <ServiceBetter />
      <FastSimple />
      <BoostContent />
    </>
  );
};

export default BoostLayout;
