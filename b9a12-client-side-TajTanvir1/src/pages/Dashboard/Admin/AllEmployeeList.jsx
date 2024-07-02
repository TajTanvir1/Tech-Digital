import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const AllEmployeeList = () => {
   const axiosSecure = useAxiosSecure();
   const [openModal, setOpenModal] = useState(false);
   const [salaryAmount, setSalaryAmount] = useState('');

   const { data: users = [], refetch } = useQuery({
      queryKey: ['allUsers'],
      queryFn: async () => {
         const res = await axiosSecure(`/allUsers`);
         return res.data;
      }
   })
   // console.log(users);

   const handleMakeHR = user => {
      axiosSecure.patch(`/allUsers/${user._id}`)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is HR Now!`,
                  showConfirmButton: false,
                  timer: 1500
               });
               refetch()
            }
         })
   }

   const handleFire = user => {
      axiosSecure.patch(`/fireUsers/${user._id}`)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is Fired!`,
                  showConfirmButton: false,
                  timer: 1500
               });
               refetch()
            }
         })
   }

   const handleSalaryForm = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const amount = form.get("amount");
      setSalaryAmount(amount)
   }
   

   const handleUpdateSalary = user => {
      setOpenModal(true);
      axiosSecure.patch(`/updateSalary/${user._id}`, salaryAmount)
         .then(res => {
            // console.log(res.data)
            if (res.data.modifiedCount > 0) {
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} Salary Updated.`,
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
            <title>Tech Digital | All Employee List</title>
         </Helmet>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-4  mb-2  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Employee List
         </h2>
         <div className="overflow-x-auto my-6 border-2 border-purple-200 rounded-md">
            <Table striped>
               <Table.Head className="text-center">
                  <Table.HeadCell className="border-2 border-purple-200 w-10">Sl</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Name</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Designation</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Make HR</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Fire</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Salary</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Update Salary</Table.HeadCell>
               </Table.Head>
               <Table.Body className="divide-y">


                  {users?.map((user, i) => (
                     <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="border border-purple-200">{i + 1}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{user.name}</Table.Cell>
                        <Table.Cell className="border border-purple-200 text-center">{user.designation}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{user?.designation === 'HR' ? <p className="font-bold mx-auto text-center text-lg">HR</p> : <Button gradientMonochrome="info" onClick={() => handleMakeHR(user)}><span>Make HR</span> </Button>}</Table.Cell>
                        <Table.Cell className="border border-purple-200 mx-auto text-center justify-center">{user.isFired ? 'Fired' : <Button gradientDuoTone="purpleToPink" onClick={() => handleFire(user)}>Fire</Button>}</Table.Cell>
                        <Table.Cell className="border border-purple-200 text-center">{user.salary ? user.salary : 0}</Table.Cell>
                        <Table.Cell className="border border-purple-200 text-center mx-auto flex justify-center"><Button gradientMonochrome="success" onClick={() => handleUpdateSalary(user)}>Update</Button></Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </div>
         <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
               <Modal.Header>Update Salary</Modal.Header>
               <Modal.Body>
                  <div className="space-y-6">
                     <form onSubmit={handleSalaryForm} className="justify-around">
                        {/* Amount */}
                        <div className="space-y-1 text-sm w-[250px]">
                           <label htmlFor="" className="  block dark:text-gray-600">
                              Amount
                           </label>
                           <input
                              type="number"
                              name="amount"
                              placeholder="Amount"
                              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                              required
                           />
                        </div>
                        <div className="flex items-center my-4">
                           <Button type="submit" gradientDuoTone="purpleToBlue" className="btn bg-purple-300 p-1 lg:mr-6 text-center">
                              <span className="text-lg">Submit</span>
                           </Button>
                        </div>
                     </form>
                  </div>
               </Modal.Body>
               <Modal.Footer>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
         </div>
      </div>
   );
};

export default AllEmployeeList;