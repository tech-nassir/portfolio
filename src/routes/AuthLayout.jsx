import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
     <div className="w-full min-h-screen">
       <div></div>

        <Outlet/>
     </div>
    )
}
export default AuthLayout;