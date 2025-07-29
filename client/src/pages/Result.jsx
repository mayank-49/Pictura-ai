import React, { useState } from 'react'
import {assets} from "../assets/assets"
import {motion} from "framer-motion"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const[image,setImage] = useState(assets.sample_img_1);
  const[isImageLoaded, setIsImageLoaded] = useState(false);
  const[loading, setLoading] = useState(false);
  const[input, setInput] = useState('');

  const {generateImage, theme} = useContext(AppContext);

  const onSubmitHandler = async(e) => {
    e.preventDefault(); 
    setLoading(true);
    
    if(input){
      const image = await generateImage(input);
      if(image){
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
    setInput('');
  }

  return (
    <motion.form onSubmit={onSubmitHandler}
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    action="" className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={image} alt="" className='sm:max-w-sm rounded '/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-5000 ease-linear': 'w-0'}`}/>
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading.......</p>
      </div>

      {!isImageLoaded && 
        <div className='flex w-full max-w-xl bg-white text-black text-sm p-0.5 mt-10 rounded-full border border-gray-300'>
          <input type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20  placeholder:font-medium text-md pr-4' onChange={(e)=> setInput(e.target.value)} value={input}/>
          <motion.button
          whileTap={{scale: 0.95}}
          type="submit" className='bg-zinc-800 px-10 sm:px-16 py-3 rounded-full cursor-pointer text-white' >
            Generate
          </motion.button>
        </div>
      }

      {isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p className={`bg-transparent border  px-8 py-3 rounded-full cursor-pointer ${theme == 'light' ? "border-zinc-900 text-black" : "text-white border-white"}`} onClick={()=> setIsImageLoaded(false)}>Generate Another</p>
          <a href={image} download className='bg-zinc-800 px-10 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }

    </motion.form>
  )
}

export default Result
