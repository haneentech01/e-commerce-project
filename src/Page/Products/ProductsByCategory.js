import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/‎CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";
import { useParams } from "react-router-dom";
import ViewAllProductsCategoryHook from "../../hook/products/view-all-products-category-hook";

const ProductsByCategory = () => {
  const { id } = useParams();
  const [items, pagination, onPress] = ViewAllProductsCategoryHook(id);

  if (pagination) {
    var pageCount = pagination;
  } else pageCount = 0;

  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer title="" btnTitle="" products={items} />
          </Col>
          <Pagination pageCount={pageCount} onPress={onPress} />
        </Row>
      </Container>
    </div>
  );
};

export default ProductsByCategory;
