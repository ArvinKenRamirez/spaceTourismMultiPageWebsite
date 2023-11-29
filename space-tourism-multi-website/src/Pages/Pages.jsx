import React from 'react';
import NavMenu from '../components/NavMenu/NavMenu.jsx';
import Home from "./Home/Home";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import BG_HOME from '../assets/home/background-home-desktop.jpg';
import BG_DESTINATION from '../assets/destination/background-destination-desktop.jpg';
import BG_CREW from '../assets/crew/background-crew-desktop.jpg';
import BG_TECHNOLOGY from '../assets/technology/background-technology-desktop.jpg';

const BG_IMAGE =[  
                    {currentPath: '/',currentBg: BG_HOME}, 
                    {currentPath: '/crew',currentBg: BG_CREW}, 
                    {currentPath: '/destination',currentBg: BG_DESTINATION}, 
                    {currentPath: '/technology',currentBg: BG_TECHNOLOGY}
                ];

function Pages() {
    const location = useLocation();
    const pathName = location.pathname;
    const defaultImage = BG_HOME; // Set a default background image

    // Get the background image URL based on the current path or use the default image
    // const backgroundImage = BG_IMAGE.get(pathName) || defaultImage;
    let backgroundImage = defaultImage;
    BG_IMAGE.forEach(path_BG => {
        if(pathName === path_BG.currentPath){
            backgroundImage = path_BG.currentBg;
        }
    });

    // Apply a CSS transition for smoother background image changes
    const backgroundStyle = {
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        width: `100%`,
        height: `auto`,
    };
    
    

    return (
    <div style={backgroundStyle}>
        <NavMenu />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
        </Routes>
    </div>
    );
}

export default Pages;