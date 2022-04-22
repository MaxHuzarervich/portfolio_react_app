import React from 'react';
import HTML5LOGO from '../assets/html5.png';
import CSS3LOGO from '../assets/css3.png';
import JSLOGO from '../assets/js.png';
import REACTLOGO from '../assets/react.png';
import TSLOGO from '../assets/typescript.png';
import GITLOGO from '../assets/github.png';

export const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ee2648]'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML5LOGO} alt='HTML icon'/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS3LOGO} alt='HTML icon'/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JSLOGO} alt='HTML icon'/>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={REACTLOGO} alt='HTML icon'/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TSLOGO} alt='HTML icon'/>
                        <p className='my-4'>TYPESCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GITLOGO} alt='HTML icon'/>
                        <p className='my-4'>GITHUB</p>
                    </div>

                </div>
            </div>
        </div>
    )
}