import React, { useState } from 'react';
import ResetPassword from './VendorPassChange';
import Registration from './VendorReg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
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
      <div className="bg-white    py-8 w-full lg:w-1/2 h-auto lg:absolute inset-y-0 right-0  mt-15 p-20">
        <div className="mt-10 flex justify-center">
          <img src="./logo.png" alt="" />
        </div>
        <h1 className="font-roboto text-xl font-normal text-center mb-6 text-[#2A6B53]">
          Welcome, Login to your Account.
        </h1>
        <form onSubmit={handleSubmit} className='lg:mx-20 mt-15'>
          <div className="mb-6">
            <input
              type="text"
              id="username"
              className="peer border-b border-[#393939] py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="peer border-b border-[#393939] py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <div className="flex flex-col lg:flex-row items-center">
              <input id="remember-me" type="radio" className="radio-md" />
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
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Login
          </button>
          <section className="flex flex-col lg:flex-row p-5 justify-center">
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
