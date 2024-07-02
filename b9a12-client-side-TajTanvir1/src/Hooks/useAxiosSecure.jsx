import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   withCredentials: true,
})
const useAxiosSecure = () => {
   const navigate = useNavigate();
   const { logOut } = useAuth();


   axiosSecure.interceptors.request.use(function(config){
      const token = localStorage.getItem('access-token')
      // console.log('req stopped by interceptors')
      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, function (error){
      return Promise.reject(error);
   });


// Interceptors Status
axiosSecure.interceptors.response.use(function(response){
   return response;
}, async (error) => {
   const status = error.response.status;
   // console.log('status Error in Interceptors', status)
   // IF Error LogOut user and send to Login Page
   if(status === 401 || status === 403){
      await logOut();
      navigate('/login');
   }
   return Promise.reject(error);
})

  return axiosSecure;
};

export default useAxiosSecure;