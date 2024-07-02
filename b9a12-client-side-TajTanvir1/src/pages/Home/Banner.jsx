import { Carousel } from "flowbite-react";

const Banner = () => {
   return (
      <div>

         <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
            <Carousel>
               <div className="flex h-full items-center bg-[url('https://i.ibb.co/86nMmpP/Banner-1.jpg')] bg-cover">
                  <div className="ml-8 md:ml-20 text-sky-50">
                     <p className="text-lg md:text-3xl font-bold">Welcome To Our Tech Digital</p>
                     <p className="text-lg md:text-3xl font-bold">Transforming Ideas into <br />Digital Masterpieces</p>
                  </div>
               </div>
               <div className="flex h-full items-center bg-[url('https://i.ibb.co/qW9hPFP/Banner-3.jpg')] bg-cover">
                  <div className="ml-8 md:ml-20 text-black">
                     <p className="text-lg md:text-3xl font-bold">Get best digital Services</p>
                     <p className="text-lg md:text-3xl font-bold">From Tech Digital</p>
                     <p className="text-lg md:text-3xl font-bold">Innovative Web Solutions for <br /> Modern Businesses</p>
                  </div>
               </div>

               <div className="flex h-full items-center bg-[url('https://i.ibb.co/bJ4GRm6/Banner-2.jpg')] bg-cover">
                  <div className="ml-8 md:ml-20 text-white">
                     <p className="text-lg md:text-3xl font-bold">Tech Digital provides</p>
                     <p className="text-lg md:text-3xl font-bold">Digital Solutions</p>
                     <p className="text-lg md:text-3xl font-bold">Software / Web / App Development,</p>
                     <p className="text-lg md:text-3xl font-bold">Digital Marketing, Web Design Etc.</p>
                  </div>
               </div>
            </Carousel>
         </div>
      </div>
   );
};

export default Banner;