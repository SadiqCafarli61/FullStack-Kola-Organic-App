import axios from 'axios'
import React, { useState } from 'react'

const ContactUs:React.FC = () => {


    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [phone, setPhone] = useState<number>()
    const [message,setMessage] = useState<string>("")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        axios.post("http://localhost:3001/sendMessage", {name,email,phone,message})
      .then((res: any) => {
        console.log(res.data);
      })

        .catch(error =>console.log(error))
    }
  return (
    <div className='contact-section d-flex  items-center justify-center flex-column  pt-20'>
        <div className="contact-items d-flex">
           <div className="left-side w-[400px] ">
              <div className="heading">
                <strong className=' text-2xl overflow-hidden'>Contact Us</strong>
              </div>
              <div className="info pt-3">
                <div className="text">
                    <h5 className=' text-green-600 overflow-hidden text-md'>Address:</h5>
                </div>
                <div className="add">
                    <p>No 40 Baria Sreet 133/2, New York, USA.</p>
                </div>
              </div>
             <div className="info pt-3">
                <div className="text">
                    <h5 className=' text-green-600 overflow-hidden text-md'>Phone number:</h5>
                </div>
                <div className="add">
                    <p>(+84) 06738383838,(+84) 06738383838</p>
                </div>
              </div>
              <div className="info pt-3">
                <div className="text">
                    <h5 className=' text-green-600 overflow-hidden text-md'>Email:</h5>
                </div>
                <div className="add">
                    <p>@infomail.ru</p>
                </div>
              </div>
           </div>
           <div className="right-side ">
                  <div className="heading">
                    <h5 className=' overflow-hidden text-black font-semibold mx-4 text-2xl'>Keep in touch with us</h5>
                  </div>
                  <form onSubmit={handleSubmit} action="" className=' mt-4'>
                    <div className="input-section d-grid  grid-cols-3">

               
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <br />
                                <input 
                                value={name}
                                onChange={(e) =>setName(e.target.value)}
                                 className='w-[200px] px-2 h-[42px] rounded-lg border-1  border-gray-200  outline-none'
                                type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Email</label>
                                <br />
                                <input 
                                value={email}
                                onChange={(e) =>setEmail(e.target.value)}
                                 className='w-[200px] px-2 h-[42px] rounded-lg border-1  border-gray-200  outline-none'
                                type="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Phone</label>
                                <br />
                                <input 
                                value={phone}
                                onChange={(e) =>setPhone(e.target.valueAsNumber)}
                                 className='w-[200px] px-2 h-[42px] rounded-lg border-1  border-gray-200  outline-none'
                                type="number" />
                            </div>
                            </div>

                            <div className="message-section">
                                <label htmlFor="" className=' mx-4'>Message</label>
                                <br />
                                <textarea
                                value={message}
                                onChange={(e) =>setMessage(e.target.value)}
                                className='w-[600px] mx-3 h-[120px] rounded-lg p-2 outline-none border-1  border-gray-200'
                                name="message" id="" >

                                </textarea>
                                <br />
                                <button type='submit' className=' mx-6 mt-4 text-white font-semibold hover:bg-gray-900 w-[200px] h-[42px] rounded-lg bg-green-500 transition-all'>Send Message</button>
                            </div>
                  </form>
           </div>
        </div>

    </div>
  )
}

export default ContactUs