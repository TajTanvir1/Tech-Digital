import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Button, Modal, Table } from "flowbite-react";
import { MdDone } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
   const axiosPublic = useAxiosPublic();
   const [openModal, setOpenModal] = useState(false);

   const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosPublic(`/users`);
         return res.data;
      }
   })
   // console.log(users);

   const handleMakeVerified = user => {
      axiosPublic.patch(`/users/${user._id}`)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is verified Now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
               refetch()
            }
         })
   }

   return (
      <div>
         <Helmet>
            <title>Tech Digital | Employee List</title>
         </Helmet>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-4  mb-2  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Employee List
         </h2>
         <div className="overflow-x-auto my-6 border-2 border-purple-200 rounded-md">
            <Table striped>
               <Table.Head className="text-center">
                  <Table.HeadCell className="border-2 border-purple-200 w-10">Sl</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Name</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Email</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Verified</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Bank Account</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Salary</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Pay</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Details</Table.HeadCell>
               </Table.Head>
               <Table.Body className="divide-y">
                  

                  {users?.map((user, i) => (
                     <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="border border-purple-200">{i + 1}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{user.name}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{user.email}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{user?.verified ? <MdDone className="text-3xl text-green-400 text-center mx-auto" /> : <Button  gradientMonochrome="failure" size="sm" className="mx-auto" onClick={() => handleMakeVerified(user)}><ImCross /></Button>}</Table.Cell>
                        <Table.Cell className="border border-purple-200 text-center">{user.accountNo ? user.accountNo : 0}</Table.Cell>
                        <Table.Cell className="border border-purple-200 text-center">{user.salary ? user.salary : 0}</Table.Cell>
                        <Table.Cell className="border border-purple-200"><Button onClick={() => setOpenModal(true)}  gradientDuoTone="greenToBlue">Pay</Button></Table.Cell>
                        <Table.Cell className="border border-purple-200"><Link to={`/dashboard/details/${user.email}`}><Button gradientDuoTone="purpleToBlue">Details</Button></Link></Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </div>
         <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Pay Employee</Modal.Header>
            <Modal.Body>
               <div className="space-y-6">
                  <div>
                     <p className="text-xl font-semibold">Salary = 5000</p>
                     {/* Month */}
                     <div className="space-y-1 text-sm w-[150px]">
                        <label htmlFor="" className="  block dark:text-gray-600">
                           Month
                        </label>
                        <input
                           type="text"
                           name="month"
                           placeholder="Month"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>

                     {/* Year */}
                     <div className="space-y-1 text-sm w-[150px]">
                        <label htmlFor="" className="  block dark:text-gray-600">
                           Year
                        </label>
                        <input
                           type="number"
                           name="year"
                           placeholder="Year"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>
                  </div>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button color="gray" onClick={() => setOpenModal(false)}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
export default EmployeeList;