import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetAllUserCartHook from "../cart/get-all-user-cart-hook";
import notify from "../useNotifaction";
import { createOrderCARD } from "../../redux/actions/checkoutAction";

const OrderPayCardHook = (addressDetalis) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [, , , , , cartID] = GetAllUserCartHook();

  const handelCreateOrderCARD = async () => {
    if (cartID === "0") {
      notify("من فضلك اضف منتجات الى العربه اولا", "warn");
      return;
    }

    if (addressDetalis.length <= 0) {
      notify("من فضلك اختر عنوان اولا", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createOrderCARD(cartID, {
        shippingAddress: {
          details: addressDetalis.alias,
          phone: addressDetalis.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };

  //get response for create order card
  const resOrderCard = useSelector(
    (state) => state.checkoutReducer.createOrderCard
  );

  useEffect(() => {
    if (loading === false) {
      if (resOrderCard && resOrderCard.status === "success") {
        notify("تم انشاء طلبك بنجاح", "success");
        if (resOrderCard.session.url) {
          window.open(resOrderCard.session.url);
        }
      } else {
        notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn");
      }
    }
  }, [loading]);

  return [handelCreateOrderCARD];
};

export default OrderPayCardHook;
