import React from 'react';
import img from '../../images/donate.png';
import img2 from '../../images/food recipy.png';
import img3 from '../../images/Football world cup team.png';
import img4 from '../../images/it solution.png';
import img5 from '../../images/learn .png';
import img6 from '../../images/peguin shop.png';
import img7 from '../../images/sell phone.png';
import img8 from '../../images/six hero of world cup.png';
import img9 from '../../images/your photo grapher.png';


const Projects = () => {
    return (
        <div id='porjects' className='grid  gap-4 mx-8 m-2 mb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'> Donate  Only DeksTop</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img2} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>Food Recepie</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img3} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>World Cup Shedule</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img4} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>IT School</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img5} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>Learn Programming</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img6} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'> Penguine E-comers</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img7} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'> Sell Phone</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img8} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>Six Hero Of World Cup</h4>
            </div>
            <div className='m-2 overflow-hidden p-2 rounded-md shadow-lg' >
                <img  className='hover:scale-125  ease-linear delay-75 duration-300' src={img9} alt="" />
                <h4 className='text-green-900 mt-5 text-1xl font-bold hover:block top-0 w-full bg-black h-[40px] bg-transparent'>Your Photographer</h4>
            </div>
            
           
            
        </div>
    );
};

export default Projects;