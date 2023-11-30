// import { useState } from "react";
// import data from "/assignment/react-donate-people-project/public/donate.json"
// import Donatescard from "../donatescard/Donatescard";
// import Search from "../Search";

// const Banner = () => {

// const [search,setsearch]=useState("")

//     return (
//         <div>

// <div className="flex  justify-center items-center flex-col">
//     <div
//         className="w-full h-screen bg-[url('https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1403/wavebreakmediamicro140342959/27149550-group-portrait-of-happy-volunteers-carrying-donation-boxes-in-park.jpg')] bg-cover bg-center">
//         <div className="w-full h-full flex  justify-center items-center backdrop-opacity-10 backdrop-invert bg-white/95">
//         <span className="text-black text-4xl font-bold w-1/2 text-center">I Grow By Helping People In Need
//         <div className="relative flex mt-6">
//   <input onChange={(eve)=>{
//     setsearch(eve.target.value);
//   }}
//     type="email"
//     className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//     placeholder=" "
//     required
//   />
//   <button
//     className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
//     type="button"
//     data-ripple-light="true"
//   >
//    search
//   </button>
//   <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//   search here....
//   </label>
// </div>
//         </span>

//         </div>

//     </div>
// </div>

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
// {
//   data
//   .filter((val)=>{
//     if(search==""){
//       return val;
//     }else if(val.Category.toLowerCase().includes(search.toLowerCase()) ){
//       return val;
//     }
//   })
//   .map((val,index)=><p key={index}>ami tumijkhksdhnfsdmsd</p>)
// }
// </div>
//         </div>
//     );
// };

// export default Banner;







import { TypeAnimation } from 'react-type-animation';

import { useState } from "react";

const Banner = () => {
  const [search, setsearch] = useState("");

  const handlesearch=(e)=>{
    e.preventDefault()
    const form = e.target;
    const find = form.find.value;
    setsearch(find)
  }
  console.log(search);

  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <nav className="">
          <div className="container flex items-center justify-between px-6 py-3 mx-auto"></div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className=" font-semibold text-gray-800 dark:text-white lg:text-4xl">
               
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ignite Your Potential in Our Thrilling coding Contest ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Ignite Your Potential in Our Thrilling Gaming Contest ',
        1000,
        'Ignite Your Potential in Our Thrilling Writing Contest ',
        1000,
        'Ignite Your Potential in Our Thrilling Art Contest ',
        1000,
        'Ignite Your Potential in Our Thrilling Cooking Contest ',
        1000,
        'Ignite Your Potential in Our Thrilling Fitness Contest ',
        1000,
        'Ignite Your Potential in Our Thrilling Science Contest ',
        1000
      ]}
      wrapper="h5"
      speed={50}
      style={{ fontSize: 'em', display: 'inline-block' }}
      repeat={Infinity}
    /> 
               
                </h1>
               

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                Unleash potential, embrace challenge, and celebrate success in our contest program. Dare to dream and let your journey to excellence begin. Join us for innovation, excitement, and unforgettable moments!
                </p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <form onSubmit={handlesearch}>
                   
                    <input
                      name="find"
                      id="email"
                      type="text"
                      className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="find contest here.."
                    />
                    <button type="submit" className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      find
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="email illustration vector art"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
