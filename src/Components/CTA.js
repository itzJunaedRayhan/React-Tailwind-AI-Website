import React from 'react';

const CTA = () => {
    return (
        <div className='xs:w-11/12 xs:px-1 xs:flex-wrap xs:justify-center xs:py-2 xs:my-20 md:my-32 md:flex-nowrap md:justify-between lg:container xl:h-[170px] max-h-[140px] mx-auto bg-linear my-32 flex justify-between items-center'>
            <div className='xs:px-1 sm:px-3 md:px-6 px-6'>
                <span className='text-xs text-[#0E0E0E]'>Request Early Access to Get Started</span>
                <h3 className='xs:text-sm xs:py-2 sm:text-xl md:text-2xl xl:text-3xl font-bold text-black'>Register today & start exploring the endless possiblities.</h3>
            </div>
            <button className='mx-6 bg-black rounded-full px-4 py-2 text-heaven whitespace-nowrap'>Get Started</button>
        </div>
    );
};

export default CTA;