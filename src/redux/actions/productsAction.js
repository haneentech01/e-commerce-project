import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useInUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETALIS,
  GET_PRODUCT_LIKE,
  UPDATE_PRODUCTS,
} from "../type";

// Get All Products With Pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Create Product
export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/products`, formData);
    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get All Products With Pagination With Pages Number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get All Products With Query String
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get One Product With Id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get Product Like With Id
export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Delete Product With Id
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Update Product With Id
export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await useInUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
