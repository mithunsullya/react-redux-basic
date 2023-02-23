import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Header = () => {
  const cartItems = useSelector(state => state.all.cart);
  let [showCart, setShowCart] = useState(false);
  return (
    <div className='bg-black fixed top-0 left-0 right-0 h-[96px]'>
      <h1 className=' flex justify-between container text-center font-extrabold text-[2rem] text-white p-6 relative'>
        <Link to="/">
          Shopping Cart
        </Link>
        <button className='relative' onClick={() => setShowCart(showCart = !showCart)}>
          <i className="fa-solid fa-cart-shopping text-[1.5rem]"></i>
          <span className='text-white bg-red-900 rounded-[10px] text-[12px] py-[2px] px-1.5 absolute right-[-8px] top-0'>
            {cartItems.length}
          </span>
        </button>
        { showCart ? <Cart /> : ''}
      </h1>
    </div>
  )
}

export default Header