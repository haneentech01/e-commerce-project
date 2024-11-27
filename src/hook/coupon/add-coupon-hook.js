import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getAllCoupon } from "../../redux/actions/couponAction";
import notify from "./../useNotifaction";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setCouponName(e.target.value);
  };

  const onChangeDate = (e) => {
    setCouponDate(e.target.value);
  };

  const onChangeValue = (e) => {
    setCouponValue(e.target.value);
  };

  const onSubmit = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل اسم الكوبون", "warn");
      return;
    }
    if (couponDate === "") {
      notify("من فضلك ادخل تاريخ انتهاء الكوبون", "warn");
      return;
    }

    if (couponValue <= 0) {
      notify("من فضلك نسبة خصم الكوبون", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      addCoupon({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.addCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
        notify("تمت اضافة الكوبون بنجاح", "success");
      } else if (res && res.status === 400) {
        notify("تمت اضافة الكوبون مسبقا", "error");
      } else if (res && res.status === 403) {
        notify("انتا غير مسموح لك بالاضافة", "error");
      }
    }
  }, [loading]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };
    get();
  }, []);

  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);

  let coupons = [];
  try {
    if (allCoupon && allCoupon.data.length >= 0) {
      coupons = allCoupon.data;
    }
  } catch (e) {
  }

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
  ];
};

export default AddCouponHook;
