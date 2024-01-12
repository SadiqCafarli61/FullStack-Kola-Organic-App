import React from 'react'
import HomeSection from '../components/HomeSection'
import ProductData from '../components/ProductData'
import FeaturedProducts from '../components/FeaturedProducts'
import DealOfWeek from '../components/DealOfWeek'
import List from '../components/List'
import OrganicLogo from '../components/OrganicLogo'
import Notification from '../components/Notification'

const Main:React.FC = () => {
  return (
    <div>
        <HomeSection />
        <ProductData />
        <FeaturedProducts />
        <DealOfWeek />
        <List />
        <OrganicLogo />
     
    </div>
  )
}

export default Main