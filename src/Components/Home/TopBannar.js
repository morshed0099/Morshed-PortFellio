
import ParticlesBg from 'particles-bg';
import React from 'react';

import TypeWriterEffect from 'react-typewriter-effect';
import img from '../../img/277705885_3073236936322213_392181606018350713_n (1).png'


const TopBannar = () => {
   

    return (
        <>
     
            <div className='hero'   style={{ backgroundImage: `url("https://concredo.mu/wp-content/uploads/2020/05/welcome-bg.jpg")` }}>       
           
                       <ParticlesBg
                        
                        type='circle'
                       />
                <div className="hero-overlay dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-60"></div>
               
               
                    <div className="flex justify-center  items-center  flex-wrap">
                        <div className='mr-4 w-[full]'>
                            <h1 data-aos="zoom-out-left" className='text-3xl font-bold text-white'>who i am and what i do </h1>
                            <div className='ml-0'>
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Red Hat Display',
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '1.5em',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'Hi I am a Full-stack Developer',
                                        'Hi I am ajavascript Developer',
                                        'Hi I am a ReactJs Developer',
                                        'Hi I am a Responsive Desginer',
                                        'Hi I am a Frontend Developer',
                                    ]}
                                    multiTextDelay={1000}
                                    typeSpeed={30}
                                />
                            </div>
                            <a href='https://drive.google.com/file/d/1-1uklwBKkogSh-LmErYld_hHW9WAbcOB/view?usp=sharing'><button className='btn mt-5 btn-sm btn-primary'>DownLoad cv</button></a>
                        </div>
                        <div data-aos="zoom-out-right" className=" md:w-1/2">

                            <img className='w-[350px] rounded-lg h-[300px]' src={img} alt="" />

                        </div>
                    </div>

            </div>


        </>
    );
};

export default TopBannar;
