import React from 'react'
import AppBar from './AppBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
        <>
            <AppBar />
            <Outlet />
        </>    
  )
}

export default Layout