import { Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
   return (
      <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col  items-center h-svh justify-center align-middle mx-2 md:mx-8">
         <Helmet>
            <title>Tech Digital | Error</title>
         </Helmet>
         <img src={'https://i.ibb.co/QKF05jh/Error-Page.jpg'} alt="" className="max-w-[300px] md:max-w-[600px]" />
         <div className="mx-auto text-center">
            <h2 className="my-2 text-2xl md:text-4xl font-bold animate__animated animate__bounce">ERROR : Wrong Page</h2>
            <h2 className="my-2 text-2xl md:text-4xl font-bold">You are in a wrong page.</h2>
{/* TODO - Btn design */}

            <Link to="/"><Button outline gradientDuoTone="purpleToBlue" className="text-xl font-semibold my-2 text-center mx-auto"><span className="text-blue-900">Click here back to home</span></Button></Link>
         </div>
      </div>
   );
};

export default Error;