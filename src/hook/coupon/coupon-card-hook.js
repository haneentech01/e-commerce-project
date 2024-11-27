import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";

const CouponCardHook = (coupon) => {
  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    window.location.reload(false);
  };

  return [dateString, formatDate, show, handleClose, handleShow, handelDelete];
};

export default CouponCardHook;
