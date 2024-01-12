import React, { useState } from 'react'
import clien1 from './Clients/client1.jpg'
import clien2 from './Clients/client2.jpg'
import clien3 from './Clients/client3.jpg'

const AboutClient:React.FC = () => {

    type clientData  = {
        id: number,
        url: string,
        name: string,
        content: string,
        duty: string
    }

    const data:clientData[]  = [
       {
        id: 1,
        url: clien1,
        name: "John Doe",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque tempore hic dicta quod velit at doloribus modi cumque adipisci.`,
        duty: "Web Developer"
       },
       {
        id: 2,
        url: clien2,
        name: "John Doe",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque tempore hic dicta quod velit at doloribus modi cumque adipisci.`,
        duty: "Sofware Enginner"
       },
       {
        id: 3,
        url: clien3,
        name: "John Doe",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque tempore hic dicta quod velit at doloribus modi cumque adipisci.`,
        duty: "Graphic Designer"
       }
    ]
    const [currentNumber,setCurrentNumber] = useState<number>(0)

    const handlePrevSlide = () => {
        if(currentNumber === 0){
            setCurrentNumber(data.length - 1)
        }
        else{
            setCurrentNumber(currentNumber - 1)
        }
    }

    const handleMiddleSlide = () => {
        setCurrentNumber(1)
    }
    const handleNextSlide = () => {
        if( currentNumber === data.length - 1){
            setCurrentNumber(0)
        }
        else{
            setCurrentNumber(currentNumber + 1)
        }
    }

    
    const intevalTimer = setInterval(() => {
        handleNextSlide()
return() => {
    clearInterval(intevalTimer)
}
    }, 3000)
    

  return (
    <div className='client-section d-flex  items-center justify-center flex-column  pt-16'>
        <div className="client">
            <div className="cart__data">
                <div className="cart pt-14">
                    <div className="cart__top w-[65px]">
                        <img style={{borderRadius: "50%"}} src={data[currentNumber].url} className='w-[100%]'  alt="" />
                    </div>
                    <div className="cart__body text-center pt-10">
                          <p className=' text-gray-500'>{data[currentNumber].content}</p>
                          <div className="content d-flex  pt-10 items-center justify-center">
                          <span className='  overflow-hidden text-lg text-green-500'>{data[currentNumber].name}-  </span>
                             <span className=' text-gray-400 text-md'> {data[currentNumber].duty}</span>
                          </div>
                          <div className="buttons d-flex justify-center  items-center pt-10 mx-2">
                            <span onClick={handlePrevSlide} className=' rounded-full mx-2 bg-white w-[25px] d-flex overflow-hidden  items-center justify-center h-[25px] border-green-600 border-1  cursor-pointer '></span>
                            <span onClick={handleMiddleSlide} className=' rounded-full mx-2 bg-white w-[25px] h-[25px] d-flex overflow-hidden  items-center justify-center border-green-600 border-1  cursor-pointer '></span>
                            <span onClick={handleNextSlide} className=' rounded-full mx-2 bg-white w-[25px] h-[25px] d-flex  items-center overflow-hidden justify-center border-green-600 border-1  cursor-pointer '></span>
                          </div>
                          
                          
                           
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutClient