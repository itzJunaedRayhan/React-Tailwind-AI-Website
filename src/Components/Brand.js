import React from 'react';

const Brand = () => {
    return (
        <div className='max-w-[650px] flex flex-wrap justify-between mx-auto px-4 py-14'>
            <img className='mx-2 my-3' src="../images/google.png" alt="Google" />
            <img className='xs:hidden sm:block mx-1 my-3' src="../images/slack.png" alt="slack" />
            <img className='mx-2 my-3' src="../images/shopify.png" alt="shopify" />
            <img className='mx-2 my-3' src="../images/atlassian.png" alt="atlassian" />
            <img className='mx-0 my-3' src="../images/dropbox.png" alt="dropbox" />
        </div>
    );
};

export default Brand;   