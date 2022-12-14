import React, { useEffect, useState } from 'react';

import AboutMe from './AboutMe';
import ContackMe from './ContackMe';
import PersonalInfo from './PersonalInfo';

import Projects from './Projects';
import TopBannar from './TopBannar';

const Home = () => {
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);



    return (
        <div  id='home' className='bg-white dark:bg-gray-900'>
           
            <TopBannar></TopBannar>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>My Services <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <AboutMe></AboutMe>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Personal Info <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <PersonalInfo></PersonalInfo>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Contact  Me <div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <ContackMe id='contack'></ContackMe>
            <h1 className='flex p-8 items-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Projects<div className='w-[400px] hidden md:block bg-gradient-to-r from-pink-400 to-blue-600 ml-4 rounded-none h-[5px] bg-black'> </div> </h1>
            <div className='grid dark:bg-gray-900  gap-4 mx-8 m-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project => <Projects
                        key={project.id}
                        project={project}                      
                    ></Projects>)
                }
                
            </div>            
        </div>
    );
};

export default Home;