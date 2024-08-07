import { Outlet } from "react-router-dom";
import ServiceBetter from "../home/servicebetter";
import FastSimple from "../home/fastsimple";
import BoostContent from "./boostContent";

const GameLayout = () => {
  return (
    <>
      <Outlet />
      <ServiceBetter />
      <FastSimple />
      <BoostContent />
    </>
  );
};

export default GameLayout;
