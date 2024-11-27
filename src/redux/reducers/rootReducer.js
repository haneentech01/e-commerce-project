import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from './subCategoryReducer'
import productsReducer from './productsReducer';
import authReducer from "./authReducer.js";
import reviewReducer from './reviewReducer.js';
import addToWishListReducer from './wishListReducer.js';
import couponReducer from './couponReducer.js';
import userAddressesReducer from './userAddressesReducer.js';
import cartReducer from './cartReducer.js';

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subCategoryReducer,
  allProducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  addToWishListReducer: addToWishListReducer,
  couponReducer: couponReducer,
  userAddressesReducer: userAddressesReducer,
  cartReducer: cartReducer,
});