import { ALL_REVIEW_PRODUCT, CREATE_REVIEW, DELETE_REVIEW, UPDATE_REVIEW } from "../type";

const inital = {
  createView: [],
  allReviewProduct: [],
  deleteReview: [],
  updateReview: [],
  loading: true,
};

const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createView: action.payload,
        loading: false,
      };

    case ALL_REVIEW_PRODUCT:
      return {
        ...state,
        allReviewProduct: action.payload,
        loading: false,
      };

    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        updateReview: action.payload,
      };

    default:
      return state;
  }
};
export default reviewReducer;
