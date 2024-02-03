/* existing imports */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/Navbar/Navbar";
import ScrollToTop from "../tools/tools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ScrollToTop />
        <NavBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
