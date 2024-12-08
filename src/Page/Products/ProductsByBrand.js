import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/‎CardProductsContainer";
import { useParams } from "react-router-dom";
import Pagination from "../../Components/Uitily/Pagination";
import ViewAllProductsBarndHook from "../../hook/products/view-all-products-barnd-hook";

const ProductsByBrand = () => {
  const { id } = useParams();
  const [onPress, items, pagination] = ViewAllProductsBarndHook(id);

  let pageCount = 0;
  if (pagination) {
    pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer products={items} title="" btnTitle="" />
          </Col>
        </Row>
        <Pagination onPress={onPress} pageCount={pageCount} />
      </Container>
    </div>
  );
};

export default ProductsByBrand;
