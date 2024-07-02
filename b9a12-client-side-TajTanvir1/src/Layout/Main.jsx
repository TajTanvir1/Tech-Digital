import { Outlet } from "react-router-dom";
import NavBar from "../pages/shahed/NavBar";
import FooterTD from "../pages/shahed/FooterTD";

const Main = () => {
   return (
      <div>
         <NavBar></NavBar>
         <div className="min-h-[calc(100vh-345px)]">
            <Outlet></Outlet>
         </div>
         <FooterTD></FooterTD>
      </div>
   );
};

export default Main;