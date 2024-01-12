import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const HomeSection:React.FC = () => {

    type data = {
        id: number,
        url: string,
        name: string,
        content: string,
        title: string,
        img: string,
        appleImg: string,
        
    }
    const datas:data[] = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704279847/wallnuts_vg8wtz.jpg",
            name:"Wallnuts",
            content: "Natural 100% Organic",
            appleImg: "",
            title: "50% discount on bottled apple juice this week",
            img: ""
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704279847/pineapple_nrgwvf.jpg",
            name: "Pineapples",
            content: "Natural 100% Organic",
            title: "50% discount on bottled apple juice this week",
            appleImg: "",
            img: ""
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704279847/strawberry_aagx56.png",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704279841/apple_b9wixg.jpg",
            name: "Apple juice",
            content: "Natural 100% Organic",
            title: "50% discount on bottled apple juice this week",
            appleImg: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704282250/applei_i9wcxd.png"
        }
    ]
    const [currentSlide, setCurrentSlide] = useState<number>(0)



    const handlePrev =  () => {
        if(currentSlide === 0){
            setCurrentSlide(datas.length  -1)
        }
        else{
            setCurrentSlide(currentSlide - 1)
        }
    }
    const handleNext =  () => {
        if(currentSlide === datas.length - 1){
            setCurrentSlide(0)
        }
        else{
setCurrentSlide(currentSlide + 1)
        }
    }
    

    const imageEl = useRef<HTMLImageElement | null > (null)

    // useEffect(() => {
    //     const handleMouseDown = (e:MouseEvent) => {
    //       const { clientX, clientY } = e;
    //       const offsetX = (clientX / window.innerWidth - 0.5) * 2;
    //       const offsetY = (clientY / window.innerHeight - 0.5) * 2;
    
    //       if (imageEl.current) {
    //         imageEl.current.style.transform = `translate(-50%, -50%) translate(${offsetX * 50}px, ${offsetY * 50}px)`;
    //       }
    //     };
    
    //     document.addEventListener("mouseup", handleMouseDown);
    
    //     // Temizlik: Komponent çözümlendiğinde olay dinleyicisini kaldır
    //     return () => {
    //       document.removeEventListener("mouseup", handleMouseDown);
    //     };
    //   }, [imageEl]);

    
  return (
    

   
    <div 
    style={{ 
        backgroundImage:`   linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)),  url(${datas[currentSlide].url})`,
    }}
    
    className=' main-section d-flex mt-6  items-center  bg-cover bg-center justify-center flex-column  h-[80vh]'>
   
   <div className="apple-image ">
    <img src={datas[currentSlide].appleImg} className=' appleImg' alt="" />
   </div>
   
   

   
        <div 
     
        className="home  relative justify-between  d-flex items-center  ">
          <button onClick={handlePrev} className='  backButton mr-12 rounded-full w-[50px] h-[50px] bg-white d-flex  items-center justify-center text-green-400'>
        <IoIosArrowBack  />
    </button>  
            <div className="left-side relative ">
          
                  <div className="content">
                
                 
                <div className=" text w-[200px] h-[50px] rounded-md bg-green-400 d-flex  items-center justify-center home-content">
                <h5 className=' overflow-hidden  text-white font-semibold text-2xl'>{datas[currentSlide].name}</h5>        
                </div>
              
                <h2 className=' overflow-hidden text-6xl max-w-md text-white font-bold pt-4'>{datas[currentSlide].content}</h2>
                <div className="title pt-2">
                    <p className=' text-white text-md'>{datas[currentSlide].title}</p>
                    </div> 
                    </div>
               
            </div>
            <div className="right-side ">
      
   <div className="image">
    <img ref={imageEl} className='image strawberry' src={datas[currentSlide].img} alt="" />
    
   </div>
   <button onClick={handleNext} className=' nextButton  mx-16 rounded-full w-[50px] h-[50px] bg-white d-flex  items-center justify-center text-green-400'>
   <IoIosArrowForward />
    </button>
        </div>
        </div>
     
     
    </div>
  )
}

export default HomeSection