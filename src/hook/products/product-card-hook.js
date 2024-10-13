import React, { useEffect, useState } from "react";
import favoff from "../../Assets/images/fav-off.png";
import favon from "../../Assets/images/fav-on.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductToWishList,
} from "../../redux/actions/wishListAction";
import notify from "./../../hook/useNotifaction";

const ProductCardHook = (item) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  const [isFav, setIsFav] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);

  const handelFav = () => {
    setIsFav(!isFav);
  };

  useEffect(() => {
    if (isFav === false) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  }, [isFav]);

  const addToWishListData = async () => {
    setLoadingAdd(true);
    await dispatch(addProductToWishList({ productId: item._id }));
    setFavImg(favon);
    setLoadingAdd(false);
  };

  const removeToWishListData = async () => {
    setLoadingRemove(true);
    await dispatch(removeProductToWishList({ productId: item._id }));
    setFavImg(favoff);
    setLoadingRemove(false);
  };

  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  useEffect(() => {
    if (loadingAdd === false) {
      console.log(resAdd);
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify("من فضلك سجل دخول", "error");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      console.log(resRemove);
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("من فضلك سجل دخول", "error");
      } else if (resAdd && resAdd.status === 500) {
        notify("هناك مشكلة", "error");
      }
    }
  }, [loadingRemove]);

  return [favImg, isFav, handelFav,];
};

export default ProductCardHook;
