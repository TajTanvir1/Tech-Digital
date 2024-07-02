import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";


const Login = () => {
   const axiosPublic = useAxiosPublic();
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const { signIn, googleLogin } = useAuth();

   // Login with Email Password

   const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      // console.log(email, password);
      signIn(email, password)
         .then((result) => {
            // console.log(result.user);
            toast("You Login Successfully");
            setTimeout(() => {
               navigate(location?.state ? location.state : "/");
            }, 2000);
         })
         .catch((error) => {
            console.error(error);
            toast.error("Kindly Provide Correct Email & Password");
         });
   };

   // Google Login

   const handleSocialLogin = (socialProvider) => {
      const designation = 'Employee';
      const salary = '0';
      socialProvider()
         .then(result => {
            // Create User Information
            // console.log(result)
            const userInfo = {
               name: result.user?.displayName,
               email: result.user?.email,
               photo: result.user?.photoURL,
               designation, salary
            };
            axiosPublic.post('/users', userInfo)
               .then(res => {
                  if (res.data.insertedId) {
                     // console.log('User Added to Database')
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Added to Database Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                     });
                  }
               })
               setTimeout(() => {
                  Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Login Successfully.",
                     showConfirmButton: false,
                     timer: 1000
                  });
                  navigate(location?.state ? location.state : "/");
               }, 500);
         })
         .catch((error) => {
            console.error(error);
         });
   };
   return (
      <div className="lg:p-10 md:p-4 px-2 py-6 flex-col md:flex-row rounded-b-lg flex justify-center bg-[url('https://i.ibb.co/BTTYvMm/Login-Page.jpg')] bg-cover">
         <Helmet>
            <title>Tech Digital | Login</title>
         </Helmet>
         <div data-aos="fade-left" data-aos-duration="2000" className="flex justify-end">
            <div className="w-full max-w-md p-8 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl lg:mr-10">
               <h1 className="text-3xl text-white font-bold text-center">
                  Please Login
               </h1>
               <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-1 text-sm">
                     <label htmlFor="username" className="block dark:text-gray-600 text-white">
                        Email
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="username"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-md dark:border-gray-400 border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                        required
                     />
                  </div>
                  <div className="space-y-1 text-sm relative">
                     <label htmlFor="password" className="block dark:text-gray-600 text-white">
                        Password
                     </label>
                     <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 border border-gray-300 input-bordered input-warning dark:text-gray-800 focus:dark:border-violet-600"
                        required
                     />
                     <span
                        className="absolute bottom-8 -ml-8 items-center"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </span>
                     <div className="flex justify-end text-xs dark:text-gray-600 text-white">
                        <a rel="noopener noreferrer" href="#">
                           Forgot Password?
                        </a>
                     </div>
                  </div>
                  <Button type="submit"
                     gradientDuoTone="greenToBlue"
                     className="w-full bg-purple-600 text-white lg:mr-6 text-center"
                  >
                     <span className="text-lg">Login</span>
                  </Button>
               </form>
               <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                  <p className="px-3 text-sm dark:text-gray-600 text-white">
                     Login with social accounts
                  </p>
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
               </div>
               <div className="flex justify-center space-x-8">
                  <button
                     onClick={() => handleSocialLogin(googleLogin)}
                     className="btn btn-error btn-outline px-4 rounded-lg btn-wide"
                  >
                     <span className="dark-color flex items-center text-lg border-white border px-2 text-white py-1 rounded-lg">
                        <span className="pr-2">
                           <FcGoogle />
                        </span>{" "}
                        Google
                     </span>
                  </button>
               </div>
               <p className="text-sm text-center sm:px-6 dark:text-gray-600 items-center text-white">
                  Don't have an account? Please
                  <Link
                     to="/register"
                     rel="noopener noreferrer"
                     className="underline text-purple-300 font-bold text-lg ml-4"
                  >
                     Register
                  </Link>
               </p>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Login;
