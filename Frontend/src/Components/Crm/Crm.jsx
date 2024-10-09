import React from 'react';
import {  Outlet, useLoaderData } from 'react-router-dom';

import Header from './header';
import Drawer from './Drawer';

const Dashboard = () => {
    return (
      <>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Header/>
            <Outlet />

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <Drawer/>
        </div>
      </>
    );
};

export default Dashboard;