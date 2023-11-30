import React from 'react';
import useaxiouspublic from '../../../hooks/useaxiouspublic';
import useContest from '../../../hooks/useContest';
import { useLoaderData } from 'react-router-dom';

const Mycontest = () => {
const loader=useLoaderData()



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>category</th>
        <th>deadline</th>
      </tr>
    </thead>
    <tbody>
      {loader?.map((item,index)=> <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.deadline}</td>
      </tr>)}
     

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Mycontest;