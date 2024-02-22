import { createBrowserRouter, } from "react-router-dom";
import Main from "./Main";    
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
      Children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/services",
          element:<Services/>
        }
      ]
    },
  ]);