import { Link } from "react-router-dom";


const Contestcard = ({val}) => {
    // const{ContestName,Image,Description,ContestPrice,PrizeMoney,TaskSubmissionTextInstruction,Category,Deadline}=item

    return (
        <div>
<div className="relative mt-5 flex flex-col text-gray-700 bg-white h-[520px] dark:bg-gray-900 shadow-md w-auto rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={val.Image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{val.Category}</span> 
    <h5 className="block mb-2 font-sans dark:text-white text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {val.ContestName}
    </h5>
    <p className="block  dark:text-white text-base  font-light leading-relaxed text-inherit">
      {val.Description}
    </p>
  </div>
  <div className="p-6 pt-0">
   <Link to={`/details/${val._id}`}> <button
      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
       details
    </button></Link>
  </div>
</div>
        </div>
    );
};

export default Contestcard;











