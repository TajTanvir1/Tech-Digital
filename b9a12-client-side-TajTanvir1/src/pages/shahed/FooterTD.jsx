import { Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const FooterTD = () => {
   return (
      <Footer container className="bg-gradient-to-r from-cyan-50 to-blue-100">
      {/* // <Footer container className="bg-[url('https://i.ibb.co/q1Fc7LG/Footer.jpg')]"> */}
         <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
               <div className="flex items-center md:ml-16 my-8">
                  <Footer.Brand
                     href="#"
                     src="https://i.ibb.co/R42PLDs/TD-Logo.png"
                     alt="Tech Digital"
                     name="Tech Digital"
                  />
               </div>
               <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-16 md:mr-16">
                  <div>
                     <Footer.Title title="about us" />
                     <Footer.LinkGroup col>
                        <Footer.Link href="#">Tech Digital</Footer.Link>
                        <Footer.Link href="#">Our Services</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Legal" />
                     <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Follow us" />
                     <Footer.LinkGroup col>
                        <div className="flex">
                           <Footer.Icon href="#" icon={BsFacebook} />
                           <Footer.Link href="#" className="pl-2">Facebook</Footer.Link>
                        </div>
                        <div className="flex">
                           <Footer.Icon href="#" icon={BsInstagram} />
                           <Footer.Link href="#" className="pl-2">Instagram</Footer.Link>
                        </div>
                        <div className="flex">
                           <Footer.Icon href="#" icon={BsTwitter} />
                           <Footer.Link href="#" className="pl-2">Twitter</Footer.Link>
                        </div>
                     </Footer.LinkGroup>
                  </div>
               </div>
            </div>
            <Footer.Divider />
            <div className="w-full mx-auto">
               <Footer.Copyright href="#" by="All Right Reserved 'Tech Digital'" />
            </div>
         </div>
      </Footer>
   );
};

export default FooterTD;