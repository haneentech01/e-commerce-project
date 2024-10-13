import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../Assets/images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../Uitily/Pagination";
import ViewAllReviewHook from "../../hook/review/view-all-review-hook";
import { useParams } from "react-router-dom";

const RateContainer = ({ rateQty, rateAvg }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);

  return (
    <Container className="rate-container">
      <Row>
        <Col Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQty} تقيم`})
          </div>
        </Col>
      </Row>

      {allReview.data ? (
        allReview.data.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        <h6>لا يوجد تقيمات الان</h6>
      )}

      <RatePost />

      {allReview.paginationResult &&
      allReview.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
