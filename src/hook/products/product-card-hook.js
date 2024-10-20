import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductToWishList,
} from "../../redux/actions/wishListAction";
import notify from "./../../hook/useNotifaction";
import favOff from "../../Assets/images/fav-off.png";
import favOn from "../../Assets/images/fav-on.png";

const ProductCardHook = (favProd, item) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favOff);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);

  // Check if item is in the wishlist, fallback to favProd for initial check
  // fitem fixed it doesn't change so I must make re-render to compnent to change (when add it he doesn't change when I want to remove or the oppsete)
  let fav = favProd.some((fitem) => fitem === item._id);

  //when I make it true it will re-render the component
  const [isFav, setIsFav] = useState(fav);

  // علشان لو النت ضعيف يحمل عندي البيانات
  useEffect(() => {
    setIsFav(favProd.some((fitem) => fitem === item._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favOn);
    } else {
      setFavImg(favOff);
    }
  }, [isFav]);

  // Add to wishlist action
  const addToWishListData = async () => {
    // He will go to useEffect and see it true => setFavImg(favOn);
    setIsFav(true);
    setFavImg(favOn);
    setLoadingAdd(true);
    await dispatch(addProductToWishList({ productId: item._id }));
    setLoadingAdd(false);
  };

  // Remove from wishlist action
  const removeToWishListData = async () => {
    // He will go to useEffect and see it fasle => setFavImg(favOff);
    setIsFav(false);
    setFavImg(favOff);
    setLoadingRemove(true);
    await dispatch(removeProductToWishList(item._id));
    setLoadingRemove(false);
  };

  // Fetch responses from Redux for add/remove actions
  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  // Handle toast notifications for successful add/remove actions
  useEffect(() => {
    if (loadingAdd === false) {
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify("من فضلك سجل دخول", "error");
      }
    }
  }, [loadingAdd, resAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("من فضلك سجل دخول", "error");
      }
    }
  }, [loadingRemove, resRemove]);

  return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default ProductCardHook;
