import React from 'react';
import BlogHeader from '../Header/BlogHeader'

const Blog = () => {
    
    return (
        <div>
            <BlogHeader></BlogHeader>
             <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Comming Soon<div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
        </div>
    );
};

export default Blog;