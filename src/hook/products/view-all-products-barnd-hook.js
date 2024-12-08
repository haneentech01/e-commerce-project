import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "../../redux/actions/productsAction";

const ViewAllProductsBarndHook = (brandID) => {
  const dispatch = useDispatch();
  let limit = 8;

  const getProduct = async () => {
    await dispatch(getAllProductsByBrand("", limit, brandID));
  };

  useEffect(() => {
    getProduct();
  }, []);

  //when click pagination
  const onPress = async (page) => {
    await dispatch(getAllProductsByBrand(page, limit, brandID));
  };

  const allBrand = useSelector((state) => state.allproducts.allProductBrand);

  let items = [];
  try {
    if (allBrand.data) {
      items = allBrand.data;
    } else {
      items = [];
    }
  } catch (e) {}

  let pagination = [];
  try {
    if (allBrand.paginationResult) {
      pagination = allBrand.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  return [onPress, items, pagination];
};

export default ViewAllProductsBarndHook;
