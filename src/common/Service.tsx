import  image  from "../assets/DV.png"

import { motion } from "framer-motion";

import { fadeIn } from "../varaints";
const  Service = () =>  {
  return (
    <div className="py-8 lg:py-24 lg:h-screen flex items-center " id="service">

      <div className="container mx-auto">
      <h1 className="text-center font-serif   text-6xl  text-sky-400 mb-12">My skill
</h1>
        <div className=" flex flex-col lg:flex-row ">
        <motion.div variants={ fadeIn('down', 0.3)} initial="hidden" whileInView={'show'}  className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]">
          <img className="" src={image} alt="banner" />
        </motion.div>
          <div className="font-serif text-teal-300 ring-2 lg:mx-32  mx-4 px-4 ">
           
           <h1>HTML</h1>
            <progress className="progress  progress-info w-56" value="90" max="100"></progress><span className=" font-serif text-sky-400">90%</span>
            <h1>CSS</h1>
            <progress className="progress  progress-info w-56" value="80" max="100"></progress><span className="font-serif text-sky-400">80%</span>
            <h1>Javascript</h1>
            <progress className="progress  progress-info w-56" value="50" max="100"></progress><span className="font-serif text-sky-400">50%</span>
            <h1>React js</h1>
            <progress className="progress  progress-info w-56" value="30" max="100"></progress><span className="font-serif text-sky-400">30%</span>
          </div>
        </div>
          
      </div>

    </div>
  )
}

export default Service