import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReviewOnProduct } from "../../redux/actions/reviewAction";
import notify from "../useNotifaction";

const EditRateHook = (review) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);
  const [loading, setLoading] = useState(true);

  const handleCloseEdit = () => setShowEdit(false);

  const handelEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };

  const onChangeRateValue = (val) => {
    setNewRateValue(val);
  };

  const handleShowEdit = async () => {
    setLoading(true);
    await dispatch(updateReviewOnProduct(review._id), {
      review: newRateText,
      rating: newRateValue,
    });
    setLoading(false);
    handleCloseEdit();
  };

  const res = useSelector((state) => state.reviewReducer.updateReview);

  useEffect(() => {
    if (loading === false) {
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكلة فى عملية التعديل", "error");
      }
    }
  }, [loading]);

  return [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  ];
};

export default EditRateHook;
