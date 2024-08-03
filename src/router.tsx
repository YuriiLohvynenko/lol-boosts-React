import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import BoostLayout from "./layout/boost_layout";
import RankBoost from "./pages/rank-boost";
import NotFound from "./pages/404/404";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* This sets Home as the default child route */}
          <Route path="boosting" element={<BoostLayout />}>
            <Route path="rank-boost" element={<RankBoost />} />
            <Route index element={<Navigate to="rank-boost" replace />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
