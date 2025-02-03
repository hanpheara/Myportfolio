import CountUp from "react-countup"

import { useInView } from "react-intersection-observer"

import { inView, motion } from "framer-motion"


import { fadeIn } from "../varaints"

import  image  from "../assets/DV.png"

const Contact = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  })
  return (
    <section className="py-8 lg:py-24 lg:h-screen flex items-center " ref={ref} id="contact">
     <div className="container mx-auto ">
            <div className=" flex flex-col lg:flex-row lg:mx-32">
                <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3}}
                className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top ">
                  <img className="" src={image} alt="hero" />
                </motion.div>
                  
                    <motion.div 
                      variants={fadeIn('left', 0.5)} 
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3}}
                       className="flex-1 px-4 flex-col gap-4">
                          <h2 className="h2 text-purple-600 text-5xl font-bold mb-5">About Me.</h2>
                          <h3 className="font-mono text-white mb-5">Hello dear</h3>
                          <p className="text-white  text-wrap  text-ellipsis  italic">Hello Dear,
                          My name is HAN PHEARA.gender Male, 20 years old, Cambodian nationality, born in khos koksol  village, reamunderk commune, kirivong  district, Takeo province. Currently, I am a second year studying at National Technical Traning Institute of Phnom Penh.</p>
                          <div className=" flex gap-5">
                      <div className="  font-bold text-sky-500">

                        <div className="texx-[40px] text-4xl font-mono ">
                        { 
                          inView? <CountUp start={0} end={15} /> :null}
                          
                        </div>
                        <div className="text-white">
                          years of <br />
                          Ecperience
                        </div>
                      </div>
                      <div className="text-white font-bold ">

                        <div className="texx-[40px] text-4xl text-sky-500 font-bold font-mono ">
                        { 
                          inView? <CountUp start={0} end={14} /> :null}
                          k+
                          
                        </div>
                        <div>
                          Project  <br />
                          Completed
                        </div>
                      </div>
                      <div className=" text-white font-bold">

                        <div className="texx-[40px] text-4xl text-sky-500 font-mono ">
                        { 
                          inView? <CountUp start={0} end={15} /> :null}
                          K+
                          
                        </div>
                        <div>
                          Satisfied <br />
                          Clients
                        </div>
                      </div>
                    </div>
                    <div className="flex  mt-4 "> <button className="btn  btn-secondary mr-3">Contact me</button>
                          <a href="#" className="text-3xl  from-pinkCustom text-purple-600  font-bold">My portfolio</a>
                      </div>
                      </motion.div>
                   
                  </div>
        </div>
    </section>
  )
}

export default Contact