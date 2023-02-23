import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShimmerCard from './Shimmer';
import { addToCartAction } from '../redux/actions/productAction';

const ProductComponent = (props) => {
  const dispatch = useDispatch();
  const addToCart = (id) => {
    const cart =  props.products.filter((product) => {
      return product.id === id;
    });

    dispatch(addToCartAction(cart));
  }

  const renderList = props.products.map((product) => {
    const { id, title, price, category, image } = product;

    return (
      <div className='product-card md:flex-[0_0_25%] md:max-w-[calc(25%-2rem)] p-4 border mb-12 mx-4 hover:shadow-lg hover:shadow-slate-200'  key={id}>      
          <div className='card'>
          <Link to={`product/${id}`}>
            <img src={image} className="w-[300px] h-[300px] object-contain mx-auto mb-2" alt={title} />
            <h3 className='title font-extrabold mb-2'> {title}</h3>
          </Link>
            <div className='price'> {`Price: ${price}$`}</div>
            <div className='category'> {`Category: ${category.charAt(0).toUpperCase()+category.slice(1)}`}</div>
            <button className='border p-1 hover:bg-red-800 hover:text-white mt-2 border-[2px] font-extrabold text-[0.875rem]' onClick={() => addToCart(id)}>ADD TO CART</button>
          </div>
      </div>
    )
  });

  return (
    <> {props.products.length ? renderList : <ShimmerCard /> }</>
  )
}

export default ProductComponent