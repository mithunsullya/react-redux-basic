import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct, setFilteredProduct } from '../redux/actions/productAction'

const ProductListing = () => {
  const dispatch = useDispatch();
  const product = useSelector(store => store.all.products);
  const filteredProduct = useSelector(store => store.all.filteredProduct);

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

  const filterProducts = (filterData, event) => {
    let filteredList;

    if (filterData === 'clear') {
      filteredList = '';
    } else {
      filteredList = product.filter((productItem) => {
        return productItem.category === filterData;
      });
    }

    dispatch(setFilteredProduct(filteredList));
  }

  return (
    <div className='container'>
      <div className='flex flex-wrap mb-12'>
        <div className='filters flex-[0_0_100%] flex flex-wrap justify-center items-center mb-8'>
          <div tabIndex={0} className='p-2 rounded-[10px] border mr-4 mb-4 cursor-pointer hover:text-red-800 font-bold focus:bg-red-800 focus:text-white' onClick={() => filterProducts('men\'s clothing')}>Men's Clothing</div>
          <div tabIndex={0} className='p-2 rounded-[10px] border mr-4 mb-4 cursor-pointer hover:text-red-800 font-bold focus:bg-red-800 focus:text-white' onClick={() => filterProducts('women\'s clothing')}>Women's Clothing</div>
          <div tabIndex={0} className='p-2 rounded-[10px] border mr-4 mb-4 cursor-pointer hover:text-red-800 font-bold focus:bg-red-800 focus:text-white' onClick={() => filterProducts('jewelery')}>Jewellery</div>
          <div tabIndex={0} className='p-2 rounded-[10px] border mr-4 mb-4 cursor-pointer hover:text-red-800 font-bold focus:bg-red-800 focus:text-white' onClick={() => filterProducts('electronics')}>Electronics</div>
          <div tabIndex={0} className='border-b mr-4 mb-4 cursor-pointer font-extrabold hover:text-red-900' onClick={() => filterProducts('clear')}>CLEAR ALL</div>
        </div>

        {filteredProduct ? <ProductComponent products={filteredProduct} /> : <ProductComponent products={product} />}

      </div>
    </div>
  )
}

export default ProductListing