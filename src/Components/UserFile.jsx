import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './VendorLogin';
import UserLogin from './UserLogin';
import { MdCloudUpload } from "react-icons/md";

const UserFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

//   const handleChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

  return (
    <div className="flex  justify-center ">
        
            
        <div>
        <img
          src="./Design.png" 
          alt="Login page image"
          className="object-cover w-full padding: 10px;"
        />
      </div>
      <div className='bg-white   px-20 py-8 w-[50%]  h-[683px]'>
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
        <h2 className="justify-items-start text-xl font-normal pt-10 mb-10 text-[#2A6B53]">Additional Information</h2>

           
            <div className='pt-14'>
      {/* Invisible file input */}
      <input
        type="file"
        id="fileUpload"
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      {/* Button with icon */}
      <label htmlFor="fileUpload" className="peer border-b cursor-pointer">
        <div className="peer border-b-2 flex  gap-14 p-1">
        <span className='text-gray-400'>Upload your picture #1</span>
          <MdCloudUpload className="text-[#FFB800] w-6 h-6 justify-items-end"/> 
          
        </div>
      </label>

      {/* Display selected file name */}
      {selectedFile && (
        <div className="text-sm text-gray-500 mt-2">
          Selected file: {selectedFile.name}
        </div>
      )}
    </div>

            
        </form>
        <div className="mt-6 pt-8">
        <button
  type="submit"
  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

  <Link to="/vendorFile">Continue</Link>
</button>
        </div>

        <div className='pt-8'>
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
