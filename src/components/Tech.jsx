import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import '../style.css'




const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-8'>
        
            <h2 className='my-4 text-center text-neutral-500 text-4xl'>Technologies</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                 <div className="rounded-xl border-4 border-neutral-800 p-4 icon">
                    <RiReactjsLine className='text-5xl text-cyan-400'/>
                 </div>
                 <div className="rounded-xl border-4 border-neutral-800 p-4 icon">
                    <TbBrandNextjs className='text-5xl '/>
                 </div>
                 <div className="rounded-xl border-4 border-neutral-800 p-4 icon">
                    <SiMongodb className='text-5xl text-green-400'/>
                 </div>
                 <div className="rounded-xl border-4 border-neutral-800 p-4 icon">
                    <DiRedis  className='text-5xl text-red-400'/>
                 </div>
                 
            </div>
        
            
        
      
    </div>
  )
}

export default Tech
