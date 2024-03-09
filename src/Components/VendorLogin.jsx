import React, { useState } from 'react';
import ResetPassword from './VendorPassChange';
import Registration from './VendorReg';
 
 
 
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>
 
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };
  return (
    <div class="flex flex-row mx-1">
        {/* picture part start here */}
        <div>
        <img
          src="./login page pic 2.png"
          alt="Login page image"
          className="object-cover w-950 h-1080  mb-6 padding: 10px;"
        />
        </div>
 
        {/* Form part start here */}
        <div className="bg-white rounded-lg shadow-md px-10 py-8">
            <div>
                <img src="./logo.png" alt="" />
            </div>
            <h1 class="font-roboto" className=" text-2xl font-bold text-center mb-6 text-[#2A6B53]">Welcome to your Account.</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none " placeholder=" UserName" type ="text">
             
            </label>
            <input
              type="text"
              id="username"
              className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5" placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none " placeholder="Password" type ="text">
             
            </label>
            <input
              type="password"
              id="password"
              className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                aria-checked="false" data-state="unchecked" value="on" className="checkbox checkbox-xs"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2">
                Remember me
              </label>
            </div>
            <a href="/reset" onClick={ResetPassword} className="text-sm text-primary-600 hover:underline text-[#FFB800]">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
            class="btn-lg btn btn-outline btn-warning"
          >
            Login
          </button>
          <section class="flex flex-row p-5 justify-items-center"  >
            <div>
          <label htmlFor="account" className="text-sm text-gray-700 ml-2">
                Don't have a account yet?
              </label>
              </div>
              <div>
              <a href="/vendorReg1" onClick={Registration} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-2">
              Sign Up!
            </a>
            </div>
 
          </section>
        </form>
        </div>
 
    </div>
 
  );
};
export default Login;