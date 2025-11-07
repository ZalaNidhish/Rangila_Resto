import React from 'react'
import bg from '../assets/bg.webp'

const Hero = () => {
  return (
    <div className='h-[50vh] md:h-screen w-screen text-white flex flex-col items-center justify-center relative'>
      <div className="h-full w-full absolute top-0 left-0 right-0 ">
        <img src={bg} alt="image" className="object-cover w-full h-full" /> 
      </div> 
      <div><h1 className='leading-8 md:leading-12 font-semibold text-3xl md:text-4xl drop-shadow-md text-center'>Colors on Your Plate, <br />Joy in Your Heart  <br />Only at <span className='bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent font-bold'>Rangila!</span></h1></div>
    </div>
  )
}

export default Hero
  