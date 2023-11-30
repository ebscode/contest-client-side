import React, { useContext } from "react";
import Countdown from "react-countdown";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineTrophy } from "react-icons/ai";
import useaxiouspublic from "../../hooks/useaxiouspublic";
import Swal from "sweetalert2";
import { authcontext } from "../../authprovider/Authprovider";

const Contestdetails = () => {
  const {user}=useContext(authcontext)
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>contest expire</p>;
    } else {
      // Render a countdown
      return (
        <span>
          {days} D : {hours} H : {minutes} Min : {seconds} Sec
        </span>
      );
    }
  };
  const loader = useLoaderData();
  const axiouspublic = useaxiouspublic();

  const handlereg = (contest) => {
    const reg = {
      name: contest.ContestName,
      image: contest.Image,
      category: contest.Category,
      deadline: contest.Deadline,
      email:user.email,
      price:contest.ContestPrice
      
    };

    axiouspublic.post("/mycontest", reg).then((res) => {
      console.log(res.data);
      
    });
  };
  return (
    <div>
      <div className="w-full h-[50vh] bg-[url('https://t3.ftcdn.net/jpg/02/80/01/64/360_F_280016453_VkNxKbvtljZxNWa3Y4A41BB6gEp1DIjY.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex  justify-center items-center backdrop-opacity-10 backdrop-invert bg-white/95">
          <span className="text-gray-700 text-4xl  font-bold w-1/2 text-center">
            {loader.ContestName}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className=" col-span-2">
          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src={loader?.Image}
                alt=""
                className="w-full h-60 sm:h-96 dark:bg-gray-500"
              />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white dark:bg-gray-900">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block text-2xl  font-semibold sm:text-3xl"
                  >
                    {loader?.ContestName}
                  </a>
                  <p className="text-xs dark:text-gray-400">
                    By
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline"
                    >
                      Leroy Jenkins
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <p>{loader?.Description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-7">
          <h1 className=" p-2 my-2 text-blue-500 font-semibold text-2xl">
            how to submit
          </h1>
          <li className="font-semibold">
            {loader?.TaskSubmissionTextInstruction}
          </li>
          <h1 className=" p-2 my-2 text-blue-500 font-semibold text-2xl">
            Prize money
          </h1>
          <h1 className="flex items-center gap-1 text-xl font-medium">
            {" "}
            <AiOutlineTrophy />
            1st place -{loader?.PrizeMoney}
          </h1>
          <h1 className=" p-2 my-2 text-blue-500 font-semibold text-2xl">
            Category
          </h1>
          <p className="btn btn-sm bg-primary text-white ml-2">
            {loader?.Category}
          </p>
          <h1 className=" p-2 my-2 text-blue-500 font-semibold text-2xl">
            Deadline
          </h1>
          <p className="pl-2">
            <div className="font-semibold text-2xl  ">
              <Countdown
                renderer={renderer}
                date={Date.now() + 500000000}
              ></Countdown>
            </div>
          </p>
          <h1 className=" p-2 my-2 text-blue-500 font-semibold text-2xl">
            contest price
          </h1>
          <p className=" font-semibold text-xl ml-2">{loader?.ContestPrice}</p>

          <Link to={'/dashboard/payment'}><button
            onClick={() => handlereg(loader)}
            className="lg:mt-56 px-6 py-2 w-full mt-6 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            registration
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Contestdetails;
