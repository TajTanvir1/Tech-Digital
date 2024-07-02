import {  useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {

   const axiosPublic = useAxiosPublic();
   const [startDate, setStartDate] = useState(new Date());
   const { user } = useAuth();

   const handleWorks = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const tasks = form.get("tasks");
      const hours = form.get("hours");
      const date = startDate;
      const email = user?.email;
      const name = user?.displayName;
      // console.log(tasks, hours, date, email,name );


      const taskInfo = { tasks, hours, date, email, name };
      axiosPublic.post('/tasks', taskInfo)
         .then(res => {
            if (res.data.insertedId) {
               // console.log('Task Added to Database')
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Task Added Successfully.",
                  showConfirmButton: false,
                  timer: 1500
               });
               refetch();
            }
         })
   };

   const {data: tasks = [], refetch} = useQuery({
      queryKey: ['tasks'],
      queryFn: async() =>{
         const res = await axiosPublic(`${import.meta.env.VITE_API_URL}/tasks/${user.email}`);
         return res.data;
      }
   })
   // console.log(tasks);

   return (
      <div className=" rounded-b-lg mx-auto justify-center">
         <Helmet>
            <title>Tech Digital | Work-Sheet </title>
         </Helmet>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-4  mb-2  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Work Sheet
         </h2>
         <div data-aos="fade-left" data-aos-duration="2000" className="flex justify-center lg:justify-end">
            <div className="w-full p-8 space-y-3 rounded-2xl dark:bg-cyan-50 dark:text-gray-800 border-2 shadow-xl mt-4">
               <form onSubmit={handleWorks} className="justify-around">
                  <div className="flex flex-col lg:flex-row gap-8 justify-around">
                     {/* Tasks */}
                     <div className='space-y-1 w-[250px]'>
                        <label className=" dark-text text-sm p-3 ">Tasks</label>
                        <select name="tasks" className='w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 input-bordered input-success space-y-4'>
                           <option value="Sales" className='text-lg'>Sales</option>
                           <option value="Support" className='text-lg'>Support</option>
                           <option value="Content" className='text-lg'>Content</option>
                           <option value="Paper-work" className='text-lg'>Paper-work</option>
                        </select>
                     </div>
                     {/* Hours */}
                     <div className="space-y-1 text-sm w-[250px]">
                        <label htmlFor="" className="  block dark:text-gray-600">
                           Hours
                        </label>
                        <input
                           type="number"
                           name="hours"
                           placeholder="Hours"
                           className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600  input-warning"
                           required
                        />
                     </div>
                     {/* DatePicker */}
                     <div className="flex flex-col">
                        <p className="mb-1">Select Date</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="rounded-lg h-12" />
                     </div>
                     <div className="flex items-center">
                        <Button type="submit" gradientDuoTone="purpleToBlue" className="btn bg-purple-300 p-1 lg:mr-6 text-center">
                           <span className="text-lg">Submit</span>
                        </Button>
                     </div>
                  </div>
               </form>
            </div>
         </div>

         <div className="overflow-x-auto my-6 border-2 border-purple-200 rounded-md">
            <Table striped>
               <Table.Head className="">
                  <Table.HeadCell className="border-2 border-purple-200 w-10">Sl</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Task</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Hours</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Date</Table.HeadCell>
               </Table.Head>
               <Table.Body className="divide-y">
                  {tasks?.map((task, i)=>(
                     <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                     <Table.Cell className="border border-purple-200">{i+1}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.tasks}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.hours}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.date.slice(0,10)}</Table.Cell>
                  </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </div>
         <ToastContainer />
      </div>
   );
};

export default WorkSheet;