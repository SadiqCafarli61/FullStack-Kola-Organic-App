import React, { useEffect, useState } from 'react'

import data from './Featuredproducts.json'
import { CiShoppingCart } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store/slicers/CartSlice';


const FeaturedProducts:React.FC = () => {


  const [category, setCategory] = useState("latest")


  const filteredCategories = category === "latest" ? data :

data.filter(product =>product.category === category)
 

useEffect(() => {
setCategory("latest")
}, [])


const dispatch = useDispatch()


  return (

  
    <div className='featured-section d-flex mt-12 flex-column   items-center justify-center'>
      <div className="content text-center">
        <h5 className=' text-black font-bold text-3xl overflow-hidden'>Featured Products</h5>
      </div>

      <div className="button-items pt-16">
          <button style={{color: category === "latest" ? "green" : ""}} onClick={() =>setCategory("latest")} className=' text-xl'>Latest</button>
          <button style={{color: category === "Top Rating" ? "green" : ""}} onClick={() =>setCategory("Top Rating")} className=' text-xl mx-4'>Top rating</button>
          <button style={{color: category === "Best Sellers" ? "green" : ""}} onClick={() =>setCategory("Best Sellers")} className=' text-xl mx-4'>Best Sellers</button>
          <button className=' text-xl mx-4'>Featured</button>
      </div>
      <div className="product-data pt-12 d-grid   grid-cols-4 gap-4">
     {
      filteredCategories.map(item => (
        <>
         <div className="card transition-al relativel hover:shadow-xl m-4 cursor-pointer w-[300px] h-[400px]" key={item.id}>
                 <div className="card__top">
                  <img src={item.url} alt="" />
                 </div>
                 <div className=" text-center pt-3 card__body">
           <h5 className=' overflow-hidden text-md'>{item.name}</h5>
           <div className="price pt-3">
              <p className=' text-green-600  text-xl'>{item.price}</p>
           </div>
           <div className="stars d-flex  items-center  justify-center pb-3">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
           </div>
           <div className="hover-content d-none ">
            <div className="icons d-flex  ">
            <CiShoppingCart onClick={() =>dispatch(addToCart(item))}  className="icon  " />
            <GrFavorite  className="icon" />  
            </div>
            
           </div>
                 </div>
            </div>
        </>
      ))
     }
      </div>
    </div>
  )
}

export default FeaturedProducts