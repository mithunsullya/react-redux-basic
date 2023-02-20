import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction'

const ProductDetails = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => { 
        console.log(error)
      });

    dispatch(selectedProduct(response.data));
  }
  
  useEffect(() => {

    if(product && productId != '') {
      fetchProductDetail();
    }
    return () => { dispatch(removeSelectedProduct())}

  }, [productId] );

  const {id, title, price, description, category, image } = product

  return (
    <div className='container'>
      <div className='flex'>
        <div className='image flex-[0_0_30%]'>
          <img src={image}/>
        </div>
        <div className='product-desc ml-8'>
          <div className='title text-[2.5rem] font-extrabold mb-6 '> {title} </div>
          <div className='desc leading-8'> {description}</div>
          <div className='price font-bold text-[1.5rem]'> Price: {price}$ </div>
          <div className='category'> Category: {category}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails