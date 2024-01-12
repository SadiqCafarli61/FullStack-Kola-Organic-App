import React, { useEffect, useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { CiShoppingCart } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/store/slicers/CartSlice';


const Shop:React.FC = () => {
  const [maxPrice,setMaxPrice] = useState<string>("815")
  const [minPrice,setMinPrice] = useState<string>("15")

  interface shopList {
    id: number,
    url:string,
    name:string,
    price:string,
    category:any
  }

  const [shop,setShop] = useState([])

  const [category,setCategory]  = useState<any>("All")

const filteredCategories = category === "All" ? shop :
shop.filter((product:any) =>product.category === category)


useEffect(() => {
  axios.get("http://localhost:3001/getShop")
  .then((res:any) => {
    setShop(res.data)
    console.log(res.data)
  })

  .catch(error =>console.log(error))
}, [])

useEffect(() => {
setCategory("Fruit")
}, [])

const dispatch = useDispatch()
  return (

    <div className='shop-section d-flex  items-center justify-center flex-column  pt-20'>
            <div className="shop d-flex ">
              <div className="left-side w-[400px]">
              <div className="content">
                   <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Categories</h5>
            </div>

            <div className="links">
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link style={{color: category === "Beans" ? "green" : "gray"}}  onClick={() =>setCategory("Beans")} className=' text-decoration-none  text-md' to=''>Beans</Link>
                </div>
 
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link onClick={() =>setCategory("Fruit")} style={{color: category === "Fruit" ? "green" : "gray"}} className=' text-decoration-none  text-md' to=''>Fruit</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link style={{color: category === "juice" ? "green" : "gray"}} onClick={() =>setCategory("juice")} className=' text-decoration-none  text-md' to=''>Juice</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link onClick={() =>setCategory("Vegetable")} style={{color: category === "Vegetable" ? "green" : "gray"}} className=' text-decoration-none  text-md' to=''>Vegetables</Link>
                </div>
         
            </div>
            <div className="prices pt-12">
              <div className="content">
              <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Price</h5>
              </div>
              <div className="range-input pt-10">
                  <input 
               
                   onChange={(e) =>setMinPrice(e.target.value)}
                   value={minPrice}
                       min='0'
                       max='15'
                  className='w-[150px] text-green-600' type="range" name="" id="" />
                  <input 
                  value={maxPrice}
                  max='815'
                  min='15'
                  onChange={(e) =>setMaxPrice(e.target.value)}
                  className='w-[150px] text-green-600' type="range" />
              </div>
              <div className="text">
                <span className=' text-gray-500 text-lg'>Range: ${minPrice}-</span>
                <span className=' text-gray-500 text-lg'>${maxPrice}</span>
              </div>
            </div>
            <div className="tags pt-12">
                <div className="content">
                <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Tags</h5>
                </div>

                <div className="buttons d-grid  grid-cols-3 gap-3 pt-10">
                     <button>Design</button>
                     <button>Food</button>
                     <button>Fresh</button>
                     <button>Fruit</button>
                     <button>Organic</button>
                </div>
            </div>
              </div>

              <div className="right-side ">
                 <div className="shops d-grid  grid-cols-3">
             {
               filteredCategories.map((item:any,index) => (
                <>
                   <div className="card border-1 rounded-md cursor-pointer mx-4 mt-4 w-[300px] transition-all hover:shadow-lg" key={index}>
 <div className="card__top w-[300px]">
  <img src={item.url} alt="" className='w-[100%] ' />
 </div>
 <div className="cart__body pt-2 text-center">
              <h5 className=' overflow-hidden text-md'>{item.name}</h5>
              <p className=' pt-2 text-green-400 text-xl'>{item.price}</p>
 </div>
 <div className="hover-content">
 <div className="icons d-flex items-center  ">
            <CiShoppingCart  onClick={() =>dispatch(addToCart(item))}  className="icon  " />
            <GrFavorite  className="icon" />  
            </div>
 </div>
                   </div>
                </>
              ))
             }
                 </div>
              </div>
            </div>
    </div>
  )
}

export default Shop