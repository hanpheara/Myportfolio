
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type Animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../varaints";
import Banner from "../assets/DV.png";

const Header = () => {
  return (
    <section
      className="  "
      id="header"
    >
    <div className="container mx-auto  ">
      <div className="lg:flex-row flex lg:mx-32 flex-col lg:items-center lg:gap-x-12 ">
        {/*text*/}
        <div className=" flex-1 text-center font-mono lg:text-left">
        <motion.h1 variants={ fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="font-mono font-bold text-4xl  text-pink-400 mb-"> HAN PHEARA<span className="mr-4"></span>
         </motion.h1>
          <motion.div variants={ fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb-6 text-[36px] lg:text-[45px] font-mono font-extrabold uppercase leading-[1]">
          <span className="text-white">I am a </span>
            <TypeAnimation sequence={[
                'developer',
                2000,
                'designer',
                2000,

            ]}
              speed={50}
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text font-bold "
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
            <motion.p variants={ fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}
             className="mb-4 max-w-lg mx-auto lg:mx-0 text-white font-mono  font-bold text-wrap line-clamp-3  italic ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, perferendis quos! Ad, quasi.
             
            </motion.p>
            <motion.div variants={ fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>
              <button className="btn btn-md bg-sky-50btn btn-secondary rounded-2xl mb-5 mr-5">contact me</button>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text font-bold ">My Portfolio</a>
            </motion.div>
            {/*icon*/}
            <motion.div variants={ fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex  items-center text-[30px] gap-x-6 max-w-max mx-auto  lg:mx-0">
                <a href="#"><FaGithub/></a>
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaDribbble/></a>
            </motion.div>
        </div>
         {/*image*/}
        <motion.div variants={ fadeIn('down', 0.3)} initial="hidden" whileInView={'show'}  className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]">
          <img className="" src={Banner} alt="banner" />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Header;
