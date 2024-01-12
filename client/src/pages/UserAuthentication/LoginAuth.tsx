import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginAuth:React.FC = () => {

    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const handleLogin = async (e:any) => {
        e.preventDefault()
        try {
            const resp = await axios.post("http://localhost:3001/login", {email, password})
        navigate('/')
console.log(resp.data)
window.location.reload()
        } catch (error) {
            console.log(error)
        }
      
    }
    const navigate = useNavigate()

  return (
    <div className=' d-flex  items-center justify-center flex-column  pt-16'>
        <div className="login-container">
            <div className="heading">
                <h5 className=' text-center overflow-hidden '>Login</h5>
            </div>
            <form onSubmit={handleLogin} action="">

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
                <button style={{display: "block", margin: "0 auto"}} type='submit' className=' w-[180px] h-[38px] rounded-md bg-green-500 text-white font-semibold transition-colors hover:bg-green-700'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default LoginAuth