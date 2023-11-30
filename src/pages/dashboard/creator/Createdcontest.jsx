import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import useContest from "../../../hooks/useContest";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Createdcontest = () => {
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
        fetch(`https://server-side-nine-ashen.vercel.app/singlecontest/${id}`, {
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
              <th>Name</th>
              <th>category</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {contest.map(
              (item) =>
                item.email && (
                  <tr key={item._id}>
                    <td>{item.ContestName}</td>
                    <td>{item.Category}</td>
                    <td>
                      <Link to={`/dashboard/update/${item._id}`}>
                        <button className="text-xl text-blue-500">
                          <AiOutlineEdit></AiOutlineEdit>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handledelete(item._id)}
                        className="text-xl text-red-700"
                      >
                        <AiOutlineDelete></AiOutlineDelete>
                      </button>
                    </td>
                    <td>accepted</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Createdcontest;
