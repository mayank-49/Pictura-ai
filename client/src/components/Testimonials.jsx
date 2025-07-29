import React from 'react'
import {assets,testimonialsData } from '../assets/assets'
import {motion} from "framer-motion"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Testimonials = () => {
    const {theme} = useContext(AppContext);

  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center my-20 py-12'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
        <p className={`mb-12 ${theme == 'light' ? "text-gray-500 " : "text-slate-400"}`}>What Our Users Are Saying</p>

        <div className='flex flex-wrap gap-6 justify-center'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className={`p-10 rounded-lg shadow-md border border-gray-200 w-80 cursor-pointer hover:scale-[1.02] transition-all duration-300 ${theme == 'light' ? "bg-white/20" : "bg-black/40"}`}>
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className='rounded-full w-15'/>
                        <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                        <p className={`mb-4 ${theme == 'light' ? "text-gray-400" : "text-slate-400"}`}>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((item,index)=>(
                                <img key={index} src={assets.rating_star} alt=""/>
                            ))}
                        </div>
                        <p className={`text-center text-sm ${theme == 'light' ? "text-gray-600" : "text-slate-400"}`}>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>

    </motion.div>
  )
}

export default Testimonials
