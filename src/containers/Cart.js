import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.all.cart);
  return (
    cartItems.length ?
      <div className='cart-items text-[1rem] max-w-[400px] drop-shadow-lg text-black text-left font-normal absolute right-0 top-[96px] bg-white py-8 px-6'>
        {cartItems.map((item, index) => (
          <Link to={'products' / item[0].id} className="cart-card flex flex-wrap mb-4 pb-4 border-b border-b-[2px]">
            <div className='cart-image flex-[0_0_30%] max-w-[30%]'>
              <img src={item[0].image} alt={item[0].title} className="max-h-[110px] max-w-[110px] object-contain" />
            </div>
            <div className='cart-item-info flex-[0_0_70%] pl-4'>
              <div className='pb-2 font-extrabold' key={index} >{item[0].title}</div>
              <div className='price'>Price: {item[0].price}$</div>
            </div>
          </Link>
        )
        )}
      </div> : ''
  )
}

export default Cart