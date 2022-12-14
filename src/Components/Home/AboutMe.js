import React from 'react';
import icon from '../../img/icons8-developer.gif'
import icon2 from '../../img/icons8-developer-mode.gif'
import icon3 from '../../img/icons8-backend-development.gif'
import icon4 from '../../img/icons8-javascript.gif'

const AboutMe = () => {
    return (
        <div id='service' className="hero" >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center bg-white dark:bg-gray-900 text-neutral-content">
                <div className='grid text-center  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4'>
                    <div data-aos="zoom-in-right" className="max-w-md rounded-md shadow-md dark:text-white dark:bg-black p-4 text-black ">
                        <img className='w-10 h-10 mx-auto' src={icon} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Web Developer</h1>
                        <p className="mb-5">Hi I am a web developer. I love coading and developning website you can hire me for you site developments and also re devlopment thank you </p>

                    </div>
                    <div data-aos="zoom-in-left" className="max-w-md rounded-md  text-black bg-white dark:bg-black p-4 dark:text-white  shadow-md ">
                        <img className='w-10 h-10 mx-auto' src={icon2} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 p-4 to-blue-600 font-bold text-2xl">Responsive Desginer</h1>
                        <p className="mb-5">Hi I am responsive Front-end designer you can hire me to responsive you site . resposive design with raw css and Bootstrap,Tailwind</p>

                    </div>
                    <div  data-aos="zoom-in-up" className="max-w-md rounded-md  text-black dark:text-white dark:bg-black p-4 shadow-md">
                        <img className='w-10 h-10 mx-auto' src={icon3} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Frontend Developer</h1>
                        <p className="mb-5">You can also hire me for any kind of Front-end design . I am expert in htm css bootstrap and tailwind responsive is free also with Front-end</p>

                    </div>
                    <div data-aos="zoom-in-up" className="max-w-md rounded-md  text-black dark:text-white dark:bg-black p-4 shadow-md">
                        <img className='w-10 h-10 mx-auto' src={icon4} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Javascript Developer</h1>
                        <p className="mb-5">Hi in javascript i can provide services to interact your site like animation and also provided  MERN-Stack development services </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;