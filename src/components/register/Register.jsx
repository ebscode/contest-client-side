/* eslint-disable react/no-unescaped-entities */
import Swal from "sweetalert2";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
import { authcontext } from "../../authprovider/Authprovider";

const Register = () => {
  const { createuser } = useContext(authcontext);
  const [passerror, setpasserror] = useState("");
  const navigate = useNavigate();

  const handleregister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    console.log(displayName, email, password, photoURL);

    if (!displayName) {
      return setpasserror("put your name email & password");
    }

    if (!regex.test(password)) {
      return setpasserror(
        "password should contain atleast one number and one special character"
      );
    }

    createuser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("congratulations!", "your sign up done!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    const item = { displayName, email, photoURL, password };

    fetch("https://server-side-nine-ashen.vercel.app/user", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Helmet>
        <title>register</title>
      </Helmet>
      <section className="">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleregister} className="w-full max-w-md">
            <div className="mb-5">
              {" "}
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 ">
                sign up
              </h1>
            </div>

            <input
              type="text"
              name="name"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="name"
            />

            <div className="relative flex items-center mt-4">
              <input
                type="url"
                name="photoURL"
                className="block w-full  py-3 text-gray-700 bg-white border rounded-lg pl-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="photourl"
              />
            </div>

            <div className=" mt-4">
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className=" mt-4">
              <input
                type="password"
                name="password"
                className="block w-full pl-2 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign up
              </button>

              <p className="text-red-600 font-medium">{passerror}</p>

              <div className="mt-6 text-center ">
                <Link to={"/login"}>
                  {" "}
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    have an account ? Sign in
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
