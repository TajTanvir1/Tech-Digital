// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './testimonialstyles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
   return (
      <div>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-8 lg:mt-16 dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
        Client Testimonials
      </h2>
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
         >
            {/* Slider - 1 */}
            <SwiperSlide className='w-96'>
               <div className='w-20 mx-auto py-4'>
                  <img src="https://i.ibb.co/z68mqMH/PP4.png" className='rounded-xl' />
               </div>
               <p className='font-bold text-center'>Kevin M. - Project Manager</p>
               <div className='flex justify-center mx-auto my-2'>
                  <p className='flex text-yellow-200 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
               </div>
               <div className='flex justify-center my-2'>
               <p className='w-[300px] text-center'><FaQuoteLeft />
               From start to finish, Tech Digital provided exceptional web development services. They delivered our project on time and within budget, with excellent communication throughout. Fantastic work!
               </p>
               </div>
            </SwiperSlide>
            {/* Slider - 2 */}
            <SwiperSlide>
               <div className='w-20 mx-auto py-4'>
                  <img src="https://i.ibb.co/ZhXSfcT/PP2.png" className='rounded-xl' />
               </div>
               <p className='font-bold text-center'>Lisa R. - IT Director</p>
               <div className='flex justify-center mx-auto my-2'>
                  <p className='flex text-yellow-200 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
               </div>
               <div className='flex justify-center my-2'>
               <p className='w-[300px] text-center'> <FaQuoteLeft />
               We're extremely impressed with the software development services from Tech Digital. They provided a high-quality, tailored solution that fits our business needs perfectly. Their professionalism and expertise are unmatched.
               </p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='w-20 mx-auto py-4'>
                  <img src="https://i.ibb.co/NxmZD7d/PP3.png" className='rounded-xl' />
               </div>
               <p className='font-bold text-center'>Greg K. - Marketing Lead</p>
               <div className='flex justify-center mx-auto my-2'>
                  <p className='flex text-yellow-200 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
               </div>
               <div className='flex justify-center my-2'>
               <p className='w-[300px] text-center'><FaQuoteLeft />
               Working with [Company Name] on our web design project was a breeze. They listened to our needs, provided excellent suggestions, and delivered a website that truly reflects our brand identity. Highly recommend!
               </p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='w-20 mx-auto py-4'>
                  <img src="https://i.ibb.co/ZJC1W5h/PP6.png" className='rounded-xl' />
               </div>
               <p className='font-bold text-center'>Jennifer A. - Marketing Director</p>
               <div className='flex justify-center mx-auto my-2'>
                  <p className='flex text-yellow-200 gap-0.5'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></p>
               </div>
               <div className='flex justify-center my-2'>
               <p className='w-[300px] text-center'><FaQuoteLeft />
               Our online presence has dramatically improved thanks to [Company Name]'s digital marketing services. Their targeted campaigns and SEO strategies have significantly increased our traffic and conversion rates. We couldn't be happier!
               </p>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Testimonials;