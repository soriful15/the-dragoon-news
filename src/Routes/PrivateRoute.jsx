import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoute = ({ children }) => {

    const { user,loading } = useContext(AuthContext)
    let location = useLocation();
    // console.log(location);
    console.log('user private route',user)
 if(loading){
    return <Spinner animation="border" />;
 }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

/* **
................steps........
1.check user is logged in or not
2.if user is logged in,then allow them to visit the route 
3.else redirect the user to the login page
4. setup the private router
5.handle loading


*/