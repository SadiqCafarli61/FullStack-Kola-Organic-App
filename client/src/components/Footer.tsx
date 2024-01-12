import React from 'react'
import logo from '../assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Footer:React.FC = () => {
  return (
    <div className='footer-section d-flex pt-20 px-10  items-center justify-center flex-column '>
  <div className="footer d-grid gap-4  grid-cols-3">
       <div className="list ">
        <div className="top">
            <img src={logo} alt="" />
        </div>
        <div className="bottom  pt-10">
       <div className="text d-flex  items-center">
        <CiLocationOn className='text-lg text-green-500 ' />
        <span className=' text-xl px-1'>New York,Usa</span>
       </div>
       <div className="text d-flex  items-center">
        <FaPhone className='text-lg text-green-500 ' />
        <span className=' text-xl px-1'>(+994) 055-890-80-72</span>
       </div>
       <div className="text d-flex  items-center">
        <CgMail className='text-lg text-green-500 ' />
        <span className=' text-xl px-1'>sadiqcafarli2020@gmail.com</span>
       </div>
        </div>
       </div>
       <div className="list ">
        <div className="top">
          <h5 className=' overflow-hidden text-2xl uppercase text-black'>Information</h5>
        </div>
        <div className="bottom  pt-10">
       <div className="text d-flex  items-center">
       
        <Link to='' className=' text-decoration-none   text-black  text-xl px-2'>New Products</Link>
       </div>
       <div className="text d-flex  items-center">
     
        <Link to='' className=' text-decoration-none  text-black text-xl px-2'>Our Blog</Link>
       </div>
       <div className="text d-flex  items-center">
       
        <Link to='' className=' text-decoration-none   text-black  text-xl px-2'>About Us</Link>
       </div>
      
        </div>
       </div>
       <div className="list ">
        <div className="top">
          <h5 className=' overflow-hidden text-2xl uppercase text-black'>My Account</h5>
        </div>
        <div className="bottom  pt-10">
       <div className="text d-flex  items-center">
       
        <Link to='' className=' text-decoration-none   text-black  text-xl px-2'>My Account</Link>
       </div>
       <div className="text d-flex  items-center">
     
        <Link to='' className=' text-decoration-none  text-black text-xl px-2'>Checkout</Link>
       </div>
       <div className="text d-flex  items-center">
       
        <Link to='' className=' text-decoration-none   text-black  text-xl px-2'>Validation</Link>
       </div>
      
        </div>
       </div>
  </div>
    </div>
  )
}

export default Footer