import React, { useState } from 'react';
import Login from './VendorLogin';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';

const UserReg = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Perform validation checks here
    
    // Simulate registration process
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
    <div className="flex  justify-center ">
      <div className='w-[60%] h- full'>
        <img
          src="./Design.png" 
          alt="Login page image"
          className="object-cover w-full padding: 10px;"
        />
      </div>

      <div className="bg-white   px-20 py-8 w-[50%]  h-[100%]">
        <div>
          <img src="./logo.png" alt="" />
        </div>

        <div class=" mx-4 " className='justify-center ml-20'>
          <ul class="relative flex flex-row gap-x-2">
            {/* Stepper items */}
            <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#FFB800] font-medium text-gray-800 rounded-full outline-[#ff9500] dark:text-[#ff9500]">
        1
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
    </div>
    <div class="mt-3">
      
    </div>
  </li>
  {/* <!-- End Item -->

  <!-- Item --> */}
  <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full border-[#ff9500] dark:text-[#ff9500]">
        2
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
    </div>
    <div class="mt-3">
      
    </div>
  </li>
  
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Information Section */}
            <div>
              <h2 className="place-content-start text-xl font-normal mb-6 text-[#2A6B53]">Basic Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div  className="flex flex-row mx-1 w-full">
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

            <div className='flex flex-row mx-1 '>

            {/* City section */}
            <div>
              
              <input
                type="text"
                id="city"
                className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-half  mr-4" placeholder="City"
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
                className= "peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full " placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            </div>
          </div>

          {/* Submit Button */}
          {/* <div className="mt-6">
            <button
              type="submit"
              className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={VendorFileUpload}
            >
              Continue
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
            </div> */}
        </form>
        
        {/* Submit Button */}
        <div className="mt-6">
        <button
  type="submit"
  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

  <Link to="/userFile">Continue</Link>
</button>
        </div>
        
        {/* Login link */}
        <div>
        <div>
          <label htmlFor="goLogin" className="text-sm text-gray-700 ml-2">
            You already have an account?
          </label>
        </div>
        <div>
          <a href="/userLogin" onClick={UserLogin} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-2">
            Log in!
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserReg;