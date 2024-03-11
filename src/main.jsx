import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/VendorLogin";
import ResetPassword from "./Components/VendorPassChange";
import Registration from "./Components/VendorReg";
 
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VendorFileUpload from "./Components/VendorFileUpload";
import UserReg from "./Components/UserReg";
import UserFileUpload from "./Components/UserFile";
import UserLogin from "./Components/UserLogin";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/vendorReg1",
    element: <Registration />,

  },
  {
    path: "/vendorFile",
    element: <VendorFileUpload />,
    
  },
  {
    path: "/userLogin",
    element: <Login/>,
    
  },
  {
    path: "/userReg",
    element: <UserReg />,
    
  },
  {
    path: "/userFile",
    element: <UserFileUpload />,
    
  },
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);