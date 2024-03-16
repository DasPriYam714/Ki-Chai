import React, { useState } from 'react';
import Login from './VendorLogin';
import VendorFileUpload from './VendorFileUpload';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';
import UserFileUpload from './UserFile';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration details:', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      city,
      dateOfBirth,
    });

    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCity('');
    setDateOfBirth('');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {/* Picture part */}
      <div className="w-full lg:absolute inset-0 lg:w-1/2   overflow-y-hidden ">
        <img
          src="./login page pic 2.png"
          alt="Login page image"
          className="object-cover w-full"
        />
      </div>

      {/* Form part */}
      <div className="bg-white    py-2 w-full lg:w-1/2 h-auto lg:absolute inset-y-0 right-0  mt-15 p-20">
        <div className=" flex justify-center">
          <img src="./logo.png" alt="" />
        </div>

        <div className="mx-8 lg:mx-24 mt-1 pl-14 just-center">
          <ul className="relative flex flex-row gap-x-1 lg: justify-center">
            {/* Stepper items */}
            <li className="shrink basis-0 flex-1 group">
              <div className="min-w-5 min-h-5 w-full inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-[#FFB800] font-medium text-gray-800 rounded-full outline-[#ff9500] dark:text-[#ff9500]">
                  1
                </span>
                <div className="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
              </div>
              <div className="mt-3"></div>
            </li>
            {/* <!-- End Item --> */}
            {/* <!-- Item --> */}
            <li className="shrink basis-0 flex-1 group">
              <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full border-[#ff9500] dark:text-[#ff9500]">
                  2
                </span>
                <div className="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
              </div>
              <div className="mt-3"></div>
            </li>
            <li className="shrink basis-0 flex-1 group">
              <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
                <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full border-[#ff9500] dark:text-[#ff9500]">
                  3
                </span>
                <div className="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
              </div>
              <div className="mt-3"></div>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className='lg:mx-20 mt-3'>
          {/* Form fields */}
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Information Section */}
            <div>
              <h2 className="justify-items-start text-xl text-left font-normal mb-4 text-[#2A6B53] py-5">Basic Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col lg:flex-row w-full justify-between gap-10">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full   lg: w-full mr-10"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full lg: w-fit"
                      placeholder="Last Name"
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
                className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full sm:w-full"
                placeholder="Email"
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
                className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full "
                placeholder="Password"
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
                className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full "
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row w-[100%] justify-between ">
              {/* City section */}
              <div>
                <input
                  type="text"
                  id="city"
                  className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full mr-10 lg: w-full"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              {/* Date of Birth Section */}
              <div>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="peer border-b border-[#393939] py-1 text-[#393939] focus:outline-none focus:border-primary-500 block w-full "
                  placeholder="Date of Birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        {/* Submit Button */}
        <div className="mt-6 lg:mx-20 mt-15">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Link to="/vendorFile" className="text-white">
              Continue
            </Link>
          </button>
        </div>
        {/* Login link */}
        <div className='pt-5 justify-center'>
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
        </div>
      </div>
    </div>
  );
};

export default Registration;
