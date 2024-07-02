import Banner from "./Banner";
import BestEmployee from "./BestEmployee";
import FAQ from "./FAQ";
import Services from "./Services";
import Testimonials from "./Testimonials";


const Home = () => {
   return (
      <div>
         <div className="my-8">
            <Banner></Banner>
         </div>
         <Services></Services>
         <Testimonials></Testimonials>
         <BestEmployee></BestEmployee>
         <FAQ></FAQ>
      </div>
   );
};

export default Home;