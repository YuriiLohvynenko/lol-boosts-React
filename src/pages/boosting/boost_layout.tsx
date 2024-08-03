import { Outlet } from "react-router-dom";
import FAQ from "../home/faq";
import ServiceBetter from "../home/servicebetter";
import Players from "../home/players";
import FastSimple from "../home/fastsimple";
import BoostContent from "./boostContent";

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
