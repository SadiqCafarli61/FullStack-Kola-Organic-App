import React, { useEffect, useState } from 'react'
import './Blog.css'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import post1 from './Recent Posts/post1.jpg'
import post2 from './Recent Posts/post2.jpg'
import post3 from './Recent Posts/post3.jpg'
import post4 from './Recent Posts/post4.jpg'
import axios from 'axios';


const Blog:React.FC = () => {

    const [search,setSearch] = useState<string>("")
    const [blogs,setBlogs] = useState([])
    const [result,setResult] = useState<BlogItem[]>([])

    interface blogItems {
        id: number,
        url: string,
        title: string,
        date: string
    }
    const posts:blogItems[] = [
        {
    id: 1,
    url: post1, 
    title: "Reason Why You Should Choose Organic",
    date:  "May 30, 2018"
        },
        {
            id: 2,
            url: post2,
            title: "Post Format Gallery Blogs Enim",
            date: "April 17,2017"
        },
        {
            id: 3,
            url: post3,
            title: "Post Format Gallery Blogs Libero",
            date: "April 17,2017"
        },
        {
            id: 4,
            url: post4,
            title: "Post Format Video Blogs",
            date: "April 17,2017"
        }
    ]

    useEffect(() => {
axios.get("http://localhost:3001/blogs")
.then((res:any) => {
    
    setBlogs(res.data);
})
.catch(error =>console.log(error))
    }, [])

    interface BlogItem {
        title: any,
        id:number,
        url:any
    }

    const handleChange = (value:any) => {
       const filteredItems: BlogItem[] = blogs.filter((item:BlogItem) => item.title.toLowerCase().includes(value.toLowerCase()))
       if(value === ""){
        setResult([])
       }
       else{
        setResult(filteredItems)
       }
    }

  
 
  return (
    <div className=' blog-section d-flex  items-center justify-center flex-column   pt-20'>
        <div className="blog-main  d-flex  justify-center  gap-6">
              <div className="left-side w-[400px]">
           <div className="input-item d-flex  items-center align-bottom">
            <input
        
            onChange={(e) =>handleChange(e.target.value)}
            placeholder='Search'
             className='w-[200px] h-[38px] rounded-md border-1  outline-none text-gray-500 px-2'
            type="search" name="" id="" />
          
        
            <button type='submit' className=' w-[100px] rounded-md transition-all hover:bg-green-700 h-[38px] bg-green-500 text-white font-semibold'>Search</button>
           </div>
           <div className="categories pt-12">
            <div className="content">
                   <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Categories</h5>
            </div>

            <div className="links">
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link className='text-gray-500 text-decoration-none  text-md' to=''>Fair</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link className='text-gray-500 text-decoration-none  text-md' to=''>Food</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link className='text-gray-500 text-decoration-none  text-md' to=''>Life Style</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link className='text-gray-500 text-decoration-none  text-md' to=''>News</Link>
                </div>
                <div className="link-item d-flex  items-center">
<IoIosArrowForward className=' bg-green-400 text-white cursor-pointer rounded-full' />
<Link className='text-gray-500 text-decoration-none  text-md' to=''>Travel</Link>
                </div>
         
            </div>
            <div className="recent-photos pt-12">
                 <div className="content">
                 <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Recent Posts</h5>
                 </div>
                 <div className="recent-post-data">
                    {
                        posts.map((post, index) => (
                            <>
                            <div className="cart__item" key={index}>
                                <div className="cart-data d-flex  items-center">
                                <div className="image w-[90px] cursor-pointer overflow-hidden">
                                <img src={post.url} alt="" className='w-[100%]' />
                                </div>
                                <div className=" w-[150px] px-3 item-content">
                                    <a style={{paddingTop: index === 0 ? "10px" : ""}} className=' hover:text-green-400 transition-colors text-decoration-none   text-gray-500 text-sm' href="">{post.title}</a>
                                    <div className="item-date">
                                    {post.date}
                                </div>
                                </div>
                                
                                </div>
                               
                              
                               
                            </div>
                            </>
                        ))
                    }
                 </div>
            </div>
            <div className="tags pt-12">
                <div className="content">
                <h5 style={{borderBottom: "2px solid green", borderBottomWidth: '2px', width:'300px'}} className='  overflow-hidden text-black uppercase text-2xl  font-semibold'>Recent Posts</h5>
                </div>

                <div className="buttons d-grid  grid-cols-3 gap-3 pt-10">
                     <button>Design</button>
                     <button>Food</button>
                     <button>Fresh</button>
                     <button>Fruit</button>
                     <button>Organic</button>
                </div>
            </div>
           </div>
              </div>
              <div className="right-side">
                 <div className="blogs">
                    {
                        blogs.map((blog:any, index) => (
                            <>
                            <div className="card border-0 cursor-pointer mx-4 mt-4 w-[700px] h-[900px]" key={index}>
                                   <div className="cart__top w-[700px]">
                                           <img src={blog.url} alt="" className='w-[100%]' />
                                   </div>
                                   <div className="cart__body pt-3">
                                     <h5 className='  hover:text-green-400 transition-colors overflow-hidden text-2xl text-black '>{blog.title}</h5>
                                   </div>
                                   <div className="read-more pt-8">
                                    <Link  to={`/blogs/${blog.id}`} className='  readBtn'>Read More</Link>
                                   </div>
                            </div>
                            </>
                        ))
                    }
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Blog