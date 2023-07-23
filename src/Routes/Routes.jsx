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
import PrivateRoute from "./PrivateRoute";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import ProfileInformation from "../Pages/ProfileInformation/ProfileInformation";


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
                element:<PrivateRoute><CollageDetails/></PrivateRoute>
            },
            {
                path:'admission/admissionForm/:id',
                element:<PrivateRoute><AdmissionForm/></PrivateRoute>
            },
            {
                path:'profileInformation',
                element:<ProfileInformation/>
            }
        ]

    }

])

export default router;