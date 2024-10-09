import React, { useContext, useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { GrUserWorker } from 'react-icons/gr';
import { ImProfile } from 'react-icons/im';
import { AUTH_CONTEXT } from '../../../context/AuthContext';
import { MdOutlineDateRange, MdLocalPhone } from 'react-icons/md';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Profile = () => {

  const { userInfo, updateprofile } = useContext(AUTH_CONTEXT);
  const [ data, setData ] = useState({
    user_name: "",
    position: "",
    gender: "",
    address: "",
    image: "",
    phone: "",
    full_name: "",
    date_of_joining: "",
    date_of_birth : ""
  });
  const [inputTypeForJoin, setInputTypeForJoin] = useState('text');
  const [inputTypeForBirth, setInputTypeForBirth] = useState('text');
   const [info, setInfo] = useState({
     email: '',
     old_password: '',
     new_password: '',
     confirm_password: '',
   });
  
  const submitHandler = e=> {
    e.preventDefault()
    updateprofile(data)
    setData({
      user_name: '',
      position: '',
      gender: '',
      address: '',
      image: '',
      phone: '',
      full_name: '',
      date_of_joining: '',
      date_of_birth: '',
    });
    
  }

   const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
   const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
     useState(false);
   const [error, setError] = useState('');
 
  
   const { passwordChange } = useContext(AUTH_CONTEXT);
   const handlePasswordSubmit = (e) => {
     e.preventDefault();
     passwordChange(info, false);
    
   };
    return (
      <div>
        <div className="container">
          <div className="navbar bg-base-100 shadow-md px-11">
            <div className="flex-1">
              <p className="text-2xl font-semibold flex items-center custom-font">
                <ImProfile className="me-2" />
                Profile
              </p>
            </div>
          </div>
          <div className="profile_content shadow-lg p-11 m-11 mt-5 custom-btn rounded-2xl text-white">
            <div className=" flex justify-between items-center ">
              <div className="left flex justify-between items-center">
                <div className="rounded-full bg-gray-100 w-20 border border-secondary">
                  <img
                    className="rounded-full"
                    src={`http://localhost:8000/${userInfo.image}`}
                    alt=""
                  />
                </div>

                <div className="ms-5">
                  <p className="text-xl">
                    {userInfo.full_name ? userInfo.full_name : '....'}
                  </p>
                  <p>{userInfo.user_name ? userInfo.user_name : '...'}</p>
                  <p>{userInfo.email ? userInfo.email : '...'}</p>

                  <p>{userInfo.gender ? userInfo.gender : '...'}</p>

                  <button className="btn btn-sm btn-success text-white me-5">
                    {userInfo.is_active ? 'Active' : InActive}
                  </button>
                  {userInfo.is_superuser && (
                    <button className="btn btn-sm">Admin</button>
                  )}
                </div>
              </div>
              <div className="middle">
                <div className="flex items-center mb-9 gap-x-3">
                  <BsFillCalendar2DateFill />
                  <div>
                    <p>Date of Birth: </p>
                    <p>
                      {userInfo.date_of_birth
                        ? userInfo.date_of_birth
                        : 'Not added yet'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <MdLocalPhone />
                  <div>
                    <p>Phone: </p>
                    <p>{userInfo.phone ? userInfo.phone : 'Not added yet'}</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex items-center mb-9 gap-x-3">
                  <GrUserWorker />
                  <div>
                    <p>Position: </p>
                    <p>
                      {userInfo.position ? userInfo.position : 'Not added yet'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <MdOutlineDateRange />
                  <div>
                    <p>Joining Date: </p>
                    <p>
                      {userInfo.date_of_joining
                        ? userInfo.date_of_joining
                        : 'Not added yet'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 ms-24 gap-x-3">
              <GoLocation />
              <div>
                <p>
                 Address :  {userInfo.address ? userInfo.address : '...'}
                </p>
              </div>
            </div>
          </div>
          <div role="tablist" className="tabs tabs-bordered ms-11">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-xl custom-font"
              aria-label="Update Profile"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">
              <div>
                <form
                  onSubmit={submitHandler}
                  className="grid grid-cols-3 gap-4"
                >
                  <input
                    type="email"
                    value={userInfo.email}
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                    disabled
                  />
                  <input
                    type="text"
                    value={data.full_name}
                    placeholder="full Name"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, full_name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={data.user_name}
                    placeholder="username"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, user_name: e.target.value })
                    }
                  />

                  <input
                    type="phone"
                    value={data.phone}
                    placeholder="phone"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    value={data.position}
                    placeholder="position"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, position: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={data.address}
                    placeholder="Address"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                  />

                  <input
                    value={data.date_of_joining}
                    onFocus={(e) => setInputTypeForJoin('date')}
                    type={inputTypeForJoin}
                    placeholder="Joining Date"
                    className="input input-bordered w-full max-w-xs"
                    title="Joining Date"
                    onChange={(e) =>
                      setData({ ...data, date_of_joining: e.target.value })
                    }
                  />
                  <input
                    value={data.date_of_birth}
                    onFocus={(e) => setInputTypeForBirth('date')}
                    type={inputTypeForBirth}
                    placeholder="Date of Birth"
                    className="input input-bordered w-full max-w-xs"
                    title="date of birth"
                    onChange={(e) =>
                      setData({ ...data, date_of_birth: e.target.value })
                    }
                  />

                  <input
                    className="input input-bordered  pt-2"
                    type="file"
                    title="Change you image"
                    name=""
                    id=""
                    onChange={(e) =>
                      setData({ ...data, image: e.target.files[0] })
                    }
                  />
                  <select
                    value={data.gender} // This should bind to the state
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  >
                    <option disabled value="">
                      Pick your gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <></>
                  <button type="submit" className="btn custom-btn text-white">
                    Update profile
                  </button>
                </form>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-xl custom-font"
              aria-label="Change Password"
            />
            <div role="tabpanel" className="tab-content p-10">
              <form onSubmit={handlePasswordSubmit}>
                <label className="input input-bordered flex items-center gap-7 mb-3 text-lg font-medium">
                  Email
                  <input
                    type="email"
                    value={info.email}
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                    className="grow"
                    placeholder="iamsobahan@gmail.com"
                  />
                </label>
                {/* Password Field */}
                <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
                  Old Password
                  <input
                    type={isOldPasswordVisible ? 'text' : 'password'} // Conditionally set type
                    value={info.old_password}
                    onChange={(e) =>
                      setInfo({ ...info, old_password: e.target.value })
                    }
                    className="grow"
                    placeholder="*******"
                    required
                  />
                  <span
                    className="cursor-pointer text-2xl"
                    onClick={() =>
                      setIsOldPasswordVisible(!isOldPasswordVisible)
                    }
                  >
                    {isOldPasswordVisible ? <IoEyeOff /> : <IoEye />}
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
                  New Password
                  <input
                    type={isNewPasswordVisible ? 'text' : 'password'} // Conditionally set type
                    value={info.new_password}
                    onChange={(e) => {
                      setInfo({ ...info, new_password: e.target.value });
                    }}
                    className="grow"
                    placeholder="*******"
                    required
                  />
                  <span
                    className="cursor-pointer text-2xl"
                    onClick={() =>
                      setIsNewPasswordVisible(!isNewPasswordVisible)
                    }
                  >
                    {isNewPasswordVisible ? <IoEyeOff /> : <IoEye />}
                  </span>
                </label>

                {/* Confirm Password Field */}
                <label className="input input-bordered flex items-center gap-7 text-lg mb-3 font-medium">
                  Confirm Password
                  <input
                    type={isConfirmPasswordVisible ? 'text' : 'password'} // Conditionally set type
                    value={info.confirm_password}
                    onChange={(e) => {
                      setInfo({ ...info, confirm_password: e.target.value });
                      if (info.new_password !== e.target.value) {
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

                {info.new_password
                  ? info.new_password !== info.confirm_password && (
                      <small className="text-red-600 font-semibold">
                        {error}
                      </small>
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

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-xl custom-font"
              aria-label="Activity Logs"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;