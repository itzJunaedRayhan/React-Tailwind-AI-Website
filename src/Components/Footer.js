import React from 'react';

const Footer = () => {
    return (
        <footer className="xs:mt-28 md:mt-10 bg-footer">
            <div className='xs:w-11/12 xs:px-1 xs:pt-10 md:pt-28 lg:container pt-28 min-h-[80vh] mx-auto'>
                <div className='footer-title'>
                    <h2 className='xs:text-3xl text-linear text-6xl font-bold max-w-[800px] mx-auto text-center'>Do you want to step in to the future before others</h2>
                    <button className='w-[200px] h-14 border border-heaven mx-auto my-10 flex justify-center items-center whitespace-nowrap text-sm text-heaven hover:border-transparent hover:bg-primary transition-all duration-300'>Request Early Access</button>
                </div>
                <div className='xs:grid-cols-2 xs:gap-x-4 xs:gap-y-6 xs:py-8 sm:grid-cols-2 md:grid-cols-4 md:py-14 grid grid-cols-4 px-4 py-14'>
                    <div className='max-w-[170px]'>
                        <img className='xs:w-[50%] xs:mt-2 sm:w-[70%] sm:mt-2 lg:w-full md:mt-0' src="images/logo.svg" alt="Logo" />
                        <p className='my-6 text-[12px] text-heaven font-medium'>Do you want to step in to the future before others</p>
                    </div>
                    <div>
                        <ul className='text-heaven'>
                            <li className='text-lg font-bold'>Links</li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Overons</a></li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Social Media</a></li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Counter</a></li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-heaven'>
                            <li className='text-lg font-bold'>Company</li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Terms & Condition</a></li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Privacy & Policy</a></li>
                            <li className='xs:text-xs sm:text-[14px] py-2'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-heaven'>
                            <li className='text-lg font-bold'>Get In Touch</li>
                            <li className='xs:text-xs sm:text-[14px] py-2'>Habiganj, Sylhet, Bangladesh</li>
                            <li className='xs:text-xs sm:text-[14px] py-2'>(+880) 179 213 8331</li>
                            <li className='xs:text-[10px] sm:text-[14px] py-2'>junaedislam96@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-heaven text-xs text-center py-5'>&copy; 2022 <a className='mx-2 text-primary underline text-lg font-bold' href="https://www.facebook.com/JKwebGenesis" target="_blank">WEB Genesis</a> All rights reserv</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;