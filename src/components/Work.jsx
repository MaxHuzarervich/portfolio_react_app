import React from "react";
import TodoApp from '../assets/todo-image.jpg'
import WeatherApp from '../assets/wheaterapp.png'
import ShopApp from '../assets/shop.png'

export const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ee2648]'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*Grid item*/}
                    <div style={{backgroundImage: `url(${TodoApp})`}}
                         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                           <span className='text-2xl font-bold text-white tracking-wider'>
                           React JS Application
                           </span>
                            <div className='pt-8 text-center '>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WeatherApp})`}}
                         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                           <span className='text-2xl font-bold text-white tracking-wider'>
                           React JS Application
                           </span>
                            <div className='pt-8 text-center '>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ShopApp})`}}
                         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                           <span className='text-2xl font-bold text-white tracking-wider'>
                           React JS Application
                           </span>
                            <div className='pt-8 text-center '>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}