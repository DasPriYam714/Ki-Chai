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
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
    path: "/userReg",
    element: <UserReg />,
    
  },
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);