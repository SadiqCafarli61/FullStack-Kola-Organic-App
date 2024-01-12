import React, { useEffect, useState } from 'react'

import logo from './logo.png'
import logo1 from './BestSellersLogo/logo1.png'
import logo2 from './BestSellersLogo/logo2.png'
import logo3 from './BestSellersLogo/logo3.png'
import logo4 from './BestSellersLogo/logo4.png'
import axios from 'axios'
import data from './Sellers.json'



const BestSellers:React.FC = () => {

    interface logoItem {
        id: number,
        url: string,
        name: string
    }

    const logos:logoItem[] = [
        {
            id: 1,
            url: logo1,
            name: "All Products"
        },
        {
            id: 2,
            url: logo2,
            name: "Bread"
        },
        {
            id: 3,
            url: logo3,
            name: "Fruit"
        },
        {
            id: 4,
            url: logo4,
            name: "Vegetables"
        }
    ]
    const [category,setCategory] = useState<any>("All")


    const filteredProducts =  category === "All" ? data : 
    data.filter(product =>product.category === category)
    
   

  return (
    <div className='best-sellers d-flex  pt-20 justify-center items-center flex-column '>
<div className="content text-center">
<h5 className=' overflow-hidden text-3xl font-bold'>Best Sellers</h5>
<div className="logo pt-2">
    <img src={logo} alt="" />
</div>
</div>
<div className="sellers-logo pt-10 d-grid  grid-cols-4 gap-4">
    
        {
            logos.map((logo, index) => (
                <>
                <div className="logos  d-flex   items-center flex-column  justify-center" key={index}>
                <img className=' cursor-pointer' src={logo.url} alt="" />
                <a  href='' className=' text-decoration-none  text-gray-500 hover:text-green-600 transition-colors text-lg'>{logo.name}</a>
                </div>
             
                </>
            ))
        }
    
</div>

<div className="product-data pt-10 d-grid  grid-cols-4">
    {
        filteredProducts.map((product,index) => (
            <>
            <div className="card w-[300px] h-[450px] cursor-pointer  hover:shadow-md m-3" key={index}>
                  <div className="card__top w-[300px]">
                    <img src={product.url} alt="" className='w-[100%]' />
                  </div>
                  <div className="card__body pt-2 text-center">
                         <h5 className=' overflow-hidden text-2xl'>{product.name}</h5>
                         <p className=' text-green-500 text-md pt-2'>{product.price}</p>
                  </div>
            </div>
            </>
        ))
    }
</div>
    </div>
  )
}

export default BestSellers