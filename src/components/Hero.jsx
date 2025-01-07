import React from 'react'
import Me from '../assets/me.jpg'

const Hero = () => {
    
  return (
    <div className=' border-b border-neutral-900 pb-4 lg:mb-36'>
      <div className="flex items-center justifu-between">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Suraj Kumar</h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800m bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>A final-year B.Tech student with a strong foundation in web
    development and a growing interest in data science.
Proficient in creating responsive web applications, managing
databases, and working in collaborative team environments.
Recognized for quick learning, problem-solving abilities, and
delivering high-quality code under tight deadlines.</p>

        </div>
        
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center overflow-visible lg:justify-end">
          <img
            src={Me}
            alt="Suraj Kumar"
            className="max-w-[300px] rounded-[200%]  max-h-[245px] lg:max-h-[400px] px-5 lg:max-w-[400px] h-auto object-cover"
            
          />
        
      </div>
       </div>

        
    </div>
  )
}

export default Hero
