import React from 'react'

import logo1 from './logos/logo1.png'
import logo2 from './logos/logo2.png'
import logo3 from './logos/logo3.png'
import logo4 from './logos/logo4.png'
import logo5 from './logos/logo5.png'
import logo6 from './logos/logo6.png'

const OrganicLogo = () => {
  return (
    <div className=' d-flex  items-center justify-center flex-column  mt-16 organic-logo'>
        <div className="organic-lists d-grid  gap-7 grid-cols-5">
            <div className="logo">
                <img src={logo1} alt="" />
            </div>
            <div className="logo">
                <img src={logo2} alt="" />
            </div>
            <div className="logo">
                <img src={logo3} alt="" />
            </div>
            <div className="logo">
                <img src={logo4} alt="" />
            </div>
            
            <div className="logo">
                <img src={logo6} alt="" />
            </div>
        </div>

    </div>
  )
}

export default OrganicLogo