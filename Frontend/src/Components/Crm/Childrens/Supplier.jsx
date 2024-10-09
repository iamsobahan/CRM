import React, {  useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import SupplierTable from './SupplierTable';
import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';

const Supplier = () => {
    const [company_name, setCompany] = useState('');
    const [contact_name, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address_line1, setAddress] = useState('');
    const [country, setCountery] = useState('');
    const [website, setWebsite] = useState('');
   
   

    const supplierHandler = async(e)=> {
        e.preventDefault()
       
       try{
         const response = await axios.post(
          'http://127.0.0.1:8000/api-supplier/supplier/',
          {
            company_name,
            contact_name,
            country,
            email,
            phone,
            address_line1,
            website
           

          },
            {
                 'Content-Type': 'application/json',
            }
        );
        if (response.status == 201){
        toast.success(response.data.message);
       
          setCompany('')
          setContact('')
          setAddress('')
          setCountery('')
          setAddress('')
          setEmail('')
          setWebsite('')
          setPhone('')
        }

       }
       catch(e){
       
        toast.error(e.code);
       }
    }

  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <p className="text-2xl font-semibold flex items-center custom-font">
            <FaTasks className="me-2" />
            Supplier Details
          </p>
        </div>
      </div>
      <span
        className="border my-5 ms-5 px-2 py-1 cursor-pointer flex justify-center items-center custom-font bg-accent text-white rounded-md w-40"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        <IoMdAddCircleOutline className="me-1" />
        Add Supplier
      </span>
      <dialog id="my_modal_5" className=" modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex items-center shadow-md px-2 py-1 border rounded-lg">
              <IoMdAddCircleOutline className="me-1" />
              create new supplier
            </h3>
            <Toaster position="top-center" reverseOrder={false} />
            <form>
              <button className="btn btn-sm text-xl btn-error text-white">
                <IoClose />
              </button>
            </form>
          </div>
          <form className="mt-3" onSubmit={supplierHandler}>
            <div className="grid-cols-2 grid gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered w-full max-w-xs"
                value={company_name}
                onChange={(e) => setCompany(e.target.value)}
              />

              <input
                type="text"
                placeholder="Deal With"
                className="input input-bordered w-full max-w-xs"
                value={contact_name}
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full max-w-xs"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className="input input-bordered w-full max-w-xs"
                value={country}
                onChange={(e) => setCountery(e.target.value)}
              />
              <input
                type="text"
                placeholder="website name"
                className="input input-bordered w-full max-w-xs"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <textarea
              className="w-full h-32 p-2 border rounded-md mt-4"
              name=""
              id=""
              placeholder="Address"
              value={address_line1}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <br />
            <input
              className="btn btn-warning w-full"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </dialog>
      <SupplierTable />
    </>
  );
};

export default Supplier;
