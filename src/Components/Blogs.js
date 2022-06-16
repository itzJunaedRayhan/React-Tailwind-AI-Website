import React from 'react';

const Blogs = () => {
    return (
        <div className='xs:w-11/12 xs:px-1 lg:container min-h-[125vh] mx-auto shadow-lg'>
            <h2 className='xs:text-3xl sm:text-4xl lg:text-6xl xl:leading-[75px] text-6xl text-linear font-bold pb-16'>A lot is happening,<br /> We are blogging about it.</h2>

            <div className='xs:flex-wrap xs:justify-center lg:min-w-full xl:justify-between lg:flex-nowrap flex justify-between'>

                <div className='xs:min-w-full lg:min-w-0 lg:max-w-[350px] xl:max-w-[430px]'>
                    <div className='xs:w-full xs:mb-5 xs:max-h-[500px] sm:max-h-[160px] sm:flex md:max-h-[220px] lg:block lg:w-full lg:min-h-[684px] h-[684px] w-[430px] relative bg-[#042C54]'>
                        <img className='bg-[#040C18] sm:min-w-[40%]' src="images/blog01.png" alt="Blog1" />
                        <div className='px-5'>
                            <span className='text-xs font-bold text-heaven'>Sep 26, 2022</span>
                            <h3 className='xs:text-lg lg:text-2xl text-2xl font-bold text-heaven py-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                            <a className='absolute bottom-4 text-heaven text-xs font-semibold underline hover:text-primary transition-all duration-300' href="#">Real Full Article</a>
                        </div>
                    </div>
                </div>

                <div className='xs:min-w-full lg:min-w-0 lg:max-w-[300px] lg:mx-5 xl:max-w-[350px] md:grid md:grid-cols-2 md:gap-4 lg:block'>
                    <div className='xs:w-full sm:max-h-[160px] sm:flex md:max-h-[145px] lg:block lg:max-h-[330px] lg:w-full h-[330px] w-[350px] relative bg-[#042C54] mb-6'>
                        <img className='bg-[#040C18] sm:max-w-[40%] lg:max-w-full' src="images/blog02.png" alt="Blog2" />
                        <div className='px-5'>
                            <span className='text-xs font-bold text-heaven'>Sep 26, 2022</span>
                            <h3 className='md:text-sm lg:text-lg text-lg font-bold text-heaven py-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                            <a className='absolute bottom-4 text-heaven text-xs font-semibold underline hover:text-primary transition-all duration-300' href="#">Real Full Article</a>
                        </div>
                    </div>
                    <div className='xs:w-full xs:mb-6 sm:max-h-[160px] md:max-h-[145px] sm:flex lg:block lg:w-full lg:max-h-[330px] h-[330px] w-[350px] relative bg-[#042C54]'>
                        <img className='bg-[#040C18] sm:max-w-[40%] lg:max-w-full' src="images/blog04.png" alt="Blog4" />
                        <div className='px-5'>
                            <span className='text-xs font-bold text-heaven'>Sep 26, 2022</span>
                            <h3 className='md:text-sm lg:text-lg text-lg font-bold text-heaven py-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                            <a className='absolute bottom-4 text-heaven text-xs font-semibold underline hover:text-primary transition-all duration-300' href="#">Real Full Article</a>
                        </div>
                    </div>
                </div>

                <div className='xs:w-full lg:min-w-0 lg:max-w-[300px] xl:max-w-[350px] md:grid md:grid-cols-2 md:gap-4 lg:block'>
                    <div className='xs:w-full sm:max-h-[160px] sm:flex md:max-h-[145px] lg:block lg:max-h-[330px] lg:w-full h-[330px] w-[350px] relative bg-[#042C54] mb-6'>
                        <img className='bg-[#040C18] sm:max-w-[40%] lg:max-w-full' src="images/blog03.png" alt="Blog3" />
                        <div className='px-5'>
                            <span className='text-xs font-bold text-heaven'>Sep 26, 2022</span>
                            <h3 className='md:text-sm lg:text-lg text-lg font-bold text-heaven py-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                            <a className='absolute bottom-4 text-heaven text-xs font-semibold underline hover:text-primary transition-all duration-300' href="#">Real Full Article</a>
                        </div>
                    </div>
                    <div className='xs:w-full sm:max-h-[160px] sm:flex md:max-h-[145px] lg:block lg:max-h-[330px] lg:w-full h-[330px] w-[350px] relative bg-[#042C54]'>
                        <img className='bg-[#040C18] sm:max-w-[40%] lg:max-w-full' src="images/blog05.png" alt="Blog5" />
                        <div className='px-5'>
                            <span className='text-xs font-bold text-heaven'>Sep 26, 2022</span>
                            <h3 className='md:text-sm lg:text-lg text-lg font-bold text-heaven py-5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                            <a className='absolute bottom-4 text-heaven text-xs font-semibold underline hover:text-primary transition-all duration-300' href="#">Real Full Article</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;