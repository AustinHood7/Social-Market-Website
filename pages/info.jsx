import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import BenefitCard from '../components/BenefitCard';
import PageFooter from '../components/PageFooter'
import Image from 'next/image';

function info() {
  return (
    <div className='w-full bg-white '>
      <Navbar/>
      <LandingPage2
        info="How does the Social Market work?"  
      />
      <div className='relative flex flex-wrap items-center bg-white justify-evenly z-100'>
        
      </div>
      <PageFooter/>
    </div>
    
  )
}

export default info
