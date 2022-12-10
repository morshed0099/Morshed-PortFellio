import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';


const Header = () => {
    const menu=
    <>    
    <Link  className='font-bold text-1xl' to='contack' spy={true} smooth={true} duration={1000}>Contact Me</Link>
    <Link  className='font-bold text-1xl' to='personalinfo' spy={true} smooth={true} duration={1000}>Personal Info</Link>
    <Link  className='font-bold text-1xl' to='about' spy={true} smooth={true} duration={1000}>About Me</Link>
    <Link  className='font-bold text-1xl' to='porjects' spy={true} smooth={true} duration={1000}>Projects</Link>
    </>
    return (
        <div className="navbar sticky h-[80px] top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{menu}</li>
                        
                    </ul>
                </div>
                <Link to='home'><h1 className='flex p-8 items-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600'>Morshed</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>{menu}</li>
                  
                </ul>
            </div>
           
        </div>
    );
};

export default Header;