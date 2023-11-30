import { useState } from "react";
import useContest from "../../hooks/useContest";
import Contestcard from "./Contestcard";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useaxiouspublic from "../../hooks/useaxiouspublic";

const Allcontest = () => {
  const axiouspublic = useaxiouspublic();
  const { count } = useLoaderData();
  const [itemperpage, setitemperpage] = useState(10);
  const [currentpage, setcurrentpage] = useState(0);
  const numberOfpages = Math.ceil(count / itemperpage);

  const pages = [...Array(numberOfpages).keys()];
  const [search, setsearch] = useState("");
  //  const [contest]=useContest()
  const { data: contest = [], refetch } = useQuery({
    queryKey: ["allcontest",currentpage,itemperpage],
    queryFn: async () => {
      const res = await axiouspublic.get(
        `/contest?page=${currentpage}&size=${itemperpage}`
      );
      return res.data;
    },
  });

  const handleitemperpage = (e) => {
    console.log(e.target.value);
    const parse = parseInt(e.target.value);
    console.log(parse);
    setitemperpage(parse);
    refetch();
    setcurrentpage(0);
  };

  return (
    <div>
      <div className="flex  justify-center items-center flex-col">
        <div>
          <div className="w-full h-full flex  justify-center items-center ">
            <span className="text-black text-4xl font-bold dark:text-white  text-center">
              Find your desire contest
              <div className="relative flex mt-6">
                <input
                  onChange={(eve) => {
                    setsearch(eve.target.value);
                  }}
                  type="email"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <button
                  className="!absolute right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  search
                </button>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  search here....
                </label>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
        {contest
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.Category.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => (
            <Contestcard key={index} val={val}></Contestcard>
          ))}
      </div>
      <div className="text-center m-6 flex justify-center gap-2">
        {pages.map((page) => (
          // eslint-disable-next-line react/jsx-key
          <button
            onClick={() => setcurrentpage(page)}
            className={
              currentpage == page && "btn btn-sm bg-blue-500 text-white"
            }
          >
            {page + 1}
          </button>
        ))}
        <select value={itemperpage} onChange={handleitemperpage} name="" id="">
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};
export default Allcontest;
