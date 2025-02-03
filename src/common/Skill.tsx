import CountUp from "react-countup"

import { useInView } from "react-intersection-observer"

import { inView, motion } from "framer-motion"


import { fadeIn } from "../varaints"

import  image  from "../assets/Bg.png"



const  Skill =() => {
  return (
    <div className=" flex place-items-center" id="skill">
      <div className="container mx-auto ">
      <div className=" lg:mx-56 px-4">
            <div >
              <h1 className=" font-serif text-6xl   text-sky-500  font-extralight text-center ">Dear: sir.</h1>
            </div>
        
       
        <div >
          <motion.h2 variants={ fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="text-purple-500  text-4xl font-bold mt-5">Education</motion.h2>
          <motion.div variants={ fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}>
            <h3 className="text-sky-400 my-3 ">2022_2023</h3>
            <p className="font-extralight text-white">Soben hight school</p>
            <p className="text-wrap line-clamp-2 text-white   text-ellipsis italic ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, tempore?</p>
          </motion.div>
          <motion.div variants={ fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mt-5">
            <h3 className="text-sky-400  mb-2">2024_2025</h3>
            <p className="text-white">National Technical Traning Institute of Phnom Penh. </p>
            <p className="text-wrap line-clamp-3 text-ellipsis text-white italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut qui, odit eveniet dolore minus, non dicta amet ullam nesciunt iste maxime aut! In impedit aspernatur illum corrupti explicabo pariatur!</p>
          </motion.div>
          <motion.div variants={ fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="">
            <h1 className="text-4xl text-purple-600 font-bold">Experience</h1>
            <h2 className="mt-3 text-sky-400 mb-3">2022_2023</h2>
            <p className="text-white italic">Studied at hight school. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempora.</p>
          </motion.div>
          <motion.div>
            <h1 className="text-4xl my-3 text-purple-500 font-bold">Language</h1>
            <p className="font-mono font-bold text-white flex  place-items-center"><span>.</span>khmer</p>
            <p className="font-mono font-bold text-white flex  place-items-center"><span>.</span>English</p>

          </motion.div>
        </div>
        </div>

      </div>
      </div>
  )
}

export default Skill