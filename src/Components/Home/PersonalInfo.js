import React from 'react';
import morshed from '../../img/247685289_2951326271846614_9183348978149155405_n.jpg'
import facebook from '../../img/icons8-facebook-circled.gif'
import twitter from '../../img/icons8-twitter-circled.gif'
import linkedin from '../../img/icons8-linkedin-circled.gif'
import github from '../../img/icons8-github.gif'
const PersonalInfo = () => {
    return (
        <div id='about'  className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-6'>
            <div  data-aos="zoom-out-up"  className='rounded-md dark:bg-black p-3 shadow-md'>
                <h1 className='font-bold text-black dark:text-white text-center text-2xl'>About Me</h1>
                <div className='text-black dark:text-white'>
                <p>Hi My name is MD.Golam Morshed </p>
                <p>I am a Web Developer ,ReactJs Developer ,Frontend Developer</p>
                <p>I love coding.Coding is my passion.I am from Dhaka,Bangladesh.Recently i just complete Complete Web Developmet course by programming hero.My dream is , I will be a good developer .I am dedicate to learn new thinks and also love to do hard work.</p>
                <p> Date of Birth: 1.1.1996</p>
                <p> Education: Bachalor of Social Science (BSS)</p>
                <p> Email: mdgolammorshed0099@gmail.com</p>
                </div>
                <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Follow Me On</h3>
                <div data-aos="zoom-out-down" className='flex justify-evenly'>
                    <a href='https://www.facebook.com/morshed0099'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={facebook} alt="" />
                    </div></a>
                    <a href='https://twitter.com/GolamMorshed09'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={twitter} alt="" />
                    </div></a>
                    <a href='https://www.linkedin.com/in/md-goalm-morshed-53680b259/'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={linkedin} alt="" />
                    </div></a>
                    <a href='https://www.linkedin.com/in/md-goalm-morshed-53680b259/'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={github} alt="" />
                    </div></a>
                </div>
                {/* <img  data-aos="zoom-out-right" className='w-[400px] mx-auto rounded m-4' src={morshed} alt="" /> */}
            </div>
            <div  id='skill' className='rounded-md dark:bg-black shadow-md p-4'>
                   <h1 className='text-center text-black dark:text-white font-bold text-2xl'>Skills</h1>
                <h3 className='text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Frontend Skills</h3>
                <div data-aos="zoom-out-down" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>HTML</h4>
                    <input type="range" min="0" max="100" value="90" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div data-aos="zoom-out-up" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>CSS</h4>
                    <input type="range" min="0" max="100" value="90" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div data-aos="zoom-out-down" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>JavaScript</h4>
                    <input type="range" min="0" max="100" value="93" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div data-aos="zoom-out-up" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>Tailwind</h4>
                    <input type="range" min="0" max="100" value="95" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div data-aos="zoom-out-down" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>Bootstrap</h4>
                    <input type="range" min="0" max="100" value="95" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <h3 className='text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Backend Skills</h3>
            
                <div data-aos="zoom-out-up" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>ExpressJs</h4>
                    <input type="range" min="0" max="100" value="75" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div data-aos="zoom-out-down" className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>MongoDB</h4>
                    <input type="range" min="0" max="100" value="93" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>

            </div>
        </div>
    );
};

export default PersonalInfo;