import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode && "dark"
    }`}>
            <Header
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            ></Header>
            <Outlet           
            ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;