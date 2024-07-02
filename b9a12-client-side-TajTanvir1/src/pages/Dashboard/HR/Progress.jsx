import { Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Progress = () => {

   const axiosPublic = useAxiosPublic();
   const { data: tasks = [] } = useQuery({
      queryKey: ['tasks'],
      queryFn: async () => {
         const res = await axiosPublic(`${import.meta.env.VITE_API_URL}/tasks`);
         return res.data;
      }
   })
   // console.log(tasks);

   return (
      <div>
         <Helmet>
            <title>Tech Digital | Progress</title>
         </Helmet>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-4  mb-2  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
           Progress
         </h2>
         <div className="overflow-x-auto my-6 border-2 border-purple-200 rounded-md">
            <Table striped>
               <Table.Head className="text-center">
                  <Table.HeadCell className="border-2 border-purple-200 w-10">Sl</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Name</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Task</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Hours</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Date</Table.HeadCell>
               </Table.Head>
               <Table.Body className="divide-y text-center">
                  {tasks?.map((task, i)=>(
                     <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                     <Table.Cell className="border border-purple-200">{i+1}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.name}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.tasks}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.hours}</Table.Cell>
                     <Table.Cell className="border border-purple-200">{task.date.slice(0,10)}</Table.Cell>
                  </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </div>
      </div>
   );
};

export default Progress;