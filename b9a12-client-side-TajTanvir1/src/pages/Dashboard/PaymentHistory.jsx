import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import { Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

   const axiosPublic = useAxiosPublic();

   const { data: payments = [], refetch } = useQuery({
      queryKey: ['payments'],
      queryFn: async () => {
         const res = await axiosPublic(`${import.meta.env.VITE_API_URL}/payments/${user.email}`);
         return res.data;
      }
   })
   // console.log(payments);

   return (
      <div className=" rounded-b-lg mx-auto justify-center">
         <Helmet>
            <title>Tech Digital | Payment History </title>
         </Helmet>
         <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-4  mb-2  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
            Payment History
         </h2>
        

         <div className="overflow-x-auto my-6 border-2 border-purple-200 rounded-md">
            <Table striped>
               <Table.Head className="">
                  <Table.HeadCell className="border-2 border-purple-200 w-10">Sl</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Month</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Amount</Table.HeadCell>
                  <Table.HeadCell className="border-2 border-purple-200">Transaction ID</Table.HeadCell>
               </Table.Head>
               <Table.Body className="divide-y">
                  {payments?.map((payment, i) => (
                     <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="border border-purple-200">{i + 1}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{payment.month}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{payment.amount}</Table.Cell>
                        <Table.Cell className="border border-purple-200">{payment.transactionId}</Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </div>
         <ToastContainer />
      </div>
   );
};

export default PaymentHistory;