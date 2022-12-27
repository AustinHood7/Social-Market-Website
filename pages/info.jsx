import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'

function info() {
  return (
    <div>
      <Navbar/>
      <LandingPage2
        info="How does the Social Market work?"  
      />
      <div className='h-[100vh] flex justify-center items-center'>
        What is up my dudes
      </div>
    </div>
  )
}

export default info
