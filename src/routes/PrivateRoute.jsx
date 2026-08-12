import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const PrivateRoute = ({children}) => {
    const isAuthenthificated = useSelector((state) => {
        return state.token.token
    })
    return isAuthenthificated ? <Outlet/> : <Navigate to="/signin" replace/>
}
