import { useQuery } from "@tanstack/react-query";
import useaxiouspublic from "../../../hooks/useaxiouspublic";
import useContest from "../../../hooks/useContest";
import PopularCard from "./PopularCard";


const PopularContest = () => {
 
  const [contest]=useContest()

  console.log(contest)
    return (
       <div>
        <h1 className="text-3xl font-semibold dark:text-white my-5">Popular Contest</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
    contest.slice(0,6).map(item=><PopularCard item={item} key={item._id}></PopularCard>)
   }

                 
        </div>
        
       </div>
    );
};

export default PopularContest;