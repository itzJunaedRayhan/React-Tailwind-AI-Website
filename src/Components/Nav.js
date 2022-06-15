import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className={`xs:bg-ternary xs:z-30 xs:shadow-lg xs:rounded-md xs:py-6 xs:mx-[5%] xs:w-[90%] xs:absolute ${showMediaIcons ? ' top-[3%]' : '-top-[110%]'} xs:flex-col xs:items-start md:z-0 md:shadow-none md:border-none md:bg-transparent md:static md:mx-auto md:w-full md:py-2 md:flex-row md:items-center lg:container mx-auto flex justify-between items-center px-6 py-2 transition-all duration-500`}>
                <ul className='xs:flex-col xs:w-full xs:items-start xs:relative md:static md:items-center md:flex-row flex items-center text-heaven tex-md'>
                    <span className='xs:block md:hidden absolute right-0 top-0 font-bold text-3xl block w-14 h-14 transition-all duration-500' onClick={() => setShowMediaIcons(false)}><CloseIcon className='hide' /></span>
                    <li className='xs:px-3 xs:mb-4 md:mb-0 md:px-0 font-bold text-lg pr-5 whitespace-nowrap'><a href='#'>GPT-3</a></li>
                    <li className='xs:p-3 xs:text-sm md:px-2 lg:text-[16px] lg:px-4 px-3 whitespace-nowrap'><a href='#'>Home</a></li>
                    <li className='xs:py-3 xs:text-sm md:px-2 lg:text-[16px] lg:px-4 px-3 whitespace-nowrap'><a href='#'>What is GPT?</a></li>
                    <li className='xs:py-3 xs:text-sm md:px-2 lg:text-[16px] lg:px-4 px-3 whitespace-nowrap'><a href='#'>Open AI</a></li>
                    <li className='xs:py-3 xs:text-sm md:px-2 lg:text-[16px] lg:px-4 px-3 whitespace-nowrap'><a href='#'>Case Studies</a></li>
                    <li className='xs:p-3 xs:text-sm lg:text-[16px] whitespace-nowrap'><a href='#'>Library</a></li>
                </ul>
                <div className='flex text-heaven'>
                    <button className='xs:px-4 xs:py-1 xs:my-3 xs:border-primary md:border-transparent bg-transparent px-6 py-2 mr-4 rounded-sm border border-transparent border-primary whitespace-nowrap hover:bg-primary transition-all duration-300'>Sign In</button>
                    <button className='xs:px-4 xs:py-1 xs:my-3 bg-primary px-6 py-2 rounded-sm border border-transparent whitespace-nowrap hover:bg-transparent hover:border-primary transition-all duration-300'>Sign up</button>
                </div>
            </nav>
            <div className='xs:block md:hidden absolute top-5 left-5 w-14 h-14 text-heaven transition-all duration-500' onClick={() => setShowMediaIcons(true)}>
                <DashboardIcon className='text-3xl w-5'/>
            </div>
        </>
    );
};

export default Nav;