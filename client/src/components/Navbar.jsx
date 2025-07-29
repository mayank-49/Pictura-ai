import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Navbar = () => {

  const navigate = useNavigate();

  const {user, setShowLogin, logout, credit,theme,setTheme} = useContext(AppContext)

  return (
    <div className="flex items-center justify-between py-4 ">
      <Link className="flex gap-2 items-center justify-center" to="/">
        <img src={assets.logo_icon} alt="" width={35}/>
        <h1 className="text-3xl font-semibold">pictura</h1>
      </Link>

        <div className="flex items-center justify-center gap-2 sm:gap-8">{user ?
            <div className="flex items-center gap-2 sm:gap-3">
                <button className="flex items-center gap-2 bg-white shadow-lg px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer" onClick={()=> navigate('/buy')}>
                    <img src={assets.credit_star} alt="" className="w-5"/>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Credit left : {credit}</p>
                </button>
                <p className={`max-sm:hidden pl-4 ${theme == 'light' ? "text-gray-800" : "text-white"}`}>Hi, {user.name}</p>
                <div className="relative group cursor-pointer ">
                    <img src={assets.profile_icon} alt="" className="w-10 drop-shadow-xl"/>
                    <motion.div
                      whileTap={{scale: 0.9}}
                    className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                        <ul className="list-none m-0 p-2 bg-white rounded-md border border-gray-400 text-sm">
                            <li onClick={()=>{logout(),toast.success("User Logged Out Successfully")}} className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                        </ul>
                    </motion.div>
                </div>
            </div> 
            : 
            <div className="flex items-center gap-2 sm:gap-5">
             <p className="cursor-pointer" onClick={()=> navigate('/buy')}>Pricing</p>   
             <button onClick={()=>setShowLogin(true)} className="bg-black text-white border-2  cursor-pointer px-7 py-2 sm:px-10 text-sm rounded-full">Login</button>
            </div>}

              <img src={`${theme == 'light' ? assets.night_mode : assets.light_mode}`} alt="" width={24} className={` block cursor-pointer ${theme == 'dark' && 'invert-100'}`} onClick={()=> setTheme(`${theme =='light' ? 'dark' : 'light'}`)}/>
        </div>

    </div>
  );
};

export default Navbar;
