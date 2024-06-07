import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const user = useSelector(state => state.auth.user);
    return user ? <Outlet/> : <Navigate to='/sign-in' state={{ message: 'Please log in to access this page' }} replace  />
}
