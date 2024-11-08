import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error404 from "./pages/404";

const Router = () => {
    const routingConfig = [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        },
        { path: '/', element: <Navigate to="/login" /> }, // "/"でloginページに移行
        { path: '/*', element: <Error404 /> }
    ];

    const routing = useRoutes(routingConfig);
    return (
        <Layout>
            {routing}
        </Layout>
    )
}

export default Router;
