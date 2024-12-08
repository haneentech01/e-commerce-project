import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminAllOrdersItem = ({ orderItem }) => {
  console.log(orderItem);
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex px-2"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                طلب رقم: {orderItem.order_id}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col sm="12" className="d-flex flex-column justify-content-start">
              <div
                className="d-inline cat-title"
                style={{ fontWeight: "bold" }}
              >
                طلب من .. ({orderItem.user.name || ""})
              </div>
              <div
                style={{ color: "black" }}
                className="d-inline pt-2 cat-rate "
              >
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between">
            <Col xs="6" className="d-flex mt-1">
              <div>
                <div style={{ color: "black" }} className="d-inline">
                  التوصيل:
                </div>
                <div className="d-inline me-1 stat">
                  {orderItem.isDelivered === true
                    ? "تم التوصيل"
                    : " لم يتم التوصيل "}
                </div>
              </div>

              <div>
                <div style={{ color: "black" }} className="d-inline me-3">
                  ، الدفع:
                </div>
                <div className="d-inline stat me-2">
                  {orderItem.isPaid === true ? "تم الدفع" : "لم يتم الدفع "}
                </div>
              </div>

              <div>
                <div style={{ color: "black" }} className="d-inline me-3">
                  ، طرقة الدفع:
                </div>
                <div className="d-inline stat me-2">
                  {orderItem.paymentMethodType === "cash"
                    ? "كاش"
                    : "بطاقة ائتمانية"}
                </div>
              </div>
            </Col>
            
            <Col xs="6" className="d-flex justify-content-end">
              <div>
                <div className="barnd-text">
                  {orderItem.totalOrderPrice || 0} جنية
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
