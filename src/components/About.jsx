import React from 'react'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='py-4 text-center text-neutral-500 text-4xl'>About Me</h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className='rounded-2xl' src="https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww" alt="" />
            
            </div>

           
            
            </div>
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
            <p className='py-5 my-5'>I’m a passionate full-stack web developer with a keen interest in data science. Currently in the final year of my B.Tech at GIET University, Gunupur, I’ve honed my skills in technologies like Python, HTML, CSS, JavaScript, React, Express, Node, and MongoDB. I thrive on solving complex problems and creating seamless user experiences, whether it’s building dynamic web applications or exploring data-driven solutions.

Beyond coding, I love playing the guitar, trekking to explore new heights, experimenting in the kitchen, and sharpening my strategic thinking through chess. My portfolio showcases not just my technical expertise but also my dedication to lifelong learning and growth. Let’s build something incredible together!</p>
            </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default About
