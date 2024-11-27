import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCoupon, getOneCoupon } from "../../redux/actions/couponAction";
import notify from "./../useNotifaction";

const EditCouponHook = (id) => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const navigate = useNavigate();

  const oneCoupon = useSelector((state) => state.couponReducer.oneCoupon);
  console.log(oneCoupon);

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupon(id));
      setLoadingData(false);
    };
    get();
  }, []);

  const onChangeName = (e) => {
    e.persist();
    setCouponName(e.target.value);
  };

  const onChangeDate = (e) => {
    e.persist();
    setCouponDate(e.target.value);
  };

  const onChangeValue = (e) => {
    e.persist();
    setCouponValue(e.target.value);
  };

  useEffect(() => {
    if (loadingData === false) {
      if (oneCoupon.data) {
        setCouponName(oneCoupon.data.name);
        setCouponDate(formatDate(oneCoupon.data.expire));
        setCouponValue(oneCoupon.data.discount);
      }
    }
  }, [loadingData]);

  const onSubmit = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل اسم الكوبون", "warn");
      return;
    } else if (couponDate === "") {
      notify("من فضلك ادخل تاريخ انتهاء الكوبون", "warn");
      return;
    } else if (couponValue <= 0) {
      notify("من فضلك ادخل قيمة خصم الكوبون", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      editCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.editCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/admin/addcoupon");
        }, 1000);
      } else {
        notify("فضل عملية التعديل ", "error");
      }
    }
  }, [loading]);

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
  ];
};

export default EditCouponHook;
