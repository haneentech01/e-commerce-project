import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/actions/cartAction";

const UpdateCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };

  useEffect(() => {
    if (item) {
      setItemCount(item.count);
    }
  }, []);

  const handeleUpdateCart = async () => {
    setLoading(true);
    await dispatch(
      updateCartItem(item._id, {
        count: itemCount,
      })
    );
    setLoading(false);
    window.location.reload(false);
  };

  return [itemCount, onChangeCount, handeleUpdateCart];
};

export default UpdateCartHook;
