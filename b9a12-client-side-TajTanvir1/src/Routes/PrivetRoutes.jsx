import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../Providers/AuthProviders";

const PrivetRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();

   if (loading) {
      return (
         <span className="flex mx-auto items-center justify-center h-60">
            <Triangle
               visible={true}
               height="80"
               width="80"
               color="#8f48ed"
               ariaLabel="triangle-loading"
               wrapperStyle={{}}
               wrapperClass=""
            />
         </span>
      );
   }

   if (user) {
      return children;
   }

   return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
