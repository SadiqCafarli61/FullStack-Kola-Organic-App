import React, { useEffect, useState } from 'react'

const DealOfWeek:React.FC = () => {

    const day = new Date("2024-02-02")
    const [timeRemaining, setTimeRemaining] = useState(calculateTime)

    function calculateTime(){
        const now = new Date()
        const difference  = day.getTime() - now.getTime()

  

      
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
const timer = setInterval(() => {
    setTimeRemaining(calculateTime)
}, 1000)

return () => {
    clearInterval(timer)
}
  }, [])
    
   
  return (
    <div className='deal-week-section d-flex items-center pt-12 flex-column   bg-cover ' >
   <div className="content text-center">
    <h5 className=' overflow-hidden text-4xl text-white'>Deal Of The Week</h5>
    <div className="content-text text-center pt-8">
        
        <p className=' text-md text-white   '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam nec nisi id erat consectetur tincidunt at ut odio.</p>
    </div>
    <div className="date  d-flex justify-center   m-3 items-center pt-8">
           <div className="box w-[120px] h-[120px]  rounded-full text-center pt-6    items-center justify-center border-3 border-white">
            <span className=' text-2xl text-white font-bold'>{timeRemaining.days} </span>
               <p className=' text-md text-white font-semibold'>days</p>
           </div>
           <div className="box mx-4 w-[120px] h-[120px]  rounded-full text-center pt-6    items-center justify-center border-3 border-white">
            <span className=' text-2xl text-white font-bold'>{timeRemaining.hours} </span>
               <p className=' text-md text-white font-semibold'>hours</p>
           </div>
           <div className="box mx-4 w-[120px] h-[120px]  rounded-full text-center pt-6    items-center justify-center border-3 border-white">
            <span className=' text-2xl text-white font-bold'>{timeRemaining.minutes} </span>
               <p className=' text-md text-white font-semibold'>minutes</p>
           </div>
           <div className="box mx-4 w-[120px] h-[120px]  rounded-full text-center pt-6    items-center justify-center border-3 border-white">
            <span className=' text-2xl text-white font-bold'>{timeRemaining.seconds} </span>
               <p className=' text-md text-white font-semibold'>seconds</p>
           </div>
    </div>
   </div>
   </div>
  )
}

export default DealOfWeek