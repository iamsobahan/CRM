import React, {  useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../context/AuthContext';
import { IoEye, IoEyeOff } from 'react-icons/io5';
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user, setUser] = useState({email : '', password : ''});
  const {login} = useContext(AUTH_CONTEXT)
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(user, navigate);
   
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

 

  return (
    <div className="login mt-6">
      <div className="flex justify-center items-center">
        <div className="w-2/5 m-20 mt-0 me-0 shadow-md p-8 pb-10 bg-slate-100">
          <div className="login__header">
            <div className="flex justify-center items-center">
              <img className="w-40" src={logo} alt="Logo" />
            </div>
            <div className="mt-10">
              <p className="custom-font font-bold text-2xl">Sign In</p>
              <p className="text-gray-400 custom-font text-md mt-1">
                Access the CRMS panel using your email and password.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-7 mb-5 text-lg mt-5 font-medium">
              Email
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="grow"
                placeholder="johndoe@gmail.com"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              Password
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="grow"
                placeholder="*******"
                required
              />
              <span
                className="cursor-pointer text-2xl"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>
           
             
              <Link
              to="/forget"
                className="text-end custom-color text-xl font-bold cursor-pointer"
              >
                Forget your password?
              </Link>
         
            <button
              type="submit"
              className="text-white btn btn-block custom-btn no-animation font-bold mt-3 text-xl"
            >
              Sign In
            </button>
          </form>
          <p className="mt-5 text-lg custom-font">
            New on our platform?
            <Link
              to="/"
              className="text-blue-800 font-semibold custom-font custom-border customer-bordercolor ms-2 text-lg"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
