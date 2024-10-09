import React, { useContext, useEffect, useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { IoIosNotifications, IoIosTime } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../context/AuthContext';
const Header = () => {
  const{logout, userInfo} = useContext(AUTH_CONTEXT)
const navigate = useNavigate()
    const [dataTime, setDateTime] = useState({})

    useEffect(()=>{
        
        const interval = setInterval(()=> {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime({date : formattedDate, time : formattedTime})
        },1000)

        return () => clearInterval(interval);
    } ,[])
    
    return (
      <div className="flex justify-between items-center p-3 bg-yellow-100">
        <label className="input input-bordered flex items-center gap-2 shadow-sm rounded-box">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <ul className="menu bg-white lg:menu-horizontal rounded-box shadow-sm">
          <details className="dropdown">
            <summary className="btn p-0 h-0 min-h-0 border-0">
              <li>
                <a>
                  <BsChatDots className="text-lg" />
                  Inbox
                  <span className="badge badge-sm badge-warning">99+</span>
                </a>
              </li>
            </summary>
            <div className="menu dropdown-content bg-base-100 custom-font rounded-box z-[1] mt-4 right-1 w-52 max-h-44 shadow-md overflow-y-scroll overflow-x-hidden flex flex-row scrollable-container">
              <Link to="/crm">
                <li>
                  <a>Rahim: Hi, How are You?</a>
                </li>
              </Link>
              <Link to="/crm">
                <li>
                  <a>Rahat : Where are you now? </a>
                </li>
              </Link>
              <Link to="/crm">
                <li>
                  <a>Rahat : Where are you now? </a>
                </li>
              </Link>
              <Link to="/crm">
                <li>
                  <a>Rahat : Where are you now? </a>
                </li>
              </Link>
              <Link to="chat" className="block">
                <li>
                  <a>See more....</a>
                </li>
              </Link>
            </div>
          </details>
          <details className="dropdown">
            <summary className="btn p-0 h-0 min-h-0 border-0">
              <li>
                <a>
                  <IoIosNotifications className="text-lg" />
                  Notifications
                  <span className="badge badge-sm badge-warning">7+</span>
                </a>
              </li>
            </summary>
            <ul className="menu dropdown-content bg-base-100 custom-font rounded-box z-[1] mt-4 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>

          <li>
            <a className="custom-font font-medium">
              <SlCalender className="text-lg" />
              {dataTime.date}
            </a>
          </li>
          <li>
            <a className="custom-font font-medium">
              <IoIosTime className="text-lg" />
              {dataTime.time}
            </a>
          </li>
        </ul>

        <details className="dropdown">
          <summary role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={`http://localhost:8000/${userInfo.image}`}
              />
            </div>
          </summary>
          <ul className="menu menu-sm dropdown-content bg-base-100 custom-font rounded-box right-0 z-[1] mt-3 w-48 p-2 shadow">
            <li>
              <Link to="profile" className="justify-between">
                Profile
                <span className="badge">Edit</span>
              </Link>
            </li>

            <li>
              <button onClick={() => logout(navigate)}>Logout</button>
            </li>
          </ul>
        </details>
      </div>
    );
};

export default Header;