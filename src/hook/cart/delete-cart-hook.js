import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllCartItem,
  deleteCartItem,
} from "../../redux/actions/cartAction";
import notify from "../../hook/useNotifaction";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.clearCart);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handelDeleteItem = async () => {
    setLoading(true);
    await dispatch(deleteCartItem(item._id));
    setLoading(false);
    setShow(false);
    window.location.reload(false);
  };

  return [handelDeleteCart, show, handleClose, handleShow, handelDeleteItem];
};

export default DeleteCartHook;
