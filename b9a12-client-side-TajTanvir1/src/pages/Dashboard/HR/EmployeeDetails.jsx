import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Triangle } from "react-loader-spinner";
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
   const axiosPublic = useAxiosPublic();
   const email = useParams();
   const userEmail = email.id;

   const { data: details, error, isLoading } = useQuery({
      queryKey: ['details', userEmail],
      queryFn: async () => {
         const res = await axiosPublic.get(`/users/${userEmail}`);
         return res.data;
      },
      enabled: !!userEmail,
   })

   if(isLoading){
      return <span className="flex mx-auto items-center justify-center h-60">
      <Triangle
         visible={true}
         height="120"
         width="120"
         color="#8f48ed"
         ariaLabel="triangle-loading"
         wrapperStyle={{}}
         wrapperClass=""
      />
   </span>
   }
   if(error){
      return <div>Error Loading Details</div>
   }


   return (
      <div>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
        Employee Details
      </h2>

      <div className="">
         <h1 className="text-2xl font-bold"> Name: {details?.name}</h1>
         <h1 className="text-xl">Designation: <span className="font-bold">{details?.designation}</span></h1>
         <div><img src={details?.photo} alt="" /></div>
      </div>

{/* Barchart */}
      <div>

      </div>
      </div>
   );
};

export default EmployeeDetails;