import React, { useContext } from 'react'
import {Bounce, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin,theme} = useContext(AppContext);
  return (
    <div className={`px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen ${theme == 'light' ? "bg-gradient-to-r from-teal-100 to-orange-100" : "bg-gradient-to-r from-black via-blue-900 to-black text-white"} : `}>
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar={true} transition={Bounce} theme={theme}/>
      <Navbar/>
      {showLogin &&
        <Login/>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
