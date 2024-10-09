import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import route from './routes/route.jsx'
import { RouterProvider } from 'react-router-dom';
import  AUTHCONTEXT from './context/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AUTHCONTEXT>
      <RouterProvider router={route}></RouterProvider>
    </AUTHCONTEXT>
  </StrictMode>
);
