import React from 'react'

const ContactMap:React.FC = () => {
  return (
    <div className=' d-flex  items-center justify-center flex-column  pt-12 contact-map'>
   <div className="map">
   <iframe className='w-[1200px] h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560948.728778434!2d46.43545839776126!3d40.170609690038546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2saz!4v1704569657627!5m2!1sen!2saz"   ></iframe>
   </div>
    </div>
  )
}

export default ContactMap