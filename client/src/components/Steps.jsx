import React from 'react'
import { stepsData } from '../assets/assets'
import {motion} from "framer-motion"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Steps = () => {
    const {theme} = useContext(AppContext);

  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
        <p className={`text-lg mb-8 ${theme == 'light' ? "text-gray-600" : "text-slate-400"}`}>Tranform Words Into Stunning Images</p>

        <div className='space-y-4 w-full max-w-3xl text-sm'>
            {stepsData.map((item,index)=>(
                <div key={index} className={`flex items-center gap-4 p-5 px-8 shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg ${theme == 'light' ? "bg-white/20" : "bg-black/40"}`}>
                    <img src={item.icon} alt="" width={40}/>
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className={`${theme == 'light' ? "text-gray-500" : "text-slate-400"}`}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    </motion.div>
  )
}

export default Steps
