import ActionTypes from './../constants/actionTypes';

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products
  }
}

export const selectedProduct = (product) => {
  return { 
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  }
}

export const setFilteredProduct = (filterdProduct) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: filterdProduct
  }
}

export const removeSelectedProduct = () => {
  return { 
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}

export const addToCartAction = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products
  }
}
