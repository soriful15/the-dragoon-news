import React from 'react';
import NavigationNavBar from '../Pages/Shared/NavigationNavBar/NavigationNavBar';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div>
         
            <NavigationNavBar></NavigationNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;