import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'


export const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ee2648]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Maxim Huzarevich</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Hello, I am a front-end developer with experience in SPA development using React, Redux, Typescript,
                    JS, HTML, CSS. Improving in user interface development, testing and debugging. Open to your
                    suggestions.
                </p>
                <div>
                    <button
                        className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ee2648] hover:border-[#ee2648]'>
                        <Link to="work" smooth={true} duration={500}>
                            View Work
                        </Link>                        <span className='group-hover:rotate-90 duration-300'>
                             <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}