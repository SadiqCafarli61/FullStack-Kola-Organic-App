import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
const Notification:React.FC = () => {

    const [email ,setEmail] = useState<string>("")
    const [message ,setMessage] = useState<string>("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(email === ""){
            setMessage("Please enter a email")
        }
        else{
            setMessage("")
            toast("Sent")
axios.post("http://localhost:3000/sendEmail", {email})
.then(res => {
    console.log(res);
})
.catch(error =>console.log(error))
        }
    }
  return (
    <div className=' notification-email mt-16 d-flex  items-center bg-cover h-[40vh]   pt-12 flex-column '>
      <div className="notify-content text-center">
        <h2 className=' text-white font-semibold text-4xl overflow-hidden'>Get Notified Of any Updates!</h2>

        <p className="pt-6 text-md text-white">
        Subscribe To Our Newsletter To Be Notified About <br /> Promotion
        </p>
      </div>
  <div className="email-sending pt-12">
  <form onSubmit={handleSubmit} action="" className=' '>
  <input 
  value={email}
  onChange={(e) =>setEmail(e.target.value)}
  placeholder='Your email address'
   className='w-[600px] outline-none rounded-xl h-[42px] text-gray-500 px-3'
  type="email" name="" id="" />
  <button type='submit' className=' w-[120px] h-[45px] rounded-lg bg-green-500 text-white font-bold  transition-all hover:bg-green-600'>Sign Up</button>
{message && <div className=' text-red-600 text-center'>{message}</div>}
<ToastContainer />
  </form>
  </div>
 
    </div>
  )
}

export default Notification