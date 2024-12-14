import Contact from "./contact";
import Featured from "./Featured";
import Hero from "./hero";

import Slider from "./slider";
function Home() {
  return (
    <div className="bg-gray-300">
     
      
         <Hero />
       
         <Featured />
         <Slider />
         <Contact />
    
      </div> 
   
  );
}

export default Home;
