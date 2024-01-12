import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import axios from 'axios';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";




const Header:React.FC = () => {
  const user: any = useContext(userContext);
  console.log(user)

    type linkItems = {
        id: number,
        name: string,
        url: string
    }

    const links: linkItems[] = [
        {
            id: 1,
               name: "HOME",
               url: "/"
        },
        {
          id: 2,
          name: "ABOUT",
          url: "/about"
        },
        {
            id: 3,
            name: "SHOP",
            url:"/shop"
        },
        {
            id: 4,
            name: "BLOG",
            url: "/blog"
        },
        {
            id: 5,
            name: "CONTACT",
            url: "/contact"
        }
    ]

    const handleClick = () => {
if(menuEl.current){
  menuEl.current.classList.toggle("open")
}
    }

    document.addEventListener("click", (e: any) => {
      if(e.target.matches(".open")){
        menuEl.current?.classList.remove("open")
      }
      return () => {
        document.removeEventListener("click", e)
      }
    })

    const navigate = useNavigate()
    
  // const cart = useSelector((state:any) =>state.cart.cart)

    const cartItem = useSelector((state: any) =>state.cart.cart)



    const menuEl = useRef<HTMLDivElement | null>(null);

    const handleLogout = (e:any) => {
      e.preventDefault();
      axios.get("http://localhost:3000/logout")
      .then((res:any) => {
        console.log(res.data)
       window.location.reload()
      })
      .catch(error =>console.log(error))
    }
 
  const [active,setActive] = useState(false)
  const overlayMenu = useRef<HTMLDivElement | null>(null)

  const handleOpen = (e:React.MouseEvent) => {
    e.preventDefault()
    setActive(!active)
    overlayMenu.current?.classList.toggle("aktif")
  }
  return (
    <>
    
  
    <div ref={overlayMenu} className="overlay">
   <div className="overlay-menu">
   {
         links.map(link => (
            <>
              <Link key={link.id} to={link.url}>{link.name}</Link>
            </>
         ))
      }
   </div>
    </div>
    <div className='header-section relative  d-flex  pt-12   items-center justify-around'>
       <div className="logo">
        <img src={logo} className=' object-cover' alt="" />
       </div>
       <div className="links ">
      {
         links.map(link => (
            <>
              <Link key={link.id} to={link.url}>{link.name}</Link>
            </>
         ))
      }
       </div>
       <div className="icons relative  d-flex ">
  <CiSearch className='icon' />

{
  user &&  user.email? (
    <>
    

<div className="user-menu">
  <FaRegUser onClick={handleClick}  className='icon' />
  <div   ref={menuEl} className="menu-items">
    <Link onClick={handleLogout} to=''>Logout</Link>
    <Link to=''>Checkout</Link>
    <Link to=''>WishList</Link>
 
  </div>
  </div>
  </>
  ) : (
    <>
    <div className="user-menu">
  <FaRegUser onClick={handleClick}  className='icon' />
  <div   ref={menuEl} className="menu-items">
    <Link  to='/register'>Register</Link>
    <Link to=''>Checkout</Link>
    <Link to=''>WishList</Link>
 
  </div>
  </div>
    </>
  )
}
  
  
  <CiShoppingCart  onClick={() =>navigate('/carts')}  className='icon ' />
 <span className=' text-green-600 '>{cartItem.length}</span>

       </div>
       <button onClick={handleOpen} className=' barButton cursor-pointer text-3xl mx-4 transition-all'>
{
active  ?
(
  <IoMdClose className=" text-white" />
)   : (
  <FaBars />
)
}
 </button>
    </div>
    </>
  )
}

export default Header