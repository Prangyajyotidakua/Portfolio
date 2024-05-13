import React from 'react'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right md:text-right pb-8  pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-600'> About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right md:text-right text-4xl font-bold'>
                        <p>Hi. I'm Prangyajyotidakua, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Aspiring full-stack web developer eager to launch a career in web development. Proficient in front-end and back-end technologies, with a focus on creating user-friendly and visually appealing websites. Strong problem-solving skills and a passion for continuous learning. Seeking opportunities to contribute and grow in a dynamic and collaborative environment. Let's connect to explore potential prospects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
