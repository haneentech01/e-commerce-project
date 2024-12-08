import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UserGetAllOrderHook from "../../hook/user/user-get-all-order-hook";
import Pagination from "./../Uitily/Pagination";

const UserAllOrder = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();

  const getOrderText = (count) => {
    if (count === 1) return `${count} طلب`;
    if (count === 2) return `${count} طلبين`;
    if (count >= 3 && count <= 10) return `${count} طلبات`;
    if (count > 10) return `${count} طلب`;
    return "لا يوجد طلبات";
  };
  return (
    <div>
      <div className="admin-content-text pb-4 mt-3">
        {results > 0 ? (
          `عدد الطلبات: ${getOrderText(results)}`
        ) : (
          <h6>لا يوجد طلبات حتى </h6>
        )}
      </div>

      <Row>
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UserAllOrderItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h6>لا يوجد طلبات حتى </h6>
        )}

        {paginate.numberOfPages >= 2 ? (
          <Pagination
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null}
      </Row>
    </div>
  );
};

export default UserAllOrder;
