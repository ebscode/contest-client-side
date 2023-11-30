import { useQuery } from "@tanstack/react-query";
import useaxiouspublic from "../../../hooks/useaxiouspublic";
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";

const Manageuser = () => {
  const axiouspublic = useaxiouspublic();
  const { data,refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiouspublic.get("/user",{
        headers:{
            Authorization:`bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });

const handlerole=(i)=>{
    axiouspublic.patch(`/user/admin/${i._id}`)
    .then(res=>{
        console.log(res.data)
        
    })
    Swal.fire({icon:'success',title:'successfully updated'})
    refetch()
}










  const handledelete = (i) => {


axiouspublic.delete(`/user/${i._id}`)
.then(res=>{
    console.log(res.data)
    Swal.fire({
        icon:'success',
        title:'deleted successfully'
    })
    refetch()
})



  };

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
              <th>role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={i._id}>
                <th>{index + 1}</th>
                <td>{i.displayName}</td>
                <td>{i.email}</td>
                <td> { i.role == 'admin'? 'admin': <button
                    onClick={() => handlerole(i)}
                    className="text-blue-600 text-xl"
                  >
                    <AiOutlineUser></AiOutlineUser>
                  </button>}</td>
                <td>
                  <button
                    onClick={() => handledelete(i)}
                    className="text-red-600 text-xl"
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageuser;
