import React from 'react';

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#ee2648]'>About</p>
                    </div>
                    <div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold '>
                            <p>Hi. I'm Maxim, nice to meet you. Please take a look around.</p>
                        </div>
                        <div>
                            <p>
                                im a passionate about building excellent software
                                that improves the lives of those around me. i spezialize in creating software for client
                                randing from individuals and small business all the way to large enterprise
                                corporations. what would you do if you had a software expert available at your
                                fingertips
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}