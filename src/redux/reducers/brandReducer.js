import { GET_ALL_BRAND, GET_ONE_BRAND, GET_ERROR, CREATE_BRAND } from '../type';

const initial = {
    brand: [],
    oneBrand: [],
    loading: true,
};

const brandReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            };
        
        case GET_ONE_BRAND:
            return {
                ...state,
                oneBrand: action.payload,
                loading: false,
            };
        
        case CREATE_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            };
        
        case GET_ERROR:
            return {
                ...state,
                loading: true,
            };
        
        default:
            return state;
    }
};

export default brandReducer;
