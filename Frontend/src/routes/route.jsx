import Register from '../Auth/Register/Register.jsx';
import Login from '../Auth/Login/Login.jsx';
import Crm from '../Components/Crm/Crm.jsx';
import Overview from '../Components/Crm/Childrens/Overview.jsx';
import Dashboard from '../Components/Crm/Childrens/Dashboard.jsx';
import Stock from '../Components/Crm/Childrens/Stock.jsx';
import Purchase from '../Components/Crm/Childrens/Purchase.jsx';
import Supplier from '../Components/Crm/Childrens/Supplier.jsx';
import Chats from '../Components/Crm/Childrens/Chats.jsx';
import Notifications from '../Components/Crm/Childrens/Notifications.jsx';
import Task from '../Components/Crm/Childrens/Task.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Prospects from '../Components/Crm/Childrens/Prospects.jsx';
import Profile from '../Components/Crm/Childrens/Profile.jsx';
import Terms from '../Components/Terms/Terms.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import NotFound from '../Components/NotFound/NotFound.jsx';
import Forget from '../Auth/ForgetPassword/Forget.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forget',
    element: <Forget />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/crm',
    element: (
      <PrivateRoutes>
        <Crm />
      </PrivateRoutes>
    ),
    children: [
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'prospects',
        element: <Prospects />,
      },
      {
        path: 'stock',
        element: <Stock />,
      },
      {
        path: 'chat',
        element: <Chats />,
      },
      {
        path: 'notification',
        element: <Notifications />,
      },
      {
        path: 'task',
        element: <Task />,
      },
      {
        path: 'purchase',
        element: <Purchase />,
      },
      {
        path: 'supplier',
        element: <Supplier />,
      },
    ],
  },
]);


export default router