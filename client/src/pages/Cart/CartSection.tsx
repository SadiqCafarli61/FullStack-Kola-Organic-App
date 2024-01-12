import React, { useEffect, useRef, useState } from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { IoIosArrowUp } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import { FaPlus } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
const CartSection:React.FC = () => {
 
interface CardItem {
    id: number,
    url: string,
    price: number,
    name: string
}
const [increase, setIncrease] = useState<number>(0)
const [decrease, setDecrease] = useState<number>(0)
const [couponCode, setCouponCode] = useState<any>()
const [error, setError] = useState<string>("")
const [selectCountry,setSelectCountry] = useState<any>("")
const  [state,setState] = useState<string>("")
const  [city,setCity] = useState<string>("")
const  [zip, setZip] = useState<number>()


const handleIncrease =  () => {
    setIncrease(increase + 1)
}
const handleDecrease = () => {
    setDecrease(decrease - 1)
}
const [active,setActive] = useState<boolean>(false)

    const carts = useSelector((state:any) =>state.cart.cart)
    console.log(carts)
 
    
  
   
    const totalAmount = carts.reduce((accumulate: number, item: any) => {
      return accumulate +  item.price
    }, 0)
  

    const handleSubmit = (e: any) => {
      e.preventDefault()
      if (!couponCode || couponCode === ""){
        setError("Plrase   enter a  coupon code")
      }
      else{
        setError("")
        toast("sent")
      }
    } 

    const countries = [
      {
        id: 1,
        name: "Russia"
      },
      {
        id: 2,
        name: "Usa"
      },
      {
        id: 3,
        name: "Georgia"
      },
      {
        id: 4,
        name: "Brasil"
      },
      {
        id: 5,
        name: "India"
      },
      {
        id: 6,
        name: "Japan"
      },
      {
        id: 7,
        name: "China"
      }
    ]

   
    const addressForm:any = useRef()

    const handleChange  = (e:any) => {
      e.preventDefault()
      addressForm.current.classList.toggle("aktiv")
    }
    const [data,setData] = useState<any>([])
    const [result,setResult] = useState<any>([])

    const handleUpdate = async (e:any) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:3001/sendPostal", {state, city, zip})
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
axios.get("http://localhost:3001/getPostal")
.then((res: any) => {
  setResult(res.data)
  console.log(res.data)
})
.catch(error =>console.log(error))
    }, [])

  return (
    <>
    
  
    <div className=' cart-section d-flex pt-16  items-center justify-center flex-column  mt-12'>

        <div className="product-cart border-1 p-5 w-[900px]   h-[auto] justify-center flex-column    ">
            <div className="cart__text d-grid border-1 border-gray-100 p-2  grid-cols-5">
                <div className="text ">
                    
                </div>

                
                <h5 className=' overflow-hidden text-md text-gray-500'>Product</h5>
                  
                    <h5 className=' overflow-hidden text-md text-gray-500'>Price</h5>
                    <h5 className=' overflow-hidden text-md text-gray-500'>Quantity</h5>
             
                    <h5 className=' overflow-hidden text-md text-gray-500'>Subtotal</h5>
                
            </div>
        {carts.map((cart: CardItem  ) => (
        
          cart && (
            <div className="cart__products w-[100%] border-1 border-gray-100 p-2 " key={cart.id}>
                 <div className="cart d-flex  ">
                    <div className="cart__heading mt-4 d-flex  items-center  w-[165px]">
                        <img src={cart.url} className='w-[90px] cursor-pointer' alt="" />
                    </div>
                    <div className=" w-[140px] d-flex  items-center   cart__name">
                        <p className=' text-sm '>{cart.name}</p>
                    </div>
                    <div className=" w-[120px] d-flex  items-center  cart__price">
                        <p>{cart.price}</p>
                    </div>
                    <div className=" W-[20px] d-flex  items-center pb-3 cart__quantity">
                         <div className="quantity  d-flex items-center ">
                            <IoIosArrowUp onClick={handleIncrease} className=" cursor-pointer text-lg" />
                            <div className="text w-[50px] h-[50px] border-1 mx-3  text-center pt-1  d-flex  items-center justify-center border-gray-200">
                               <span className=' text-green-500 text-md '>{increase}</span>
                             </div>
                              
                             <div className="text w-[50px] h-[50px] border-1  text-center pt-1  d-flex  items-center justify-center border-gray-200">
                               <span className=' text-green-500 text-md '>{decrease}</span>
                             </div>
                             <IoIosArrowDown onClick={handleDecrease} className=" text-md cursor-pointer mx-2"/>
                         </div>
                        
                        
                    </div>
                    
                  
                 </div>
               
            </div> 

            
          )
        ))}
          <div className="coupon-section d-flex   items-center mt-3">
     
                       
                         <input 
                         value={couponCode}
                         onChange={(e) =>setCouponCode(e.target.value)}
                         className='w-[170px] h-[38px] border-gray-100 border-1 outline border-1 rounded-md p-1  m-2'
                         placeholder='Coupon code'
                         type="number" />
              

                         <button onClick={handleSubmit} className=' w-[160px] h-[38px] rounded-xl text-white font-semibold bg-green-400 transition-colors hover:bg-green-700'>Apply Coupon</button>

                    </div> {error && <div className=' text-red-500 text-md  px-2'>{error}</div>} 
                    <ToastContainer />
        </div>

        

    </div>
    <div className="total-cart-section pt-20 d-flex  items-center justify-center flex-column ">
           <div className="total-content">
            <h5 className=' overflow-hidden'>Cart Totals</h5>
           </div>
           <div className="total-products w-[1000px] border-gray-200 p-2 border-1">
            <div className="total-product d-flex  justify-between">
              <div className="text-content border-1 border-gray-100 w-[250px]">
                <p className=' p-2'>Subtotal</p>
              </div>
              <div className="text-price p-2 border-1 w-[500px]  text-center border-gray-200 ">
                  {totalAmount}
              </div>
            </div>
            <div className="total-product d-flex  justify-between">
              <div className="text-content border-1  border-gray-200 w-[250px]">
                <p className=' p-2'>Shipping</p>
              </div>
              <div className="text-price border-1  d-flex  items-center justify-center border-gray-200 p-2 w-[500px]">
                   <div className="radios d-flex flex-column   items-center  ">
                    <div className="radio d-flex  align-bottom  items-center">
                    <input type="radio" name="" id="" />
                    <label className=' px-3' htmlFor="">Free shipping</label>    
                    </div>
                    <div className="radio d-flex  align-bottom  items-center">
                    <input type="radio" name="" id="" />
                    <label className=' px-3' htmlFor="">Flat rate</label>    
                    </div>
                    <div className="radio d-flex  align-bottom  items-center">
                    <input type="radio" name="" id="" />
                    <label className=' px-3' htmlFor="">Free shopping</label>    
                    </div>
                    <div className="radio d-flex  align-bottom  items-center">
                    <input type="radio" name="" id="" />
                    <label className=' px-3' htmlFor="">Flat rate</label>    
                    </div>
                    <div className="radio d-flex  align-bottom  items-center">
                 
                         {
                          result.length ? (
                            <>
                             <label htmlFor="">Shipping to {result[0].state}</label>
                            </>
                          ) : (
                            <>
                             <label htmlFor="">Shipping to Azerbaijan</label>
                            </>
                          )
                         }
                 
                    </div>
                    <div className="address d-flex pt-3  items-center">
                    <FaPlus className="text-green-500 mt-2" />
                    <a href="" className=' pt-2 text-green-500 px-1 cursor-pointer text-decoration-none ' onClick={handleChange}>Change Address </a>
                    </div>
                    <div ref={addressForm} className="address-form ">
                       <form action="">
                        <select 
                        className='w-[400px] border-1 p-2  border-gray-200 cursor-pointer  h-[auto]'
                        value={selectCountry} onChange={(e) =>setSelectCountry(e.target.value)} name="" id="">
                          <option value="Azerbaijan">Azerbaijan</option>
{
  countries.map(ctr => (
    <option value={ctr.name} id='{ctr.id}'>{ctr.name}</option>
  ))
}
                        </select>

                         <div className="input-section d-flex flex-column   items-center   mt-3">
                          <div className="mb-3">
                          <input 
           value={state}
           placeholder='State/Country'
           onChange={(e) =>setState(e.target.value)}
className='w-[400px] h-[38px] border-gray-200 p-2 border-1 outline-none'
type="text" />
                          </div>
                          <div className="mb-3">
                          <input 
           value={city}
           placeholder='City'
           onChange={(e) =>setCity(e.target.value)}
className='w-[400px] h-[38px] border-gray-200 p-2 border-1 outline-none'
type="text" />
                          </div>
                          <input 
           value={zip}
           placeholder='ZIP/Postal Code'
           onChange={(e) =>setZip(e.target.valueAsNumber)}
className='w-[400px] h-[38px] border-gray-200 p-2 border-1 outline-none'
type="number" />
<button onClick={handleUpdate} className=' w-[100px] h-[36px] mt-4 rounded-xl bg-green-500 transition-all hover:bg-green-700 text-white font-bold text-md'>Update</button>
                        
                         </div>
                       </form>
                    </div>
                
                  
                   
                   </div>
              </div>
             
            </div>
            
           </div>
          
        </div>
        <button style={{display: "block", margin: "40px auto"}} className=' w-[200px]  h-[38px] rounded-lg bg-green-500 transition-all hover:bg-green-700 text-white uppercase text-md'>Proceed to checkout</button>
    </>
  )
}

export default CartSection