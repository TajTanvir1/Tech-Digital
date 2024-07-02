import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button, FileInput, Label } from "flowbite-react";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


const Register = () => {
   const axiosPublic = useAxiosPublic();
   const [showPassword, setShowPassword] = useState(false);
   const { createUser, updateUserProfile } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();

   const handleRegister = async (e) => {
      // console.log(e)
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      


      // Upload Image and Get Url
      const imageFile = { image: form.get("photo") };
      // console.log(imageFile)
      const res = await axiosPublic.post(imageHostingApi, imageFile, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      });
      // console.log(res.data);

      if(res.data.success){
         const name = form.get("name");
      const photo = res.data.data.display_url;
      const designation = form.get("designation");
      const salary = form.get("salary");
      const accountNo = form.get("accountNo");
      const email = form.get("email");
      const password = form.get("password");

      const data = { name, photo, email, password, designation, salary, accountNo };
      // console.log(data);
      if (password.length < 6) {
         toast.error("Password should be at Least 6 Characters or Longer");
         return;
      } else if (!/[A-Z]/.test(password)) {
         toast.error(
            "Password should contain at Least 1 Uppercase"
         );
         return;
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
         toast.error(
            "Password should contain at Least 1 Special Charecter"
         );
         return;
      }

      createUser(email, password)
         .then((result) => {
            const loggedUSer = result.user;
            // console.log(loggedUSer);
            updateUserProfile(name, photo)
            .then(()=>{
               // Create User Information
               const userInfo = {name, email, photo, designation, salary, accountNo};
               axiosPublic.post('/users', userInfo)
               .then(res =>{
                  if(res.data.insertedId){
                     // console.log('User Added to Database', userInfo)
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Register Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                      });
                     setTimeout(() => {
                        navigate(location?.state ? location.state : "/");
                     }, 1000);
                  }
               })

            })
         })
         .catch((error) => {
            console.error(error.Firebase);
            toast.error("Kindly give us proper information.", error[1]);
         });
      }


      
   };

   return (
      <div className="lg:p-8 rounded-b-lg flex flex-col md:flex-row mx-auto justify-center bg-[url('https://i.ibb.co/7CspfLP/Register-Page.jpg')] bg-cover">
         <Helmet>
            <title>Tech Digital | Register </title>
         </Helmet>
         {/* <div data-aos="fade-right" data-aos-duration="2000" className="relative">
            <img
               src="https://i.ibb.co/sQyXHYG/Register-Page.png"
               alt=""
               className="w-[600px] rounded-xl"
            />
            <div className="lg:w-[600px] absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#535ef9] to-[#6ed3ff3d]">
               <div className="md:w-[350px] ml-2">
                  <h1 className="text-3xl text-orange-400 font-bold ml-4">
                     Want to See Details.?
                  </h1>
                  <h1 className="text-2xl text-orange-400 font-bold ml-4 my-4">
                     Register for see More Details.
                  </h1>
                  <h1 className="text-2xl text-orange-400 font-bold ml-4">
                     You can add queries and recommend others also.
                  </h1>
               </div>
            </div>
         </div> */}
         <div data-aos="fade-left" data-aos-duration="2000" className="flex justify-center lg:justify-end">
            <div className="w-full p-8 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl mt-4">
               <h1 className="text-3xl  font-bold text-center text-white">
                  Please Register
               </h1>
               <form onSubmit={handleRegister} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8">
                     <div className="space-y-1 text-sm w-[300px] md:w-[350px]">
                        <label htmlFor="name" className="block dark:text-gray-600 text-white">
                           Name
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="Name"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-warning"
                           required
                        />
                     </div>
                     <div className="space-y-1 text-sm w-[300px] md:w-[350px]">
                        <label htmlFor="username" className="block text-white dark:text-gray-600">
                           Email
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="Email"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8">
                     {/* Designation */}
                     <div className='space-y-1 w-[300px] md:w-[350px]'>
                        <label className=" dark-text text-sm p-3 text-white">Designation</label>
                        <select name="designation" className='w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success space-y-4'>
                           <option value="Employee" className='text-lg'>Employee</option>
                           <option value="HR" className='text-lg'>HR</option>
                        </select>
                     </div>
                     {/* Salary */}
                     <div className="space-y-1 text-sm w-[300px] md:w-[350px]">
                        <label htmlFor="" className=" text-white block dark:text-gray-600">
                           Salary
                        </label>
                        <input
                           type="number"
                           name="salary"
                           placeholder="Salary"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8">
                     {/* Account No */}
                     <div className="space-y-1 text-sm w-[300px] md:w-[350px]">
                        <label htmlFor="" className="block text-white dark:text-gray-600">
                           AccountNo
                        </label>
                        <input
                           type="number"
                           name="accountNo"
                           placeholder="AccountNo"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>
                     {/* Password */}
                     <div className="space-y-1 text-sm relative  w-[300px] md:w-[350px]">
                        <label htmlFor="password" className="block text-white dark:text-gray-600">
                           Password
                        </label>
                        <input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           id="password"
                           placeholder="Password"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                        <span
                           className="absolute top-1/2 -ml-8"
                           onClick={() => setShowPassword(!showPassword)}
                        >
                           {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                     </div>
                  </div>
                  {/* Photo */}
                  <div className="space-y-1 mx-auto text-sm w-[300px] md:w-[350px] text-white">
                     <Label htmlFor="Photo" value="Upload file" />
                     <FileInput name="photo" id="file-upload" />
                  </div>

                  <Button type="submit" gradientDuoTone="greenToBlue" className="lg:btn-md w-full bg-purple-600 text-white lg:mr-6 text-center">
                     <span className="text-lg">Register</span>
                  </Button>
               </form>
               <p className="text-sm text-center sm:px-6 dark:text-gray-600 text-white">
                  Already have an account? Please
                  <Link
                     to="/login"
                     rel="noopener noreferrer"
                     href="#"
                     className="underline text-purple-300 font-bold text-lg ml-4"
                  >
                     Login
                  </Link>
               </p>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Register;
