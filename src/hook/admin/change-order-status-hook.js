import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderDeliver, changeOrderPay } from "../../redux/actions/ordersAction";
import notify from "../useNotifaction";

const ChangeOrderStatusHook = (id) => {
  const dispatch = useDispatch();

  const [pay, setPay] = useState(0);
  const [deliver, setDeliver] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);

  const onChangePaid = (e) => {
    setPay(e.target.value);
  };

  const onChangeDeliver = (e) => {
    setDeliver(e.target.value);
  };

  const changePayOrder = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(changeOrderPay(id));
      setLoading(false);
    } else if (pay === "0") {
      console.log("من فضلك اختر قيمة");
    }
  };

  const changeDeliverOrder = async () => {
    if (deliver === "true") {
      setLoadingDeliver(true);
      await dispatch(changeOrderDeliver(id));
      setLoadingDeliver(false);
    } else if (deliver === "0") {
      console.log("من فضلك اختر قيمة");
    }
  };

  //get order pay change
  const resOneOrder = useSelector((state) => state.orderReducer.changePay);
  useEffect(() => {
    if (loading === false) {
      if (resOneOrder && resOneOrder.status === 200) {
        notify("تم تغير حالة الدفع بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكلة فى عملية التغير", "error");
      }
    }
  }, [loading]);

  //get order deliver change
  const resDeliverOrder = useSelector(
    (state) => state.orderReducer.changeDeliver
  );
  useEffect(() => {
    if (loadingDeliver === false) {
      if (resDeliverOrder && resDeliverOrder.status === 200) {
        notify("تم تغير حالة التوصيل بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكلة فى عملية التغير", "error");
      }
      console.log(resDeliverOrder);
    }
  }, [loadingDeliver]);

  return [onChangePaid, onChangeDeliver, changePayOrder, changeDeliverOrder];
};

export default ChangeOrderStatusHook;
