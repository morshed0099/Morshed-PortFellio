import React from 'react';
import AboutMe from './AboutMe';
import ContackMe from './ContackMe';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import TopBannar from './TopBannar';

const Home = () => {
    return (
        <div id='home'>      
            <TopBannar></TopBannar>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>About Me <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <AboutMe></AboutMe>           
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Personal Info <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <PersonalInfo></PersonalInfo>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Contact  Me <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <ContackMe id='contack'></ContackMe>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Projects<div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
             <Projects></Projects>
        </div>
    );
};

export default Home;