import React from 'react';
import { MdDelete, MdEditDocument } from 'react-icons/md';


const TaskTable = () => {
    return (
      <div className="overflow-x-auto mx-5 rounded-md">
        <table className="table custom-font border">
          {/* head */}
          <thead>
            <tr className="font-bold grid grid-cols-7 bg-warning text-white p-0 m-0">
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Due Date</th>
              <th>Department</th>
              <th>Assign To </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold grid grid-cols-7 hover cursor-pointer">
              <td>Complete ui</td>
              <td>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt, aliquid.
              </td>
              <td>Accounting</td>
              <td>Sobahan</td>
              <td>2024-10-08</td>
              <td>Completed</td>
              <td>
                <button className="btn btn-sm btn-success text-white me-2 text-xl">
                  <MdEditDocument title='Update'/>
                </button>
                <button className="btn btn-sm btn-error text-white text-xl">
                  <MdDelete title='Delete'/>
                </button>
              </td>
            </tr>
            
          </tbody>
          {/* foot */}
        </table>
      </div>
    );
};

export default TaskTable;