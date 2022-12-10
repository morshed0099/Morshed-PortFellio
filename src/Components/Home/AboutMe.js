import React from 'react';
import icon from '../../img/icons8-developer.gif'
import icon2 from '../../img/icons8-developer-mode.gif' 
import icon3 from '../../img/icons8-backend-development.gif'
import icon4 from '../../img/icons8-javascript.gif'

const AboutMe = () => {
    return (
        <div id='about' className="hero" >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className='grid text-center  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4'>
                    <div className="max-w-md rounded-md shadow-md text-black ">
                   <img className='w-10 h-10 mx-auto' src={icon} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Web Developer</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                    <div className="max-w-md rounded-md  text-black shadow-md ">
                    <img className='w-10 h-10 mx-auto' src={icon2} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Responsive Desginer</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                    </div>
                    <div className="max-w-md rounded-md  text-black shadow-md">
                    <img className='w-10 h-10 mx-auto' src={icon3} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Frontend Developer</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                    </div>
                    <div className="max-w-md rounded-md  text-black shadow-md">
                    <img className='w-10 h-10 mx-auto' src={icon4} alt="" />
                        <h1 className="text-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 font-bold text-2xl">Javascript Developer</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default AboutMe;