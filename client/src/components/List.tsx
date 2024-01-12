import React from 'react'

const List:React.FC = () => {

    type dataList = {
        id: number,
        name: string,
        price: string,
        url: string
    }
    const productData :dataList[] = [
        {
            id: 1,
            name: "Lemon",
            price: "$90.00",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704363038/product6_ctljqw.jpg"
        },
        {
            id: 1,
            name: "Passion Fruit",
            price: "$60.00",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704363038/product8_um15bo.jpg"
        },
        {
            id: 3,
            name: "Grapes",
            price: "$155.00",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704364676/grapes_qfcmh5.jpg"
        },
        {
            id: 4,
            name: "Salad",
            price: "$21.00",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704364666/salad_y9gpgy.jpg"
        }
    ]

    const compareProductPrice = productData.sort((a: dataList, b: dataList) => {
        const priceA = parseFloat(a.price.replace("$", ""))
        const priceB = parseFloat(b.price.replace("$", ""))

        if(priceA < priceB){
            return -1;
        }
        else{
            return 1;
        }
    })
  return (
    <div className='list-section d-flex mt-[-130px]  items-center justify-center flex-column '>

   <div className="list-data d-grid  grid-cols-4 gap-3">
{
    compareProductPrice.map((item,index) => (
        <>
        <div className="card w-[300px] h-[400px] cursor-pointer transition-all hover:shadow-xl m-4" key={index}>
<div className="card__top">
   <img src={item.url} alt="" />
</div>
<div className="card__body pt-3 text-center">
    <h5 className=' overflow-hidden text-md text-black'>{item.name}</h5>
</div>
<div className=" text-center pt-3 text-price">
<p className=' text-green-600  text-xl'>{item.price}</p>
</div>
        </div>
        </>
    ))
}
   </div>
    </div>
  )
}

export default List