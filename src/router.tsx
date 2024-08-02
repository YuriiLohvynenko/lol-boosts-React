
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route path="/" element={ <Home /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;