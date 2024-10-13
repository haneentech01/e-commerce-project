import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Uitily/SideFilter";
import CardProductsContainer from "../../Components/Products/‎CardProductsContainer";
import ViewSearchProductsHook from "../../hook/products/view-search-products-hook";
import Pagination from "../../Components/Uitily/Pagination";

const ShopProductsPage = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <div>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`هناك ${results} نتيجة بحث`}
        />
        <Row>
          <Col xs="2" sm="2" md="2">
            <SideFilter />
          </Col>

          <Col xs="10" sm="10" md="10">
            <CardProductsContainer products={items} title="" btnTitle="" />
          </Col>
        </Row>

        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
