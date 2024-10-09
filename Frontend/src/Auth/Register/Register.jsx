import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../context/AuthContext';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Register = () => {
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for visibility
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false); // State for visibility
  const [user, setUser] = useState({
    user_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms_conditions : false
  });
  const { register } = useContext(AUTH_CONTEXT);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user, navigate);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible); // Toggle password visibility
    };

  return (
    <div className="login">
      <div className="flex justify-center items-center">
        <div className="w-2/5 shadow-md p-8 pt-4 pb-4 bg-slate-100">
          <div className="login__header">
            <div className="flex justify-center items-center">
              <img className="w-40" src={logo} alt="" />
            </div>
            <div className="mt-5">
              <p className="custom-font font-bold text-2xl">Register</p>
              <p className="text-gray-400 custom-font text-md mt-1">
                Create new CRMS account
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-7 mb-3 text-lg mt-3 font-medium">
              Username
              <input
                type="text"
                value={user.user_name}
                onChange={(e) =>
                  setUser({ ...user, user_name: e.target.value })
                }
                className="grow"
                placeholder="sobahan"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-7 mb-3 text-lg font-medium">
              Email
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="grow"
                placeholder="iamsobahan@gmail.com"
              />
            </label>

            {/* Password Field */}
            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              Password
              <input
                type={isPasswordVisible ? 'text' : 'password'} // Conditionally set type
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

            {/* Confirm Password Field */}
            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              Again Password
              <input
                type={isConfirmPasswordVisible ? 'text' : 'password'} // Conditionally set type
                value={user.confirmPassword}
                onChange={(e) => {
                  setUser({ ...user, confirmPassword: e.target.value });
                  if (user.password !== e.target.value) {
                    setError('Password does not match!');
                  } else {
                    setError('');
                  }
                }}
                className="grow"
                placeholder="*******"
                required
              />
              <span
                className="cursor-pointer text-2xl"
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>

            {user.password
              ? user.password !== user.confirmPassword && (
                  <small className="text-red-600 font-semibold">{error}</small>
                )
              : ''}

            <div className="form-control mb-3">
              <label className="cursor-pointer label justify-start">
                <input
                  onChange={(e) =>
                    setUser({ ...user, terms_conditions: e.target.checked })
                  }
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  
                />
                <span className="label-text ms-2 text-lg custom-font">
                  I agree to the
                  <Link
                    to="/terms"
                    target="blank"
                    className="custom-color text-xl font-bold mb-3 cursor-pointer custom-border custom-font custom-hover-control"
                  >
                    Terms & Privacy
                  </Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="btn text-white btn-block custom-btn no-animation font-bold text-xl"
            >
              Register
            </button>
          </form>
          <p className="mt-5 text-xl custom-font">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-800 font-semibold custom-font custom-border customer-bordercolor ms-2"
            >
              Sign In Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
