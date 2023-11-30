import { useQuery } from "@tanstack/react-query";
import useaxiouspublic from "../../../hooks/useaxiouspublic";
import { AiOutlineSelect } from "react-icons/ai";

const Submittedcontest = () => {
    const axiouspublic=useaxiouspublic()

    const {data}=useQuery({
        queryKey:['submit contest'],
        queryFn:async ()=>{
            const res=await axiouspublic.get('/mycontest')
            return res.data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>select winner</th>
      </tr>
    </thead>
    <tbody>
      {data?.map(item=><tr key={item._id}>
        <th>1</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td><button><AiOutlineSelect className="text-blue-500"></AiOutlineSelect></button></td>
      </tr>)}
      

    </tbody>
  </table>
</div>

        </div>
    );
};

export default Submittedcontest;