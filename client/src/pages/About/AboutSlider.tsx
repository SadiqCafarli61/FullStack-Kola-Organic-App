import React, { useEffect, useState } from 'react'
import slider1 from './Sliders/slider1.jpg'
import slider2 from './Sliders/slider2.jpg'
import slider3 from './Sliders/slider3.jpg'
import Aos from 'aos'
import save1 from './saves/save1.png'
import save2 from './saves/save2.png'
import save3 from './saves/save3.png'
import save4 from './saves/save4.png'

const AboutSlider:React.FC = () => {

    type OrganicData = {
        id:number,
        title: string,
        content: string,
        text: string,
        url: string
    }
    const data:OrganicData[] = [
        {
            id: 1,
            title: 'Organic Food',
            content: "From Nature in the Store",
            text: "Sale of to 50% all Products",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704912034/slider1_g7iihf.jpg"
        },
        {
            id: 2,
            title: 'Organic Food',
            content: "Natural Fresh",
            text: "Organic fruits are rich in vitamins",
            url : slider2

        },
        {
            id: 3,
            title: "Organic Food",
            content: "From Nature in the Store",
            text: "Sale of to 50% all Products",
            url: slider3
        }
    ]

    const [currentSlide,setCurrentSlide] = useState<number>(0)

    const handlePrev = (e:React.MouseEvent) => {
        if(currentSlide === 0){
            setCurrentSlide(data.length - 1)
        }
        else{
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleNext = (e:React.MouseEvent) => {
        e.preventDefault()
        if(currentSlide === data.length - 1){
            setCurrentSlide(0)
        }
        else{
            setCurrentSlide(currentSlide + 1)
        }
    }
    const handleSecond = (e:React.MouseEvent) => {
        e.preventDefault()
        setCurrentSlide(1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext(null)
        }, 2500)
        return () => {
            clearInterval(timer)
        }
    }, [handleNext])

    useEffect(() => {
        Aos.init()
    })
  return (
    <div 
    className='about-slider d-flex  items-center justify-center flex-column   pt-20'>
  <div

   style={{
   backgroundImage: ` url(${data[currentSlide].url})`
   }}
  className=" d-flex   items-center justify-center flex-column h-[600px]  bg-center slider bg-cover w-[1300px] ">
   
<div 
   data-aos="fade-left"
className="content-heading  relative d-fle left-[-10%]">
    <div className="content mt-2">
        <h5 className=' overflow-hidden text-2xl text-white'>{data[currentSlide].title}</h5>
    </div>
    <div className="content mt-2">
        <h2 className=' overflow-hidden text-5xl text-white font-semibold max-w-sm'>{data[currentSlide].content}</h2>
    </div>
    <div className="content">
        <p className=' overflow-hidden text-xl text-white font-semibold'>{data[currentSlide].text}</p>
    </div>
    <div className="button mt-10">
        <button className='w-[150px] rounded-xl text-white h-[43px] bg-green-500 uppercase hover:bg-green-600 transition-colors'>shop now</button>
    </div>
</div>
<div className="points d-flex  items-center ">
    <span
    style={{
        backgroundColor: currentSlide === 0 ? "green" : "white"
    }}
    onClick={handlePrev} className=' border-1 rounded-full w-[20px] d-flex  items-center cursor-pointer mt-20 justify-center h-[20px]  border-green-500'></span>
    <span
    style={{backgroundColor: currentSlide === 1 ? "green" : "white"}}
    onClick={handleSecond} className=' border-1 mx-2 rounded-full w-[20px] d-flex  items-center cursor-pointer mt-20 justify-center h-[20px] border-green-500'></span>
    <span
    style={{backgroundColor: currentSlide === data.length - 1 ? "green" : "white"}}
    onClick={handleNext}  className=' border-1 rounded-full w-[20px] d-flex  items-center cursor-pointer mt-20 justify-center h-[20px]  border-green-500'></span>
  </div>
  </div>

  <div className="saved d-grid gap-4  grid-cols-4 pt-12">
    <div className="save  justify-center d-flex bg-orange-100 rounded-md p-2 mr-4  items-center">
          <div className="image">
            <img src={save1} alt="" />
          </div>
          <div className="content d-flex  mr-4 pt-2  flex-column ">
              <h5 className=' overflow-hidden text-lg'>Free Shipping</h5>
              <p>On orders over $80</p>
          </div>
    </div>
    <div className="save  d-flex bg-green-200 rounded-md p-2 mr-4  items-center ">
          <div className="image">
            <img src={save2} alt="" />
          </div>
          <div className="content d-flex mr-3 pt-2   flex-column ">
              <h5 className=' overflow-hidden text-lg'>Special Sale</h5>
              <p>Extra $9 off all items</p>
          </div>
    </div>
    <div className="save d-flex  bg-orange-200 rounded-md mr-4 p-2 items-center">
          <div className="image">
            <img src={save3} alt="" />
          </div>
          <div className="content d-flex mr-4 pt-2   flex-column ">
              <h5 className=' overflow-hidden text-lg'>Save Money</h5>
              <p>30 Days guarantee</p>
          </div>
    </div>
    <div className="save d-flex  rounded-md p-2 mr-4 items-center  bg-purple-100">
          <div className="image">
            <img src={save4} alt="" />
          </div>
          <div className="content d-flex mr-4 pt-2  flex-column ">
              <h5 className=' overflow-hidden text-lg'>Online Support</h5>
              <p>On orders over $80</p>
          </div>
    </div>
  </div>

  
    </div>
  )
}

export default AboutSlider