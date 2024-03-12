import React, { useState } from 'react';
import ResetPassword from './VendorPassChange';
import Registration from './VendorReg';
import UserReg from './UserReg';
import { FcGoogle} from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import UserResetPassword from './UserResetPass';
 

 
 
const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };
  return (
    <div class="flex  justify-center  ">
        {/* picture part start here */}
        <div className="w-[50%] h- full">
        <img
          src="./Design.png"
          alt="Login page image"
          className="object-cover w-full padding: 10px;"
        />
        </div>
 
        {/* Form part start here */}
        <div className="bg-white   px-20 py-8 w-[50%]  h-[683px] ">
            <div className='mt-10'>
                <img src="./logo.png" alt="" />
            </div>
            <h1 class="font-roboto" className=" text-2xl font-bold text-center mb-6 text-[#2A6B53]">Welcome, login to your Account.</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            
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
                type="radio"
                class="radio" checked={false}
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2">
                Remember me
              </label>
            </div>
            <a href="/userPass" onClick={UserResetPassword} className="text-sm text-primary-600 hover:underline text-[#FFB800]">
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
          <section class="flex flex-row p-5 justify-items-center"  >
            <div>
          <label htmlFor="account" className="text-sm text-gray-700 ml-2">
                Don't have a account yet?
              </label>
              </div>
              <div>
              <a href="/userReg" onClick={UserReg} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-2">
              Sign Up!
            </a>
            </div>
 
          </section>
        </form>
        <div>
        <div className="divider">Or</div>
        </div>

        <div className='flex'>
          <div className="border-2 border-[#FFB800] w-[50%] flex justify-center items-center mr-2">
  <div className='mr-2'>
    <BsFacebook color='blue' size={23}/>
  </div>
  <div>
    <h4 className='font-semibold'>Login with Facebook</h4>
  </div>
</div>
          <div className="border-2 border-[#FFB800] w-[50%] flex justify-center items-center mr-2 ">
            <div >
            <FcGoogle size={23}/>

            </div>
            <div>
            <h4 className='font-semibold'>Login with Google</h4>

            </div>
          
          </div>
        </div>

        </div>
 
    </div>
 
  );
};
export default UserLogin;