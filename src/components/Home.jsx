import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 pt-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl md:text-7xl font-bold text-[#ccd6f6]'>
          Prangya Jyoti Dakua
        </h1>
        <h2 className='text-4xl sm:text-7xl md:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '>Aspiring full-stack web developer eager to launch a career in web development. Proficient in front-end and back-end technologies, with a focus on creating user-friendly and visually appealing websites. Strong problem-solving skills and a passion for continuous learning. Seeking opportunities to contribute and grow in a dynamic and collaborative environment. Let's connect to explore potential prospects.</p>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <AiOutlineArrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;