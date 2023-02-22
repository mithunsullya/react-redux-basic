import actionTypes from "../constants/actionTypes";

const initialState = {
  products: []
}
export const productReducers = (state = initialState, { type, payload = [] }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return {...state, products: payload};
    case actionTypes.FILTER_PRODUCTS:
      return {...state, filteredProduct : payload }
    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return {...state, ...payload};
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}
