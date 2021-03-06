import React from "react";

export const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/b64f1322-31f5-4fc3-86b5-8a6dca131a20' className='flex flex-col max-w-[600px] w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ee2648] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - pinsk.maks@mail.ru</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6]' name='massage' rows='10' placeholder='Message'>

                </textarea>
                <button className='text-white border-2 hover:bg-[#ee2648] hover:border-[#ee2648] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}