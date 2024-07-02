import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
// import { useEffect, useState } from "react";


const Services = () => {
   // const [services, setServices] = useState([]);
   
   
   const {data : services} = useQuery({
      queryKey: ['services'],
      queryFn: async() =>{
         const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);
         return res.json();
      }
   })
   // console.log(services);
   
   //   useEffect(() => {
   //     fetch(`${import.meta.env.VITE_API_URL}/services`)
   //       .then((res) => res.json())
   //       .then((data) => setServices(data));
   //   }, []);

   return (
      <div>
      
      <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
        Our Services
      </h2>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="grid lg:grid-cols-3 md:grid-cols-2 justify-around">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
   );
};

export default Services;