import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/ordersAction";

const UserGetAllOrderHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  const [paginate, setPaginate] = useState({});
  const [results, setResult] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));

  let userName = "";
  if (user != null) {
    userName = user.name;
  }

  const limit = 5;
  const get = async () => {
    setLoading(true);
    await dispatch(getAllOrders("", limit));
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  const onPress = async (page) => {
    setLoading(true);
    await dispatch(getAllOrders(page, limit));
    setLoading(false);
  };

  const resAllOrder = useSelector((state) => state.orderReducer.getAllOrders);

  useEffect(() => {
    if (loading === false) {
      if (resAllOrder.data) {
        setOrderData(resAllOrder.data);
      }
      if (resAllOrder.paginationResult) {
        setPaginate(resAllOrder.paginationResult);
      }
      if (resAllOrder.results) {
        setResult(resAllOrder.results);
      }
    }
  }, [loading]);

  return [userName, results, paginate, orderData, onPress];
};

export default UserGetAllOrderHook;
