import React from "react";
import { Row, Col } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrderItem = ({ orderItem }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-order mt-2">
      <Row className="me-2 ms-2">
        <div className="py-3 order-title">
          طلب رقم: {orderItem.order_id || 0} ، تم بتاريخ {"  "}
          {formatDate(orderItem.updatedAt)}
        </div>
      </Row>

      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => {
            return <UserAllOrderCard key={index} item={item} />;
          })
        : null}

      <Row className="d-flex justify-content-between  me-2 ">
        <Col xs="6" className="d-flex">
          <div>
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === true ? "تم التوصيل" : "لم يتم التوصيل"}
            </div>
          </div>

          <div>
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === true ? "تم الدفع" : "لم يتم الدفع بعد"}
            </div>
          </div>

          <div>
            <div className="d-inline">طريقة الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "cash"
                ? "كاش"
                : "بطاقة ائتمانية"}
            </div>
          </div>
        </Col>

        <Col xs="6" className="d-flex justify-content-end">
          <div className="me-2 ms-2 mb-4 mt-2">
            <div className="barnd-text">
              {orderItem.totalOrderPrice || 0} جنيه
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
