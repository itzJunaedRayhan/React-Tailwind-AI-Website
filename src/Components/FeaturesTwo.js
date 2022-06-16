import React from 'react';

const FeaturesTwo = () => {
    return (
        <div className='xs:w-11/12 xs:px-1 xs:grid-cols-1 xs:mt-20 md:mt-0 md:grid-cols-2 lg:container min-h-[400px] mx-auto grid grid-cols-2 gap-4 justify-center items-end shadow-lg'>
            <img className='xl:max-w-[540px] sm:max-w-[500px] md:max-w-[340px]' src="images/possibility.png" alt="FeatureTwo" />
            <div>
                <p className='font-medium text-sm text-[#71E5FF]'>Request Early Access to Get Started</p>
                <h2 className='xs:text-2xl md:text-2xl lg:text-3xl font-bold text-linear text-3xl py-6'>The possibilities are beyond your imagination</h2>
                <p className='font-medium text-sm text-[#81AFDD] leading-8 pb-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <span className='font-medimu text-sm text-[#FF8A71]'>Request Early Access to Get Started</span>
            </div>
        </div>
    );
};

export default FeaturesTwo;