import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Register from "../pages/Login/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import WorkSheet from "../pages/Dashboard/WorkSheet";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import EmployeeList from "../pages/Dashboard/HR/EmployeeList";
import Progress from "../pages/Dashboard/HR/Progress";
import EmployeeDetails from "../pages/Dashboard/HR/EmployeeDetails";
import PrivetRoutes from "./PrivetRoutes";
import AllEmployeeList from "../pages/Dashboard/Admin/AllEmployeeList";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoutes><DashboardLayout></DashboardLayout></PrivetRoutes>,
    children: [
      {
        path: '/dashboard/workSheet',
        element: <WorkSheet></WorkSheet>,
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: '/dashboard/employee-list',
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: '/dashboard/details/:id',
        element: <EmployeeDetails></EmployeeDetails>,
      },
      {
        path: '/dashboard/progress',
        element: <Progress></Progress>,
      },
      {
        path: '/dashboard/allEmployee',
        element: <AllEmployeeList></AllEmployeeList>,
      },
    ]
  }
]);

export default router;