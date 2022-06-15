import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div className='min-h-screen py-5'>
            <Nav/>
            <div className='xs:grid-cols-1 xs:w-full md:container md:grid-cols-2 mx-auto grid grid-cols-2 justify-items-center items-end'>
                <div className='xs:order-1 xs:px-5 xs:mt-0 md:mt-8 md:px-6 md:order-none mt-8 px-6 order-none'>
                    <h1 className='xs:text-[30px] xs:leading-[43px] sm:text-4xl sm:leading-[52px] md:text-[37px] md:leading-[50px] lg:text-[55px] lg:leading-[60px] text-[55px] leading-[60px] text-linear'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                    <p className='xs:text-[10px] xs:leading-6 xs:my-4 sm:text-sm sm:leading-7 lg:text-lg text-[#81AFDD] text-lg font-normal leading-7 my-7'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <div className='xs:py-1 xs:max-w-[400px] md:max-w-full lg:py-3 xl:max-w-full flex py-3'>
                        <input className='xs:h-11 lg:h-14 w-full h-14 px-4 text-heaven rounded-l-md outline-none border-none bg-ternary placeholder:text-[#3D6184]' placeholder='Your Email Address' type="text" />
                        <button className='xs:w-[40%] xs:h-11 xs:text-sm lg:text-lg lg:h-14 lg:w-[35%] h-14 w-[35%] bg-primary px-3 font-medium text-lg rounded-r-md text-heaven whitespace-nowrap'>Get Started</button>
                    </div>
                    <div className='xs:my-9 xs:max-w-[350px] md:max-w-[80%] sm:my-6 flex items-center my-6'>
                        <img className='xs:w-1/2 md:w-4/5 lg:w-full' src="../images/people.png" alt="people" />
                        <p className='xs:text-[8px] lg:text-xs px-3 text-xs text-heaven'>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div className=''>
                    <img className='xs:h-1/3 xs:w-3/5 sm:w-[45%] md:w-full md:h-full w-full mx-auto' src="../images/ai.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;