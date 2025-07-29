import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Description = () => {
  const {theme } = useContext(AppContext);

  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className={`mb-8 ${theme == 'light' ? "text-gray-500" : "text-slate-400"}`}>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-88 xl:w-96 rounded-xl'/>
            <div className=''>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className={`mb-4 ${theme == 'light' ? "text-gray-600 " : "text-slate-400"}`}>Easily bring your ideas to life with out free AI image generator. Whether you need stunning visuals or unique imagery, out tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className={`${theme == 'light' ? "text-gray-600 " : "text-slate-400"}`}>Simply type in a text promt, and our cutting-edge AI will generate high quality images in seconds. From products visuals to character designs and portraits, even concepts thta don't yet exits can be visualized effortlessely. Powered by advanced Ai technology, the creativity possiblty are limitless!</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Description
