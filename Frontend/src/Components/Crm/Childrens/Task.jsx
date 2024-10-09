import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import { FaTasks } from 'react-icons/fa';
import axios from 'axios';
import TaskTable from './TaskTable';
import { IoClose } from 'react-icons/io5';
const Task = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [department, setDepartment] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [status, setStatus] = useState('');

     const handleSubmit = async (e) => {
       e.preventDefault();

       const taskData = {
         task_name: taskName,
         task_description: taskDescription,
         due_date: dueDate,
         department: department,
         assign_to: assignTo,
         status: status,
       };


       try {
         const response = await axios.post('http://localhost:8000/api/tasks/task/',taskData);
         console.log(response)
         if (response.status === 201) {
           
           setTaskName('');
           setTaskDescription('');
           setDueDate('');
           setDepartment('');
           setAssignTo('');
           setStatus('');
         }
       } catch (error) {
         console.log(error)
       }
     };
    return (
      <>
        <div className="navbar bg-base-100 shadow-md">
          <div className="flex-1">
            <p className="text-2xl font-semibold flex items-center custom-font">
              <FaTasks className="me-2" />
              Tasks Details
            </p>
          </div>
        </div>
        <span
          className="border my-5 ms-5 px-2 py-1 cursor-pointer flex justify-center items-center custom-font bg-accent text-white rounded-md w-28"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          <IoMdAddCircleOutline className="me-1" />
          Add Task
        </span>
        <dialog id="my_modal_5" className=" modal modal-middle sm:modal-middle">
          <div className="modal-box">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg flex items-center shadow-md px-2 py-1 border rounded-lg">
                <IoMdAddCircleOutline className="me-1" />
                create new task
              </h3>
              <form method="dialog">
                <button className="btn btn-sm text-xl btn-error text-white">
                  <IoClose />
                </button>
              </form>
            </div>
            <form onSubmit={handleSubmit} className="mt-3">
             
              <div className="grid-cols-2 grid gap-4">
                <input
                  type="text"
                  placeholder="Task Name"
                  className="input input-bordered w-full max-w-xs"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Task Description"
                  className="input input-bordered w-full max-w-xs"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Due Date"
                  className="input input-bordered w-full max-w-xs"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option disabled value="">
                    Department
                  </option>
                  <option value="Accounting">Accounting</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                </select>

                <select
                  className="select select-bordered max-h-44 overflow-scroll"
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                >
                  <option disabled value="">
                    Assign To
                  </option>
                  <option value="Mugdho">Mugdho</option>
                  <option value="Abu Sayed">Abu Sayed</option>
                  <option value="Sobahan">Sobahan</option>
                  <option value="Farjana">Farjana</option>
                </select>

                <select
                  className="select select-bordered max-h-44 overflow-scroll"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option disabled value="">
                    Status
                  </option>
                  <option value="Not started">Not started</option>
                  <option value="In progress">In progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On hold">On hold</option>
                </select>
                <input className="btn btn-warning" type="submit" value="Add" />
              </div>
            </form>
          </div>
        </dialog>
        <TaskTable />
      </>
    );
};

export default Task;