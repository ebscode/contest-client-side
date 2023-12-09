import { useContext } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { authcontext } from "../../../authprovider/Authprovider";

const Addcontest = () => {
  const { user } = useContext(authcontext);
  const handleadd = (e) => {
    e.preventDefault();
    const form = e.target;
    const ContestName = form.ContestName.value;
    const Image = form.Image.value;
    const Description = form.Description.value;
    const ContestPrice = form.ContestPrice.value;
    const PrizeMoney = form.PrizeMoney.value;
    const TaskSubmissionTextInstruction =
      form.TaskSubmissionTextInstruction.value;
    const Category = form.Category.value;
    const Deadline = form.Deadline.value;
    const email = form.email.value;

    const item = {
      ContestName,
      Image,
      Description,
      ContestPrice,
      PrizeMoney,
      TaskSubmissionTextInstruction,
      Category,
      Deadline,
      email,
    };
    console.log(item);

    fetch("https://contest-server-side.vercel.app/contest", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("good", "contest added", "success");
      });

    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>add contest</title>
      </Helmet>
      <div className="  mt-6 overflow-hidden bg-white h-[80vh]  items-center flex justify-center dark:bg-gray-800 lg:">
        <form onSubmit={handleadd}>
          <h1 className="font-semibold text-2xl text-center mb-3">
            create contest
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                className=" w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="ContestName"
                placeholder=" Contest Name"
                required
                type="name"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="image url"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Image"
                type="url"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Category"
                className="w-96 px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Category"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                // placeholder="Deadline"
                className="w-96  px-4 py-2 text-gray-900 border-2 "
                name="Deadline"
                type="date"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Contest Price"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="ContestPrice"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="Prize Money"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="PrizeMoney"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="mt-4">
              <input
                placeholder="Description"
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="Description"
                type="text"
              />
            </div>

            <div className="mt-4">
              <input
                placeholder="email"
                defaultValue={user.email}
                className="w-96  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                name="email"
                type="email"
              />
            </div>
          </div>
          <input
            placeholder="Task Submission Text Instruction"
            className="w-full mt-4  px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            name="TaskSubmissionTextInstruction"
            type="text"
          />
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              add contest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcontest;
