import React from 'react'
import ReactImg from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongo.png'
import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
// import node from '../assets/node.png'
// import Github from '../assets/github.png'
import python from '../assets/python.jpeg'  
import django from '../assets/django.png' 
import redux from '../assets/redux.png'
import cpp from '../assets/cpp.png' 
import c from '../assets/c.png' 
import mysql from '../assets/mysql.png' 

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={c} alt="HTML icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                  <p className='my-4'>tailwind</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                  <p className='my-4'>javascript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                  <p className='my-4'>css</p>
              </div>
              {/* added */}
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={redux} alt="HTML icon" />
                  <p className='my-4'>Redux</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={django} alt="HTML icon" />
                  <p className='my-4'>Django</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mysql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongodb} alt="HTML icon" />
                  <p className='my-4'>Mongodb</p>
              </div>
              </div>
              </div>
    </div>
  )
}

export default Skills