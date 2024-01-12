import React from 'react'
import ContactMap from './ContactMap'
import ContactUs from './ContactUs'
import './Contact.css'

const Contact:React.FC = () => {
  return (
    <div>
        <ContactMap />
        <ContactUs />
    </div>
  )
}

export default Contact