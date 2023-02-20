import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProduct } from '../redux/actions/productAction'

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => { 
        console.log(error)
      });
      dispatch(setProduct(response.data));
    }

    fetchProducts();
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='flex flex-wrap'>
        <ProductComponent />
      </div>
    </div>
  )
}

export default ProductListing