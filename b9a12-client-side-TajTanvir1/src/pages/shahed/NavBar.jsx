"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {

   const { user, logOut } = useAuth();

   // console.log(user);

   //   Logout Function
   const handleSignOut = () => {
      logOut().then().catch();
   };


   return (
      <Navbar fluid rounded className="bg-gradient-to-r from-cyan-50 to-blue-100">
         <Navbar.Brand href="https://flowbite-react.com">
            <img src="https://i.ibb.co/R42PLDs/TD-Logo.png" className="mr-3 h-6 sm:h-9" alt="Tech Digital" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tech Digital</span>
         </Navbar.Brand>


         <div className="flex md:order-2">
            {user ? <Dropdown
               arrowIcon={false}
               inline
               label=
               {<Avatar alt="User settings" img={user?.photoURL} rounded />


               }
            >
               <Dropdown.Header>
                  <span className="block text-lg font-semibold">Name: {user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">Email: {user?.email}</span>
               </Dropdown.Header>
               <Dropdown.Divider />
               <Dropdown.Item onClick={handleSignOut}>Log Out</Dropdown.Item>
            </Dropdown> :
               <div className="gap-2">
                  <Link to='/login'><button className="md:text-lg font-semibold underline">Login</button></Link>
                  <span className="text-lg"> / </span>
                  <Link to='/register'><button className="md:text-lg font-semibold underline">Register</button></Link>
               </div>
            }

            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
            <Navbar.Link href="/" active>
               Home
            </Navbar.Link>
            {
               user && <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
            }
            <Navbar.Link href="/contactUs">Contact Us</Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default NavBar;