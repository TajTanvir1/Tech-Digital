import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdPayment } from 'react-icons/md'
import useAuth from '../../../Hooks/useAuth'
import { IoIosPeople } from 'react-icons/io'
import { GiProgression } from 'react-icons/gi'
import useDesignation from '../../../Hooks/useDesignation'


const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [designation] = useDesignation();

//   console.log(designation);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <div>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/' className='flex gap-2'>
              <img
                // className='hidden md:block'
                src='https://i.ibb.co/R42PLDs/TD-Logo.png'
                alt='logo'
                width='40'
                height='40'
              />
              <h1 className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>Tech Digital</h1>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              <Link to='/' className='flex gap-2'>
                <img
                  // className='hidden md:block'
                  src='https://i.ibb.co/R42PLDs/TD-Logo.png'
                  alt='logo'
                  width='40'
                  height='40'
                />
                <h1 className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>Tech Digital</h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>

              {/* Statistics */}
              {designation === "Employee" && <>
                <NavLink
                  to='/dashboard/workSheet'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsGraphUp className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Work Sheet</span>
                </NavLink>
                {/* Payment History */}
                <NavLink
                  to='payment-history'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdPayment className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Payment History</span>
                </NavLink>
              </>}


              {
                designation === "HR" && <>
                  {/* Employee List */}
                  <NavLink
                    to='employee-list'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                      }`
                    }
                  >
                    <IoIosPeople className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Employee List</span>
                  </NavLink>

                  {/* Progress */}
                  <NavLink
                    to='progress'
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                      }`
                    }
                  >
                    <GiProgression className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Progress</span>
                  </NavLink>
                </>
              }



              {/* All Employee List */}
              {
               designation === "Admin" && <NavLink
               to='allEmployee'
               className={({ isActive }) =>
                 `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                 }`
               }
             >
               <IoIosPeople className='w-5 h-5' />

               <span className='mx-4 font-medium'>All Employee</span>
             </NavLink>
              }

            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;