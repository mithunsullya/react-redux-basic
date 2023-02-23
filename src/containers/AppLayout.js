import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='mt-[calc(96px+2rem)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AppLayout