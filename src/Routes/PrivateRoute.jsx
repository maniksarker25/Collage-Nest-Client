import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../components/LoadingSpiner";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const {user,loading} = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpiner/>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;