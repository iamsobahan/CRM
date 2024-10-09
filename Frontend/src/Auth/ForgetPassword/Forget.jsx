
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { AUTH_CONTEXT } from '../../context/AuthContext';

const Forget = () => {
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const[error, setError] = useState('')
    const navigate = useNavigate()
    const [data, setData] = useState({email : '', old_password: '', new_password : '', confirm_password : ''})
    const {passwordChange} = useContext(AUTH_CONTEXT)
    const handleSubmit = (e)=> {
        e.preventDefault()
        passwordChange(data, navigate);
    }
  return (
    <div className="forget mt-9">
      <div className="flex justify-center items-center">
        <div className="w-2/5 shadow-md p-8 pt-4 pb-4 bg-slate-100">
          <div className="login__header">
            <div className="flex justify-center items-center">
              <Link to="/">
                <img className="w-40" src={logo} alt="" />
              </Link>
            </div>
            <div className="mt-5">
              <p className="custom-font font-bold text-2xl">
                Change Your Password
              </p>
              <p className="text-gray-400 custom-font text-md mt-1 mb-2">
                by your old password
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-7 mb-3 text-lg font-medium">
              Email
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="grow"
                placeholder="iamsobahan@gmail.com"
              />
            </label>
            {/* Password Field */}
            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              Old Password
              <input
                type={isOldPasswordVisible ? 'text' : 'password'} // Conditionally set type
                value={data.old_password}
                onChange={(e) =>
                  setData({ ...data, old_password: e.target.value })
                }
                className="grow"
                placeholder="*******"
                required
              />
              <span
                className="cursor-pointer text-2xl"
                onClick={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
              >
                {isOldPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>

            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              New Password
              <input
                type={isNewPasswordVisible ? 'text' : 'password'} // Conditionally set type
                value={data.new_password}
                onChange={(e) => {
                  setData({ ...data, new_password: e.target.value });
                }}
                className="grow"
                placeholder="*******"
                required
              />
              <span
                className="cursor-pointer text-2xl"
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
              >
                {isNewPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>

            {/* Confirm Password Field */}
            <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
              Confirm Password
              <input
                type={isConfirmPasswordVisible ? 'text' : 'password'} // Conditionally set type
                value={data.confirm_password}
                onChange={(e) => {
                  setData({ ...data, confirm_password: e.target.value });
                  if (data.new_password !== e.target.value) {
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
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                {isConfirmPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>

            {data.new_password
              ? data.new_password !== data.confirm_password && (
                  <small className="text-red-600 font-semibold">{error}</small>
                )
              : ''}

            <button
              type="submit"
              className="btn text-white btn-block custom-btn no-animation font-bold text-xl"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
