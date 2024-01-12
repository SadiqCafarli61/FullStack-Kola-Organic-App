import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Blog.css'

const BlogsComments:React.FC = () => {

const [data,setData] = useState<any>(null)

useEffect(() => {
    const fetchData =  async () => {
        try {
const response = await axios.get(`http://localhost:3001/blogs/${id}`)
console.log(response.data)
setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
}, [])

    const {id} = useParams()

    const [content,setContent] = useState<string>("")
    const [name,setName] = useState<string>("")


    

    const {blogId} = useParams()

    const handleSendComment = async (e:any) => {
        e.preventDefault();
        try {

            const response  = await axios.post(`http://localhost:3001/blogs/${blogId}`, {content,name})
            console.log(response.data)

      
         
       
          
        } catch (error) {
            console.log(error)
        }
    } 

    const [result,setResult]  = useState<any>([])
  useEffect(() => {
const fecthComments = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/blogs/getComments`)
    setResult(res.data)
  } catch (error) {
    console.log(error)
  }
}
fecthComments()
  }, [])

  return (
    <div className='blog-data-section d-flex items-center justify-center flex-column  pt-20'>
     <div className="blog-data">

       
           {
            data && (
                <>
            <div className="card m-4 shadow-md hover:shadow-green-500 transition-shadow w-[700px] h-[700px]">
  <div className="card__top w-[700px] cursor-pointer">
    <img src={data.url} alt="" className='w-[100%]' />
  </div>
  <div className="card__body text-center pt-2">
    <h5 className=' overflow-hidden text-gray-600 text-2xl'>{data.title}</h5>
  </div>
            </div>
                </>
            )
           }


<div className="comment-data d-flex  items-center justify-center">

  <div className="comments ">

 
{
    result.map((cmt:any,index:number) => (
        <>
      <div className="items d-flex border-1 border-gray-200 rounded-md m-2 p-3  items-center justify-between w-[600px]" key={index}>
        <div className="item-name">
        <h6 className=' overflow-hidden text-gray-500 text-md'>{cmt.name}</h6>
        </div>
        <div className="item-content">
          <p>{cmt.content}</p>
        </div>
   
      </div>
        </>
    ))
}
</div>
</div>


           <div className="comment-section mt-16 d-flex  items-center justify-center flex-column">
            <form onSubmit={handleSendComment} className=' shadow-md m-4' action="">

                <div className="mb-3">
                    <label htmlFor="">Name</label>
                    <br />
                    <input
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                     className='w-[350px] h-[40px] rounded-md border-1 border-gray-600  outline-green-600 px-2 '
                    type="text" />
                </div>
                <div className="mb-3 d-flex  items-center justify-center flex-column ">
                    <label htmlFor="">Send comment</label>
                    <br />
                <textarea 
                  value={content}
                  placeholder='smth...'
                  className='w-[350px] h-[250px] t outline-green-600 border-1  border-gray-600 p-2'
                  onChange={(e) =>setContent(e.target.value)}
                name="" id="" ></textarea>
                </div>

                <button style={{display: "block", margin: "40px auto"}} type='submit' className=' w-[120px] h-[40px] rounded-md text-white bg-green-600  transition-shadow hover:bg-green-700'>Send</button>
               
            </form>
           </div>
     </div>

    </div>
  )
}

export default BlogsComments