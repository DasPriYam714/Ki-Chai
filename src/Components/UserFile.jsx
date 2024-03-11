import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './VendorLogin';
import UserLogin from './UserLogin';

const UserFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [picture1, setPicture] = useState(null);
  const [nidPic, setNIDPicture] = useState(null);

//   const handleChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

  return (
    <div className="flex  justify-center ">
        
            
        <div>
        <img
          src="./Design.png" 
          alt="Login page image"
          className="bg-auto  w-950 h-1080  mb-6 padding: 10px;"
        />
      </div>
      <div className='px-10 py-8'>
      <div>
          <img src="./logo.png" alt="" />
        </div>
        <div class=" mx-4 " className='justify-center ml-20'>
          <ul class="relative flex flex-row gap-x-2">
            {/* Stepper items */}
            <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100  font-medium text-gray-800 rounded-full outline-[#ff9500] dark:text-[#ff9500]">
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
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#FFB800] font-medium text-gray-800 rounded-full border-[#ff9500] dark:text-[#ff9500]">
        2
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
    </div>
  </li>
          </ul>
        </div>
        <form action="">
        <h2 className="justify-items-start text-xl font-normal mb-6 text-[#2A6B53]">Additional Information</h2>

            <div className="mb-6">
        <input
              type="file"
              id="picture1"
              class="border border-gray-300 py-2 px-4 block w-full placeholder-gray-400"
              placeholder="Upload your picture #1"
              value={picture1}
              onChange={(e) => setPicture(e.target.value)}
              required
            />
            </div>

            
        </form>
        <div className="mt-6">
        <button
  type="submit"
  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

  <Link to="/vendorFile">Continue</Link>
</button>
        </div>

        <div>
        <div>
          <label htmlFor="goLogin" className="text-sm text-gray-700 ml-2">
            You already have an account?
          </label>
        </div>
        <div>
          <a href="/" onClick={UserLogin} className="text-sm text-primary-600 hover:underline text-[#FFB800] ps-2">
            Log in!
          </a>
        </div>
        </div>

        
        </div>

    </div>

  );
};

export default UserFileUpload;
