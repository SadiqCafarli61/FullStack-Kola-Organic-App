import React, { useState } from 'react'
import './Authentication.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Authentication:React.FC = () => {

    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [file,setFile] = useState<any>("")
    const [password,setPassword] = useState<any>("")

    const [nameError,setNameError] = useState<string>("")
    const [error,setError] = useState<string>("")

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      if(name === "" || email === "" || password === "" || file === ""){
        setError("All fields are required.")
      }
      else if (password.length <=7 || name.length <=3){
        setNameError("Username should be more than 4 characters.")
        setError("Password must be at least 8 characters long.")
      }
      else{
        setError("")
        const formData = new FormData()
        formData.append("name", name),
        formData.append("email", email),
        formData.append("password", password),
        formData.append("file", file)
       const res =  await axios.post("http://localhost:3001/register", formData)
       navigate("/login")
       console.log(res.data);
      }
        
        
    } catch (error) {
        console.log(error)
    }
  }

  const navigate = useNavigate()
  return (
    <div className=' register-section d-flex  items-center justify-center flex-column  pt-12'>
             <div className="register">
                
                <div className="authentication mt-12">
                <div className="content">
                    <h2  className=' overflow-hidden pb-0.5 text-center '>Register</h2>
                </div>
                    <form onSubmit={handleSubmit} className=' m-8  h-[600px] w-[600px] shadow-md  shadow-red-400 d-flex  items-center justify-center flex-column ' action="">
                           <div className="mb-3">
                            <label htmlFor="">Name</label>
                            <br />
                            <input 
                            value={name}
                            onChange={(e) =>setName(e.target.value)}
                             className='w-[250px] h-[42px] outline-none border-1  border-gray-300 rounded-md  px-2'
                            type="text" />
                            {nameError && <div className=' text-red-600'>{nameError}</div>}
                           </div>
                           <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <br />
                            <input 
                            value={email}
                            onChange={(e) =>setEmail(e.target.value)}
                            type='email'
                             className='w-[250px] h-[42px] outline-none border-1  border-gray-300 rounded-md  px-2'
                             />
                           </div>
                           <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <br />
                            <input 
                            value={password}
                            onChange={(e) =>setPassword(e.target.value)}
                            type='password'
                             className='w-[250px] h-[42px] outline-none border-1  border-gray-300 rounded-md  px-2'
                             />
                           </div>
                           <div className="mb-3">
                            <label htmlFor="">Profile Photo</label>
                            <br />
                            <input 
                         name='file'
                         onChange={(e) =>setFile(e.target.files && e.target.files[0])}
                            type='file'
                             className='w-[250px] pt-1 h-[42px] outline-none border-1  border-gray-300 rounded-md  px-2'
                             />
                           </div>

                           <button type='submit' className=' w-[180px] h-[38px] rounded-md bg-green-500 text-white font-semibold transition-colors hover:bg-green-700'>Register</button>
                           <Link to='/login'>Already have an acccount?</Link>
                           {error && <div className=' text-red-600'>{error}</div>}
                    </form>
                </div>
             </div>
    </div>
  )
}

export default Authentication