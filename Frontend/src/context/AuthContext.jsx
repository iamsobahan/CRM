import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import axios from '../Intercepter/axios';


export const AUTH_CONTEXT = createContext();

const AUTHCONTEXT = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  // Move useNavigate here

  useEffect(()=> {
    const access = localStorage.getItem('access')
    if( access) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        fetch_user(access)
    } else {
        setLoading(false)
    }
  }, [])
   const fetch_user = async (token) => {
     try {
         const response = await axios.get('/api/auth/get-user/'); 
         setUserInfo(response.data)
       
     } catch (e) {
        console.log(e)
      
     } finally {
       setLoading(false);
     }
   };

  const register = async (user, navigate) => {
    try {
      if (user.password !== user.confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password does not match!',
        });
        return;
      } else {
        const response = await axios.post(
          '/api/auth/register/',
          user,
          {
            'Content-Type': 'application/json',
          }
        );
        if (response.status === 201) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message || 'An error occurred!',
      });
    } finally {
      setLoading(false);
    }
  };

  const login = async (user, navigate) => {
    try {
      const response = await axios.post(
        '/api/auth/login/',
        user,
        {
          'Content-Type': 'application/json',
        }
      );
      if (response.status === 200) {
        
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`
        await fetch_user(response.data.access)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(()=> {
            navigate('/crm')
        }, 2000)
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.response.data.error || 'An error occurred!',
      });
      
    } finally {
      setLoading(false);
    }
  };


   const passwordChange = async (data, navigate) => {
     try {
       if (data.new_password !== data.confirm_password) {
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Password does not match!',
         });
         return;
       } else {
        delete data.confirm_password
        const response = await axios.post('/api/auth/change-password/', data, {
           'Content-Type': 'application/json',
         });

         axios.defaults.headers.common[
           'Authorization'
         ] = `Bearer ${localStorage.getItem('access')}`;
         if (response.status === 200) {
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: response.data.detail,
             showConfirmButton: false,
             timer: 1500,
           });
           navigate &&(
             setTimeout(() => {
               navigate('/login');
             }, 2000)
            )
          
         }
       }
     } catch (e) {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: e.message || 'An error occurred!',
       });
     } finally {
       setLoading(false);
     }
   };


   
   const updateprofile = async (data) => {
     try {
        const formData = new FormData();
        for (const key in data) {
        formData.append(key, data[key]);
        }
         const response = await axios.put('/api/auth/get-user/', formData, {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('access')}`, // Use token for authentication
        });

         if (response.status === 200) {
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: response.data.message,
             showConfirmButton: false,
             timer: 1500,
           });

           await fetch_user(localStorage.getItem('access'))
           
         }
       
     } catch (e) {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: e.message || 'An error occurred!',
       });
     } finally {
       setLoading(false);
     }
   };

  const logout = (navigate) => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    delete axios.defaults.headers.common['Authorization'];
    setUserInfo(null);
    navigate('/login')
  };

  return (
    <AUTH_CONTEXT.Provider
      value={{ userInfo, register, login, logout,passwordChange,updateprofile, loading }}
    >
      {children}
    </AUTH_CONTEXT.Provider>
  );
};

export default AUTHCONTEXT;



