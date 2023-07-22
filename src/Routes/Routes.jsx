import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import MyCollage from "../Pages/MyCollage/MyCollage";
import CollageDetails from "../Pages/CollageDetials/CollageDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signUp',
                element:<SignUp/>
            },
            {
                path:"collages",
                element:<Collages/>
            },
            {
               path:'admission',
               element:<Admission/> 
            },
            {
                path:'myCollage',
                element:<MyCollage/>
            },
            {
                path:'collages/:id',
                element:<CollageDetails/>
            }
        ]

    }

])

export default router;