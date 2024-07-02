import React from 'react';
import { MdHomeRepairService } from 'react-icons/md';

const BestEmployee = () => {
   return (
      <div>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Best Employees Of Month
         </h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto my-6 gap-4'>
            <div className='border-l-2 border-purple-600 shadow-md shadow-blue-300 p-2 rounded-md mx-auto'>
               <img src="https://i.ibb.co/8zsNsrc/Potrait-2.jpg" alt="" className='w-[250px] shadow-md shadow-blue-200 rounded-r-lg' />
               <p className='font-bold my-2 underline text-center'>1. James Wilson</p>
               <p className='font-bold my-2 flex items-center gap-1 justify-center'><MdHomeRepairService />Web Developer</p>
            </div>

            <div className='border-l-2 border-purple-600 shadow-md shadow-blue-300 p-2 rounded-md mx-auto'>
               <img src="https://i.ibb.co/bvPmRm7/Potrait-3.jpg" alt="" className='w-[250px] shadow-md shadow-blue-200 rounded-r-lg' />
               <p className='font-bold my-2 underline text-center'>2. Olivia Brown</p>
               <p className='font-bold my-2 flex items-center gap-1 justify-center'><MdHomeRepairService />Web Designer</p>
            </div>

            <div className='border-l-2 border-purple-600 shadow-md shadow-blue-300 p-2 rounded-md mx-auto'>
               <img src="https://i.ibb.co/k3pvnGS/Potrait-1.jpg" alt="" className='w-[250px] shadow-md shadow-blue-200 rounded-r-lg' />
               <p className='font-bold my-2 underline text-center'>3. Henry Scott</p>
               <p className='font-bold my-2 flex items-center gap-1 justify-center'><MdHomeRepairService />Mobile App Designer</p>
            </div>

         </div>
      </div>
   );
};

export default BestEmployee;