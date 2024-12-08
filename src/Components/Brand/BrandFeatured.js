import React from "react";
import { Container, Spinner, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btnTitle }) => {
  const [brand, loading] = HomeBrandHook();

  return (
    <Container>
      {/* هادا الكود بصير لو طولت شوي في التحميل بضرب عندي ايرور ف انا لازم اضيف كمان كود انه علشان ما يصير هيك واحنا اصلا بدناش ياها لكن للمعلومة */}
      {/* { brand.data.length > 0 ? () :null } */}
      <SubTiltle title={title} btnTitle={btnTitle} pathText="/allbrand" />

      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand.data ? (
            brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard id={item._id} key={index} img={item.image} />;
            })
          ) : (
            <h4>لا يوجد ماركات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
