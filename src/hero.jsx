import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="max-w-full  relative">
      <div className=" max-w-full mx-auto  relative ">
        <img src="./image/imghouse.png" alt="heroimg" className="h-[400px] w-full object-cover"></img>
        <motion.div
          className=" absolute p-3  top-24 left-4 md:left-32 "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="ml-0 text-2xl font-bold text-white" variants={textVariants}>
            Breath a new way of living
          </motion.h2>
          <motion.p className=" font-semibold mt-3  text-white" variants={textVariants}>
            Lorem this is the used to provide the text for the dummy text for
            designing the website
          </motion.p>
          <motion.div variants={textVariants} className="mt-3 ">
           <Link to="/allproperty"> <button className=" rounded-full font-bold  bg-white  p-3">Explore Our Property</button></Link>
          </motion.div>
       
          <motion.div
        className="absolute text-white text-xs"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Property Babu
      </motion.div>
        </motion.div>
      </div>
    
      
      
    </div>
  );
};

export default Hero;
