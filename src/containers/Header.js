import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <h1 className='text-center font-extrabold text-[2rem] bg-black text-white p-8 mb-8'>
      <Link to="/">
        Shopping Cart
      </Link>
    </h1>
  )
}

export default Header