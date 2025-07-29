import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {
  const{user, setShowLogin, theme} = useContext(AppContext)
  const navigate = useNavigate();

  const onClickHandler = () =>{
      if(user){
        navigate('/result')
      }else{
        setShowLogin(true)
      }
  }
  
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    className='pb-16 text-center'>
        <h1 className={`text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16 ${theme == 'light' ? "text-neutral-800" : "text-white"}`}>See the maginc. Try now</h1>

        <button onClick={onClickHandler} className={`inline-flex items-center gap-4 px-12 py-3 rounded-full m-auto hover:scale-105 transition-all duration-500 cursor-pointer ${theme == 'light' ? "bg-black text-white" : "text-white bg-white/20 border border-white"}`}>
            Generate image
            <img src={assets.star_group} alt="" className='h-6 animate-pulse '/>
        </button>
    </motion.div>
  )
}

export default GenerateButton
