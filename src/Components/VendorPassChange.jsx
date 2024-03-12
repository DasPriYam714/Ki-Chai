import React, { useState } from 'react';
import UserLogin from './UserLogin';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Replace this with your actual logic to send a reset password request
      // and handle the security code
      console.log('email:', email);
      console.log('securityCode:', securityCode);
    };

    return (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-auto md:max-w-md">
          <div>
            <img src="./public/logo.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-center mb-6 text-[#2A6B53]">Reset your password</h2>
          <div>
            <h4 className='text-left'>We sent a verification code to email. Enter the code from the email in the field below. </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 pt-8">
              <label htmlFor="fileUpload" className="peer border-b cursor-pointer">
                <div className="peer border-b-2 flex  gap-14 p-1">
                  <span className='text-gray-400'>We have sent an email to your <span className='text-black font-semibold'>sakil@gmail.com</span></span>
                </div>
              </label>
            </div>
            <div className="mb-8">
              <label
                htmlFor="securityCode"
                className="text-sm text-gray-700 font-medium block mb-4 grid justify-items-start"
              >
                Type your 6 digit security code
              </label>
              <div className="flex space-x-3 " data-hs-pin-input>
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="block w-[48px] h-[40px] text-center bg-gray-100 border-2 rounded-md bg-slate-300 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-100 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="⚬"
                    data-hs-pin-input-item
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
            >
              RESET
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
        <div className="md:w-auto md:max-w-md md:ml-4">
          <img
            src="./Design.png"
            alt="Login page image"
            className="object-cover h-1080 w-950 mb-6 px-10"
          />
        </div>
      </div>
    );
};

export default ResetPassword;

