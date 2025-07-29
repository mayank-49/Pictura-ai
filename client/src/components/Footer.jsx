import React from 'react'
import {assets} from "../assets/assets"
import {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const {theme} = useContext(AppContext);

  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <div className='flex gap-2'>
          <img src={assets.logo_icon} alt="" width={35}/>
          <h1 className='text-3xl font-semibold'>pictura</h1>
        </div>

        <p className={`flex-1 border-l-2 border-gray-400 pl-4 text-sm max-sm:hidden ${theme == 'light' ? "text-gray-500" : "text-slate-400"}`}>Copyright @Mayank | All right reserved.</p>

        <div className='flex gap-2.5 cursor-pointer'>
            <img src={assets.facebook_icon} alt="" width={35} className={`${theme == 'dark' && 'invert-100'}`}/>
            <img src={assets.twitter_icon} alt="" width={35} className={`${theme == 'dark' && 'invert-100'}`}/>
            <img src={assets.instagram_icon} alt="" width={35} className={`${theme == 'dark' && 'invert-100'}`}/>
        </div>

    </div>
  )
}

export default Footer
