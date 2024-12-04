import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tried_sending,set_tried_sending]=useState(false)

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ls9uf6g', 'template_1lhcr6k', formRef.current, {
        publicKey: 'cU5DORv05ezyBwD4J',
      })
      .then(
        () => {
          setSuccess(!success);
        },
        (error) => {
          setError('FAILED...', error.text);
        },
      );
      set_tried_sending(!tried_sending)
  };

  

  return (
    <div id="contact" className="bg-[#161654]">
    <motion.div
      ref={ref}
      className=" max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-white p-2 mx-auto mt-5 flex flex-col justify-start  " variants={variants}>
        <motion.h1 variants={variants} className="text-7xl font-semibold"> Contact</motion.h1>
        <motion.div className="mt-5" variants={variants}>
          <h2 className="text-lg font-semibold">E-mail :</h2>
          <span>akumar@gmail.com</span>
        </motion.div>
        <motion.div className="mt-3" variants={variants}>
          <h2 className="text-lg font-semibold">Address :</h2>
          <span>Chandigarh,Haryana</span>
        </motion.div>
        <motion.div className="mt-3" variants={variants}>
          <h2 className="text-lg font-semibold">Phone :</h2>
          <span>7707031729</span>
        </motion.div>
      </motion.div>
      <div className=" w-5/6  mb-5 mt-7 mx-auto md:w-6/12 ">
        
        <motion.form
          ref={formRef}
           className="flex flex-col gap-2 "
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 4 }}
        >
          <input type="text" className="p-2 rounded-md" required placeholder="Name" name="name"/>
          <input type="email"className="p-2 rounded-md" required placeholder="Email" name="email"/>
          <textarea rows={8} className="p-2 rounded-md" placeholder="Message" name="message"/>
           {tried_sending &&(success ?<p className="text-white">sucessfully send</p>:<p className="text-white">failed to send</p>)}
          <button className="p-2 rounded-md bg-orange-500 text-white font-semibold">Submit</button>
         
        </motion.form>
      </div>
    </motion.div>
    </div>
  );
};

export default Contact;
