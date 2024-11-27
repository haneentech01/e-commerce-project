import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";
import notify from "../../hook/useNotifaction";

const AddToCartHook = (prdID, item) => {
  const dispatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  const addToCartHandel = async () => {
    console.log(item.availableColors);
    if (item.availableColors.length >= 1) {
      if (colorText === "") {
        notify("من فضلك اختر لون للمنتج", "warn");
        return;
      }
    } else {
      setColorText("");
    }
    setLoading(true);
    await dispatch(addProductToCart({ productId: prdID, color: colorText }));
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت اضافة المنتج للعربة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("قم بتسجيل الدخول", "warn");
      }
    }
  }, [loading]);

  return [colorClick, indexColor, addToCartHandel];
};

export default AddToCartHook;
