import React, { useState } from 'react';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';
const UserOTP = () => {
  const [email, setEmail] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email:', email);
    console.log('securityCode:', securityCode);
  };

  return (
    <div className="flex flex-col  lg:flex-row justify-center">
      <div></div>
      <div>
        <img
          src="./Design.png"
          alt="Login page image"
          className="object-cover w-950 h-1080 mb-6 p-10"
        />
      </div>
      <div className="bg-white rounded-lg  p-8">
        <div>
          <img src="./logo.png" alt="" />
        </div>
        <h2 className="text-xl font-bold text-center mb-6 text-[#2A6B53]">Please, verify your account.</h2>
        <div>
          <h4 className='text-left'>We sent a verification code to email. Enter the code from the email in the field below.</h4>
        </div>

        <form onSubmit={handleSubmit}>
          

          <div className="mb-8 mt-6">
            <label
              htmlFor="securityCode"
              className="text-sm text-gray-700 font-medium block mb-4  justify-items-start"
            >
              Type your 6 digit security code
            </label>
            <div className="flex space-x-3" data-hs-pin-input>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  className="block w-[48px] h-[40px] text-center border-2 rounded-md bg-slate-300 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="⚬"
                  data-hs-pin-input-item
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-offset-white"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <Link to="/userLogin" className='text-white'>Login</Link>
          </button>

          <section className="flex flex-row p-5 justify-items-center">
            <div>
              <label htmlFor="account" className="text-sm text-gray-700 ml-2">
                Go back to
              </label>
            </div>
            <div>
              <a href="/" onClick={UserLogin} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-1">
                Login screen
              </a>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default UserOTP;
