import { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { authcontext } from "../../authprovider/Authprovider";
import img1 from '../../assets/logo1.png'
import useModerator from "../../hooks/useModerator";
import useAdmin from "../../hooks/useAdmin";




const Navbar = () => {


  const { user, logout } = useContext(authcontext);

  const [theme, setTheme] = useState("light");
  const [ismoderator]=useModerator()
  const isAdmin=false
  console.log(ismoderator)

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handletoggle = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  const handlesignout = () => {
    logout()
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  const navlink = (
    <>
      <div className="font-medium text-sm space-x-3">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600 "
              : isPending
              ? "text-sky-900"
              : " dark:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/allcontest"}
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600"
              : isPending
              ? "text-sky-900"
              : " dark:text-white"
          }
        >
         contest
        </NavLink>








        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600"
              : isPending
              ? "pending"
              : "dark:text-white"
          }
          to={"/course"}
        >
          course
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600"
              : isPending
              ? "pending"
              : "dark:text-white"
          }
          to={"/explore"}
        >
          explore
        </NavLink>

        
      </div>
    </>
  );
  return (
  
    <div >
           
      

      <Headroom>
        < div  className="navbar bg-base-100 dark:bg-gray-900 ">
          <div className="navbar-start">
            <div className="dropdown ">
              <label
                tabIndex={0}
                className="btn btn-ghost dark:text-black lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  mt-5 z-[1] p-2  shadow bg-gray-300 dark:bg-gray-600 rounded-box w-52"
              >
                {navlink}
              </ul>
            </div>

            <div>
              <Link to={"/"}>
               
                <img
                  className=" w-[120px]   "
                  src={img1}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end">
            <label className="swap swap-rotate mr-5">
              {/* this hidden checkbox controls the state */}
              <input className="" onChange={handletoggle} type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current text-white w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off text-gray-700 fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div className="dropdown dropdown-end">
              {user ? (
                <>
                  <label tabIndex={0} className="">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    
                    <li>
                      <a>{user.displayName}</a>
                    </li>


                    <li>
                      <a>{user.email}</a>
                    </li>


                    {isAdmin ? (
    <Link to={'/dashboard/manageuser'}>
        <li>
            <a>dashboard</a>
        </li>
    </Link>
) : ismoderator ? (
    <Link to={'/dashboard/addcontest'}>
        <li>
            <a>dashboard</a>
        </li>
    </Link>
) : (
    <Link to={'/dashboard/mycontest'}>
        <li>
            <a>dashboard</a>
        </li>
    </Link>
)}

                 



                    <Link onClick={handlesignout}>
                      {" "}
                      <li>
                        <a>sign out</a>
                      </li>
                    </Link>
                  </ul>
                </>
              ) : (
                <Link to={"/login"}>
                  <button className="btn rounded-md dark:text-white">sign in</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Headroom>
    </ div>
  );
};

export default Navbar;