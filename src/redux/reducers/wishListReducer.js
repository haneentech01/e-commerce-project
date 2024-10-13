import React from "react";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../type";

const inital = {
  addWishList: [],
  removeWishList: [],
};

const addToWishListReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.payload,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishList: action.payload,
      };

    default:
      return state;
  }
};

export default addToWishListReducer;
