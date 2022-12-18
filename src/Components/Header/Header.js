import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Lik } from 'react-router-dom';
import { Link } from 'react-scroll';




const Header = ({setDarkMode,darkMode}) => {


  
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    const menu =
        <>
            <NavLink className='font-bold text-1xl' to='/'>Home</NavLink>
            <Link className='font-bold text-1xl' to='contack' spy={true} smooth={true} duration={1000}>Contact Me</Link>

            <Link className='font-bold text-1xl' to='service' spy={true} smooth={true} duration={1000}>Service</Link>
            <Link className='font-bold text-1xl' to='skill' spy={true} smooth={true} duration={1000}>Skill</Link>
            <Link className='font-bold text-1xl' to='about' spy={true} smooth={true} duration={1000}>About Me</Link>
            <Link className='font-bold text-1xl' to='porjects' spy={true} smooth={true} duration={1000}>Projects</Link>

            <NavLink className='font-bold text-1xl' to='/blog'>blog</NavLink>
        </>
    return (
        <div id='navbar' className={`navbar bg-opacity-60 sticky h-[80px] top-0 z-50 bg-base-100 dark:text-white dark:bg-gray-900 ` }>
           
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:text-black rounded-box w-52">
                        <li>{menu}</li>

                    </ul>
                </div>
                <Link to='home'><h1 className='flex p-8 items-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-600 dark:text-gray-200'>Morshed</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>{menu}</li>

                </ul>
            </div>
            <label class="switch">
                <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
                <span class="slider round"></span>
            </label>

        </div>
    );
};

export default Header;