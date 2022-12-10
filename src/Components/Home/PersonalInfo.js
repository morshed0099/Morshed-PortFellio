import React from 'react';
import morshed from '../../img/247685289_2951326271846614_9183348978149155405_n.jpg'
import facebook from '../../img/icons8-facebook-circled.gif'
import twitter from '../../img/icons8-twitter-circled.gif'
import linkedin from '../../img/icons8-linkedin-circled.gif'
const PersonalInfo = () => {
    return (
        <div id='personalinfo' className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-6'>
            <div className='rounded-md shadow-md'>
                <img className='w-[400px] mx-auto rounded m-4' src={morshed} alt="" />
            </div>
            <div className='rounded-md shadow-md p-4'>
                <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Follow Me On</h3>
                <div className='flex justify-evenly'>
                    <a href='https://www.facebook.com/morshed0099'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={facebook} alt="" />
                    </div></a>
                    <a href='https://twitter.com/GolamMorshed09'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={twitter} alt="" />
                    </div></a>
                    <a href='https://www.linkedin.com/in/md-goalm-morshed-53680b259/'><div className='w-16 m-2 rounded-full shadow-lg h-16'>
                        <img className='w-14 mx-auto my-auto rounded-full h-14' src={linkedin} alt="" />
                    </div></a>
                </div>
                <h3 className='text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Frontend Skills</h3>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>HTML</h4>
                    <input type="range" min="0" max="100" value="90" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>CSS</h4>
                    <input type="range" min="0" max="100" value="90" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>JavaScript</h4>
                    <input type="range" min="0" max="100" value="93" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>Tailwind</h4>
                    <input type="range" min="0" max="100" value="95" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>Bootstrap</h4>
                    <input type="range" min="0" max="100" value="95" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <h3 className='text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl'>Backend Skills</h3>
            
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>ExpressJs</h4>
                    <input type="range" min="0" max="100" value="75" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>
                <div className='flex justify-around mt-4 items-center'>
                    <h4 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-1xl'>MongoDB</h4>
                    <input type="range" min="0" max="100" value="93" className="range range-xs mr-[-5]  w-[70%] range-accent" />                 
                  
                </div>

            </div>
        </div>
    );
};

export default PersonalInfo;