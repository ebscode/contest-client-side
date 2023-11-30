import Countdown from "react-countdown";
import useContest from "../../hooks/useContest";

const Thriling = () => {
    const [contest]=useContest()
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
    return (
        <div>
             
              <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          {
            contest?.slice(8,11).map(item=>
                
<div key={item._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={item.Image}
      alt="img-blur-shadow"
      
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {item.ContestName}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
     {item.Description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
       <Countdown
                renderer={renderer}
                date={Date.now() + 100000000}
              ></Countdown>
    </button>
  </div>
</div>

                )
          }
          </div>

         
   






        </div>
    );
};

export default Thriling;



