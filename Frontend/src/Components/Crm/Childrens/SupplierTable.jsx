import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MdDelete, MdEditDocument } from 'react-icons/md';
const SupplierTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 
  const [error, setError] = useState(''); // 
  const supplierInfo = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api-supplier/supplier/'
      );
      setData(response.data);
    } catch (e) {
      setError(e.message) // Set error message
    } finally {
      setLoading(false); // Always stop loading when the request finishes
    }
  };

  const clickHandler= async ()=> {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api-supplier/supplier/',
        {
          company_name,
          contact_name,
          country,
          email,
          phone,
          address_line1,
          website,
        },
        {
          'Content-Type': 'application/json',
        }
      );

    }
    catch(e){
      
    }
  }

  useEffect(() => {
    supplierInfo();
  }, []); // Empty array ensures this runs only once on component mount

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if(error) {
    return <div className="text-center">Error : {error}</div>;
  }

  

  return (
    <div className="overflow-x-auto mx-5 rounded-md">
      {data.length > 0 ? (
        <table className="table table-sm border">
          <thead>
            <tr className="font-bold bg-warning text-white p-0 m-0">
              <th>Serial No.</th>
              <th>Company name</th>
              <th>Deal with</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Address</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((supplier, id) => (
              <tr
                key={supplier?.unique_id}
                className="font-semibold hover cursor-pointer"
              >
                <td>{id + 1}</td>
                <td>{supplier?.company_name}</td>
                <td>{supplier?.contact_name}</td>
                <td>{supplier?.email}</td>
                <td>
                  <a href="tel:{supplier?.phone}">+{supplier?.phone}</a>
                </td>

                <td>{supplier?.website}</td>
                <td>{supplier?.address_line1}</td>
                <td>{supplier?.country}</td>
                <td className='flex justify-center items-center'>
                  <button className="btn btn-sm btn-success text-white me-2 text-xl" onClick={()=> clickHandler(supplier?.unique_id)}>
                    <MdEditDocument title="Update" />
                  </button>
                  <button className="btn btn-sm btn-error text-white text-xl">
                    <MdDelete title="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">No data available</div>
      )}
    </div>
  );
};

export default SupplierTable;
