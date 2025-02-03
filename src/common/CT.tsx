import React from 'react'

import {motion} from 'framer-motion' 

import { fadeIn } from '../varaints'

const CT =()=> {
  return (
    <section className='py-16 lg:mx-32' id='CT'>

            <div className="container mx-auto">
                <div className=' flex flex-col lg:flex-row px-4'>
                    <motion.div
                    variants={fadeIn('right', 0.5)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3}}
                     className='flex justify-start items-center  lg:pr-5'>
                        <div className='flex-1 px-4 '> 
                            <h1 className='text-2xl uppercase text-purple-500 mb-2 tracking-wide'>Get in touch</h1>
                            <h2 className='txet-[45px] lg:text-[90px] leading-none mb-12 text-white'>Let's work <br />together!</h2>
                        </div>
                    </motion.div>
                    <motion.form variants={fadeIn('left', 0.5)} 
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3}} className=' flex-1 border items-end   rounded-2xl flex flex-col gap-y-6  pb-24 p-6'>
                    
                            <input type="text" className='bg-transparent  border-b py-3 outline-none w-full placeholder:text-white focus:border-pink-500 transition-all text-white italic' placeholder='Your name' typeof='text'  />
                            <input type="text" className='bg-transparent  border-b py-3 outline-none w-full placeholder:text-white focus:border-pink-500 transition-all text-white italic' placeholder='Your name' typeof='text'  />
                            <textarea name="" className='bg-transparent  border-b py-3 outline-none w-full placeholder:text-white focus:border-pink-500 transition-all resize-none mb-12' placeholder='Your message' id=""></textarea>
                            <button className='btn btn-success'>Send Message</button>
                    </motion.form>
                </div>
                   
            </div>

    </section>
  )
}

export default CT