import { AiOutlineDelete } from "react-icons/ai";
import useContest from "../../../hooks/useContest";
import Swal from "sweetalert2";

const Managecontest = () => {
  const [contest, refetch] = useContest();
  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://contest-server-side.vercel.app/singlecontest/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            refetch();
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>contest Name</th>
              <th>status</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {contest.map(
              (item) =>
                item.email && (
                  <tr key={item._id}>
                    <td>{item.ContestName}</td>
                    <td>
                      <button>approved</button>
                    </td>
                    <td>
                      <button
                        onClick={() => handledelete(item._id)}
                        className="text-red-700 text-xl"
                      >
                        <AiOutlineDelete></AiOutlineDelete>
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managecontest;
