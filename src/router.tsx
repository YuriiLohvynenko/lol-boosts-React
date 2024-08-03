import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import BoostLayout from "./pages/boosting/boost_layout";
import RankBoost from "./pages/boosting/rank-boost";
import NotFound from "./pages/404/404";
import WinBoost from "./pages/boosting/win-boost";
import PlacementBoost from "./pages/boosting/placement-boost";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Footer from "./layout/footer";
import Register from "./pages/register";
import FAQ from "./pages/faq";
import Terms from "./pages/terms";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* This sets Home as the default child route */}
          <Route path="boosting" element={<BoostLayout />}>
            <Route path="rank-boost" element={<RankBoost />} />
            <Route path="win-boost" element={<WinBoost />} />
            <Route path="placement-boost" element={<PlacementBoost />} />
            <Route index element={<Navigate to="rank-boost" replace />} />
          </Route>
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />{" "}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
