import React from 'react'
import Html from '../assests/html.jpeg';
import CSS from '../assests/CSS.jpeg';
import javascript from '../assests/js.jpeg';
import react from '../assests/react.svg';
import python from '../assests/python.png';
import sql from '../assests/sql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'  >
        <div className='mx-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
            <p className='py-4'>//These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={Html} alt='html icon'/>
                <p>HTML</p>
            </div>
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={CSS} alt='CSS icon'/>
                <p>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={javascript} alt='javascript icon'/>
                <p>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={react} alt='react icon'/>
                <p>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={python} alt='python icon'/>
                <p>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img classname='w-20 mx-auto' src={sql} alt='sql icon'/>
                <p>SQL</p>
            </div></div>
    </div>
    </div> 
  )
}

export default Skills