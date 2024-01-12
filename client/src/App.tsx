import React, { createContext, useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import FavoriteProducts from './pages/FavoriteLists/FavoriteProducts'
import CartSection from './pages/Cart/CartSection'
import Notification from './components/Notification'
import Contact from './pages/Contact/Contact'
import Authentication from './pages/UserAuthentication/Authentication'
import LoginAuth from './pages/UserAuthentication/LoginAuth'
import axios from 'axios'
import Blog from './pages/Blogs/Blog'
import Shop from './components/Shop/Shops/Shop'
import BlogsComments from './pages/Blogs/BlogsComments'
import Footer from './components/Footer'
import About from './pages/About/About'

export const userContext = createContext({})
axios.defaults.withCredentials  = true

 const  App:React.FC = () => {

  
  const  [users,setUsers] = useState({})
  useEffect(() => {
    axios.get("http://localhost:3000/")
   .then((res: any)  => {
    setUsers(res.data)
   })
   .catch(error =>console.log(error))
  }, [])

  return (
    <>
    <userContext.Provider value={users}>

  
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/favorites' element={<FavoriteProducts />} />
      <Route path='/carts' element={<CartSection />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Authentication />} />
      <Route path='/login' element={<LoginAuth />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blogs/:id' element={<BlogsComments />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
     </Routes>
     <Notification />
     <Footer />
     </BrowserRouter>
     </userContext.Provider>
    </>
  )
}

export default App
