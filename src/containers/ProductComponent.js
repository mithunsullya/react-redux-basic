import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ShimmerCard from './Shimmer';

const ProductComponent = (props) => {
  const renderList = props.products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div className='product-card md:flex-[0_0_25%] md:max-w-[calc(25%-2rem)] p-4 border mb-12 mx-4 hover:shadow-lg hover:shadow-slate-200'  key={id}>      
        <Link to={`product/${id}`}>
          <div className='card'>
            <img src={image} className="w-[300px] h-[300px] object-contain mx-auto mb-2" alt={title} />
            <h3 className='title font-extrabold mb-2'> {title}</h3>
            <div className='price'> {`Price: ${price}$`}</div>
            <div className='category'> {`Category: ${category.charAt(0).toUpperCase()+category.slice(1)}`}</div>
          </div>
        </Link>
      </div>
    )
  });

  return (
    <> {props.products.length ? renderList : <ShimmerCard /> }</>
  )
}

export default ProductComponent