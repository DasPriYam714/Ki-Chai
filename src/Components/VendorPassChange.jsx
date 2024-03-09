import React, { useState } from 'react';
import Login from './VendorLogin';
 
 
 
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
      <div className="flex flex-row mx-1">
        <div></div>
        <div>
        <img
          src="./public/login page pic 2.png"
          alt="Login page image"
          className="object-cover w-950 h-1080  mb-6 padding: 10px;"
        />
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 ">
        <div>
                <img src="./public/logo.png" alt="" />
            </div>
          <h1 className=" text-xl font-bold text-center mb-6 text-[#2A6B53]">Reset your password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-sm text-gray-700 font-medium block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" peer border-b border-[#393939]  py-2 text-[#393939] focus:outline-none focus:border-primary-500 block w-full p-2.5" placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* <div className="mb-6">
              <label
                htmlFor="securityCode"
                className="text-sm text-gray-700 font-medium block mb-2"
              >
                Security Code
              </label>
             
              <input
                type="text"
                id="securityCode"
                className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                required
              />
              <div class="flex space-x-3" data-hs-pin-input>
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
</div>
 
 
            </div> */}
 
            <div class = "mb-8">
            <label
                htmlFor="securityCode"
                className="text-sm text-gray-700 font-medium block mb-4 grid justify-items-start"
              >
                Type your 6 digit security code
              </label>
            <div class="flex space-x-3" data-hs-pin-input>
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
  <input type="text" class="block w-[38px] text-center bg-2ray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="⚬" data-hs-pin-input-item />
</div>
               
            </div>
           
           
            <button
            type="submit"
            className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-white"
            class="btn-lg btn btn-outline btn-warning"
          >
            RESET
          </button>
 
          <section class="flex flex-row p-5 justify-items-center"  >
            <div>
          <label htmlFor="account" className="text-sm text-gray-700 ml-2">
                Go back to
              </label>
              </div>
              <div>
              <a href="/" onClick={Login} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-1">
              Login screen
            </a>
            </div>
 
          </section>
          </form>
        </div>
      </div>
    );
  };
 
  export default ResetPassword;