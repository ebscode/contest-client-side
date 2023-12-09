import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../root/Root";
import Error from "../components/Error/Error";
import Home from "../pages/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Allcontest from "../pages/allcontest/Allcontest";
import Course from "../pages/course/Course";
import Contestdetails from "../pages/allcontest/Contestdetails";
import Privateroute from "./Privateroute";
import Dashboard from "../layout/Dashboard";
import Mycontest from "../pages/dashboard/user/Mycontest";
import Myprofile from "../pages/dashboard/user/Myprofile";
import Manageuser from "../pages/dashboard/admin/Manageuser";
import Createdcontest from "../pages/dashboard/creator/Createdcontest";
import Addcontest from "../pages/dashboard/creator/Addcontest";
import Submittedcontest from "../pages/dashboard/creator/Submittedcontest";
import Adminroute from "./Adminroute";
import Updatecontest from "../pages/dashboard/creator/Updatecontest";
import Managecontest from "../pages/dashboard/admin/Managecontest";
import Payment from "../pages/dashboard/payment/Payment";
import Explore from "../pages/explore/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allcontest",
        element: <Allcontest></Allcontest>,
        loader: () =>
          fetch("https://contest-server-side.vercel.app/contestcount"),
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/details/:id",
        element: (
          <Privateroute>
            <Contestdetails></Contestdetails>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://contest-server-side.vercel.app/singlecontest/${params.id}`
          ),
      },
      {
        path: "explore",
        element: <Explore></Explore>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "mycontest",
        element: <Mycontest></Mycontest>,
        loader: () => fetch("https://contest-server-side.vercel.app/mycontest"),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "myprofile",
        element: <Myprofile></Myprofile>,
      },
      // admnin route
      {
        path: "manageuser",
        element: <Manageuser></Manageuser>,
      },
      {
        path: "createcontest",
        element: (
          <Adminroute>
            <Createdcontest></Createdcontest>
          </Adminroute>
        ),
      },
      {
        path: "addcontest",
        element: (
          <Adminroute>
            <Addcontest></Addcontest>
          </Adminroute>
        ),
      },
      {
        path: "contestsubmit",
        element: (
          <Adminroute>
            <Submittedcontest></Submittedcontest>
          </Adminroute>
        ),
      },
      {
        path: "update/:id",
        element: <Updatecontest></Updatecontest>,
        loader: ({ params }) =>
          fetch(
            `https://contest-server-side.vercel.app/singlecontest/${params.id}`
          ),
      },
      {
        path: "managecontest",
        element: <Managecontest></Managecontest>,
      },
    ],
  },
]);

export default router;
