import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useModerator from "../hooks/useModerator";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [ismoderator,isLoading] = useModerator();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-64 h-screen bg-blue-500">
        {isAdmin && (
          <ul className="menu">
            {" "}
            <li className="text-white">
              <NavLink to={"/dashboard/manageuser"}>manage user</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/managecontest"}>manage contest</NavLink>
            </li>
            <div className="divider"></div>
            <li className="">
              <NavLink to={"/"}>home</NavLink>
            </li>
          </ul>
        )}

        {ismoderator && (
          <ul className="menu font-medium text-white">
            {" "}
            <li>
              <NavLink to={"/dashboard/addcontest"}>add contest</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/createcontest"}>created contest</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/contestsubmit"}> submitted contest</NavLink>
            </li>
            <div className="divider"></div>
            <li className="">
              <NavLink to={"/"}>home</NavLink>
            </li>
          </ul>
        )}

        {!isAdmin && !ismoderator ? (
          <ul className="menu">
            {" "}
            <li className="text-white">
              <NavLink to={"/dashboard/mycontest"}>my contest</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/winningcontest"}>
                Winning contest
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myprofile"}>my profile</NavLink>
            </li>
            <div className="divider"></div>
            <li className="">
              <NavLink to={"/"}>home</NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <li className="text-white">
<NavLink to={"/dashboard/mycontest"}>my contest</NavLink>
</li>
<li>
<NavLink to={"/dashboard/winningcontest"}>
  Winning contest
</NavLink>
</li>
<li>
<NavLink to={"/dashboard/myprofile"}>my profile</NavLink>
</li>
<div className="divider"></div>
<li className="">
<NavLink to={"/"}>home</NavLink>
</li> */
}
