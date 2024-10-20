import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";
import CardContainerHook from "../../hook/products/card-container-hook";

const CardProductsContainer = ({ title, btnTitle, pathText, products }) => {
  const [favProd] = CardContainerHook();

  return (
    <Container>
      {products ? (
        <SubTiltle title={title} btnTitle={btnTitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} favProd={favProd} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
