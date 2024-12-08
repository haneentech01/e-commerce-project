import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GetOrderDetalisHook from "../../hook/admin/get-order-detalis-hook";
import UserAllOrderItem from "../User/UserAllOrderItem";
import ChangeOrderStatusHook from "../../hook/admin/change-order-status-hook";
import { ToastContainer } from "react-toastify";

const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [orderData, cartItems] = GetOrderDetalisHook(id);
  const [onChangePaid, onChangeDeliver, changePayOrder, changeDeliverOrder] =
    ChangeOrderStatusHook(id);

  return (
    <div>
      <div className="mt-4">
        <UserAllOrderItem orderItem={orderData} />
      </div>

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.name : "") : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.phone : "") : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.email : "") : ""}
          </div>
        </Col>

        <div className="d-flex mt-2 justify-content-center mb-2">
          <div className="d-flex align-items-center mx-2">
            <select
              onChange={onChangePaid}
              name="pay"
              id="payid"
              className="select input-form-area text-center w-60"
            >
              <option value="0">الدفع</option>
              <option value="true">تم الدفع</option>
              <option value="false">لم يتم الدفع</option>
            </select>
            <button
              onClick={changePayOrder}
              className="btn-a px-3 d-inline mx-2 "
            >
              حفظ
            </button>
          </div>

          <div className="d-flex align-items-center mx-2">
            <select
              onChange={onChangeDeliver}
              name="deliver"
              id="deliver"
              className="select input-form-area text-center w-60"
            >
              <option value="0">التوصيل</option>
              <option value="true">تم التوصيل</option>
              <option value="false">لم يتم التوصيل</option>
            </select>
            <button
              onClick={changeDeliverOrder}
              className="btn-a px-3 d-inline mx-2 "
            >
              حفظ
            </button>
          </div>
        </div>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
