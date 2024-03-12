import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './VendorLogin';
import { MdCloudUpload } from "react-icons/md";

const VendorInterest = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [picture1, setPicture] = useState(null);
  const [nidPic, setNIDPicture] = useState(null);
  const [nidBack, setNIDBack] = useState(null);

  const handleChange = (event) => {
    setPicture(event.target.files[0]);
    setNIDPicture(event.target.files[1]);
    setNIDBack(event.target.files[2]);
  };
  const itemsList = [
    "Plumber", "Technician", "Electrician", "mechanic", "Furniture Assembly",
    "Moving Help", "Painting", "Mounting", "Icaco", "Jackfruit",
    "Kiwi", "Lemon", "Mango", "Nectarine", "Orange",
    "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato",
    "Ugli fruit", "Vanilla bean", "Watermelon", "Ximenia",
    "Yellow passion fruit"
  ];

  return (
    <div className="flex flex-col  lg:flex-row justify-center ">
        
            
        <div>
        <img
          src="./login page pic 2.png" 
          alt="Login page image"
          className="bg-auto  w-950 h-1080  mb-6 padding: 10px;"
        />
      </div>
      <div className='px-10 py-8'>
      <div>
          <img src="./logo.png" alt="" />
        </div>
        <div class=" mx-8">
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
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#FFB800] font-medium text-gray-800 rounded-full border-[#ff9500] dark:text-[#ff9500]">
        2
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
    </div>
    <div class="mt-3">
      
    </div>
  </li>
  {/* <!-- End Item -->

  <!-- Item --> */}
  <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-[#FFB800] font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-[#ff9500]">
        3
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-[#ff9500] group-last:hidden dark:bg-[#ff9500]"></div>
    </div>
    <div class="mt-3">
       
      
    </div>
  </li>
          </ul>
        </div>
        <form action="">
        <h2 className="text-xl font-bold text-left mb-6 text-[#2A6B53]">Interest</h2>

        <div className="overflow-y-auto max-h-64 border-2">
      <ul className="space-y-2">
        {itemsList.map((itemsList, index) => (
          <li key={index} className="flex items-center pl-2">
            <input type="checkbox" className="form-checkbox  h-5 w-30 text-blue-500" />
            <span className="ml-2">{itemsList}</span>
          </li>
        ))}
      </ul>
    </div>
        </form>
        
        <div className="mt-6 pt-8">
        <button
  type="submit"
  className="w-full py-3 px-4 inline-flex justify-center items-center text-center gap-x-2 text-sm font-semibold rounded-lg border-transparent bg-[#FFB800] text-white hover:bg-[#ffb700d3] disabled:opacity-50 disabled:pointer-events-none  ">

  <Link to="/vendorOTP" className='text-white'>Continue</Link>
</button>
        </div>

        <div className='pt-6'>
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

export default VendorInterest;
