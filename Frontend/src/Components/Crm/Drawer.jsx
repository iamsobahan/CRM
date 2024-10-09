import React from 'react';
import { MdDashboard, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { SiInfracost, SiGooglemarketingplatform } from 'react-icons/si';
import { GrOverview, GrSchedules, GrUserWorker, GrNotes } from 'react-icons/gr';
import { IoIosNotifications } from 'react-icons/io';
import { SiCivicrm } from 'react-icons/si';
import { BiPurchaseTag } from 'react-icons/bi';
import { BsStack, BsChatDots } from 'react-icons/bs';
import { FaFileInvoiceDollar, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Drawer = () => {
    return (
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu custom-btn text-base-content min-h-full w-22 p-4 ps-2 pe-0">
          {/* Sidebar content here */}
          <div className="flex justify-start items-center text-3xl p-6 pe-0 pt-0 ps-1 text-white">
            <SiCivicrm />
            <span className="ms-1">SFT CRM</span>
          </div>
          <hr className="bg-yellow-100" />
          <li>
            <Link to="overview" className="text-white text-md custom-font">
              <GrOverview />
              Overview
            </Link>
          </li>
          <li>
            <Link to="dashboard" className="text-white text-md custom-font">
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="prospects" className="text-white text-md custom-font">
              <BsStack />
              Prospects
            </Link>
          </li>
          <li>
            <Link to="stock" className="text-white text-md custom-font">
              <BsStack />
              Stock Management
            </Link>
          </li>

          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <FaFileInvoiceDollar />
              Invoice Management
            </Link>
          </li>
          <li>
            <Link to="task" className="text-white text-md custom-font">
              <FaTasks />
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <GrSchedules />
              Events
            </Link>
          </li>
          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <GrUserWorker />
              Employee Details
            </Link>
          </li>

          <li>
            <details className="text-white">
              <summary className="text-white text-md custom-font flex">
             
                  <MdOutlineProductionQuantityLimits  />
                  Purchase
               
              </summary>

              <ul className="p-2">
                <li>
                  <Link
                    to="/crm/supplier"
                    className="text-white text-md custom-font"
                  >
                    Supplier Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/crm/purchase"
                    className="text-white text-md custom-font"
                  >
                    Purchase Info
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <SiInfracost />
              Expendatures
            </Link>
          </li>

          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <BiPurchaseTag />
              Sales
            </Link>
          </li>
          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <SiGooglemarketingplatform />
              Marketing Events
            </Link>
          </li>
          <li>
            <Link to="/overview" className="text-white text-md custom-font">
              <GrNotes />
              Notes
            </Link>
          </li>
          <li>
            <Link to="chat" className="text-white text-md custom-font">
              <BsChatDots />
              Chats
            </Link>
          </li>
          <li>
            <Link to="notification" className="text-white text-md custom-font">
              <IoIosNotifications />
              Notifications
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Drawer;