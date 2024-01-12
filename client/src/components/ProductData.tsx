import React, { useState } from 'react'
import product from './Products.json'
const ProductData:React.FC = () => {

    const [data, setData] = useState<any>([]
        )
  return (
    <div className='product-data-section d-flex  items-center justify-center flex-column '>
<div className="products d-grid overflow-hidden  grid-cols-2 gap-4">
    {
        product.map((item,index) => (
            <>
            <div className="cart__item cursor-pointer overflow-hidden  " key={index}>
                <img src={item.url} alt=""    />
                </div> 
        </>
        ))
    }
</div>
    </div>
  )
}

export default ProductData