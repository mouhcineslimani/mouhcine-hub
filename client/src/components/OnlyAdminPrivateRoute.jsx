import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlyAdminPrivateRoute() {
    const user = useSelector(state => state.auth.user);
    return user && user.type === "admin" ? <Outlet/> : <Navigate to='/sign-in' state={{ message: 'Please log in if you are admin to access this page' }} replace  />
}
