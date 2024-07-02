import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

   const {categoryName, Title, Image, workDetails, timeNeed, Amount, workFullDetails } = service

   return (
      <div className="w-[320px] border-l-4 my-4 p-2 rounded-lg border-purple-600 shadow-md shadow-indigo-100 justify-center flex mx-auto">
         <div className="relative">
            <div>
               <img src={Image} alt="" className="w-[280px] rounded-r-xl mt-4" />
            </div>
            <h1 className="bg-purple-800 p-1 text-center text-white rounded-r-xl font-semibold">{categoryName}</h1>
            <h1 className="my-1 underline font-semibold w-[280px]">Service: {Title}</h1>
            <h1 className="my-1 w-[280px]"><span className="font-semibold">Work Details:</span> {workDetails}</h1>
            <h1 className="my-1 w-[280px]"><span className="font-semibold">Amount:</span> {Amount}</h1>
            <h1 className="my-1 w-[280px] mb-4"><span className="font-semibold">Time Need:</span> {timeNeed}</h1>
            <Link to='/' className="flex justify-center mx-auto mb-4">
            <Button onClick='/' gradientDuoTone="purpleToBlue" className="text-center">More Details</Button>
            </Link>
         </div>
      </div>
   );
};

export default ServiceCard;