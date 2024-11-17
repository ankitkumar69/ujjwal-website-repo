import { motion } from "framer-motion";

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
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="max-w-full h-[400px] bg-blue-400">
      <div className=" max-w-full mx-auto my-[-6px] relative ">
        <img src="./image/imghouse.png" alt="heroimg" className="h-[400px] w-full object-cover"></img>
        <motion.div
          className=" absolute top-24 left-40"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="mt-4 text-2xl font-bold text-white" variants={textVariants}>
            Breath a new way of living
          </motion.h2>
          <motion.p className="mt-4 font-semibold text-white" variants={textVariants}>
            Lorem this is the used to provide the text for the dummy text for
            designing the website
          </motion.p>
          <motion.div variants={textVariants} className="">
            <button className=" rounded mt-7 bg-white  p-3">Explore Our Property</button>
          </motion.div>
          <motion.div variants={textVariants} className="mt-4 ">
            <motion.button className="mt-4 text-blue-600 font-semibold mx-2" variants={textVariants}>
              Best Deal
            </motion.button>
            <motion.button variants={textVariants} className="text-blue-600 font-semibold">Contact Us</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Property Babu
      </motion.div>
      
      <div className="">
        <img src="/man.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
