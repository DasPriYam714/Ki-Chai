import React, { useState } from 'react';
import Login from './VendorLogin';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration details:', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      dateOfBirth,
    });
  };

  return (
    <div className="flex flex-row mx-1">
         <div>
        <img
          src="./login page pic 2.png" 
          alt="Login page image"
          className="object-cover w-950 h-1080  mb-6 padding: 10px;"
        />
        </div>

      <div className="bg-white rounded-lg shadow-md px-10 py-8">
      <div>
                <img src="./logo.png" alt="" />
            </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-6 text-[#2A6B53]">Basic Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div  className="flex flex-row mx-1">
                <div>
                  
                  <input
                    type="text"
                    id="firstName"
                    className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-half  mr-4" placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-half " placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            </div>

            {/* Email Section */}
            <div>
              <input
                type="email"
                id="email"
                className= " peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Section */}
            <div>
              
              <input
                type="password"
                id="password"
                className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full " placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password Section */}
            <div>
              
              <input
                type="password"
                id="confirmPassword"
                className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full " placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Date of Birth Section */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="text-sm text-gray-700 font-medium block mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
              class="btn-lg btn btn-outline btn-warning"
            >
              Register
            </button>
          </div>
          <div>
          <label htmlFor="goLogin" className="text-sm text-gray-700 ml-2">
                You already have an account?
              </label>
              </div>
              <div>
              <a href="/" onClick={Login} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-2">
              Log in!
            </a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
