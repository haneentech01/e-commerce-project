import {useGetData} from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../type";

// Get All Category
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        });
    } catch (e) {
        console.log("Error fetching categories:", e);
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        });
    }
};

// Get One Category
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        });
    }
};

// Get All Category Page
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        });
    }
};

// Create Category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        });
    }
};
