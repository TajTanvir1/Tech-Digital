import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Button } from "flowbite-react";
import useDesignation from "../../Hooks/useDesignation";
import Opinions from "./Opinions";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ContactUs = () => {
   const [designation] = useDesignation();
   const axiosPublic = useAxiosPublic();

   const handleOpinion = e =>{
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const opinion = form.get("opinion");
      
      const visitorOpinion = {name, email, opinion};
      // console.log(visitorOpinion);

      axiosPublic.post('/opinions', visitorOpinion)
               .then(res => {
                  if (res.data.insertedId) {
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Opinion Send Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                     });
                     
                  }
               })

   }

   return (
      <div>
         <Helmet>
            <title>Tech Digital | Contact Us</title>
         </Helmet>
         <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Contact Us
         </h2>
         <div className="flex justify-center">
            <p className="text-center text-lg w-3/4 md:w-1/2 animate__animated animate__slow animate__fadeInLeft">Tech Digital is committed to give the best service to our customers. Our helpline is available 24/7 for urgency. You can come to our office on working days.</p>
         </div>

         <div>
            <div className="flex flex-col md:flex-row gap-12 justify-around mx-auto">
               <div className="mx-3 lg:mx-1 w-[350px] md:w-[450px]">
                  <form onSubmit={handleOpinion} className="space-y-2 w-[350px] md:w-full">
                     <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600 text-purple-800 font-semibold ml-3">
                           Name
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="Your Name"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-400 border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                        />
                     </div>
                     <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600 text-purple-800 font-semibold ml-3">
                           Email
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="Email"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-400 border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                           required
                        />
                     </div>
                     <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600 text-purple-800 font-semibold ml-3">
                           Opinion
                        </label>
                        <textarea
                           type="text"
                           name="opinion"
                           placeholder="Write your opinions here..."
                           className="w-full px-4 py-3 rounded-md dark:border-gray-400 border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-warning"
                           required
                        />
                     </div>
               <Button type="submit"
                  gradientDuoTone="purpleToBlue"
                  className="w-full bg-purple-600 text-white lg:mr-6 text-center"
               >
                  <span className="text-lg">Submit Opinion</span>
               </Button>
            </form>
         </div>
         <div className="w-[350px] md:w-[450px] border-l-2 shadow-sm shadow-violet-200 pl-4 rounded-md border-purple-500">
            <div className="my-8">
               <Link to="/" className="btn btn-ghost underline font-kanit lg:text-4xl flex gap-2 text-2xl font-bold lg:ml-6">
                  <img src="https://i.ibb.co/R42PLDs/TD-Logo.png" alt="" className="w-10" />
                  Tech Digital</Link>
            </div>
            <div>
               <h3 className="text-xl font-bold dark-color">Address</h3>
               <p className="mid-text">Dhaka, Bangladesh</p>
            </div>
            <hr className="w-1/2" />
            <div className="my-6">
               <h3 className="text-xl font-bold dark-color">Phone</h3>
               <p className="mid-text">+880 1234-567890, +880 1234-567890</p>
            </div>
            <hr className="w-1/2" />
            <div>
               <h3 className="text-xl font-bold dark-color">Email</h3>
               <p className="mid-text">support@techdigital.com</p>
            </div>
         </div>
      </div>
         </div >

         <hr className="mt-4" /><hr />

{
   designation === 'Admin' && <div className="my-6">
      <Opinions></Opinions>
   </div>
         }

<div className="my-8">
   <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
      Connect in social media
   </h2>
   <div className="flex justify-center mx-auto space-x-8 md:space-x-16 text-2xl md:text-5xl mt-6 border rounded-xl p-4">
      <div>
         <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 justify-center">
            <FaFacebook />
         </a>
         <p className="text-xl font-bold">Facebook</p>
      </div>
      <div>
         <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 justify-center">
            <FaTwitter />
         </a>
         <p className="text-xl font-bold">Twitter</p>
      </div>
      <div>
         <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 justify-center">
            <FaInstagram />
         </a>
         <p className="text-xl font-bold">Instagram</p>
      </div>
   </div>
</div>
      </div >
   );
};

export default ContactUs;