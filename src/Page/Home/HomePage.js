import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Silder from "./../../Components/Home/Slider";
import DiscountSection from "./../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Silder />
      <HomeCategory />
      <CardProductsContainer
        products={items}
        title="الاكثر مبيعا"
        btnTitle="المزيد"
        pathText="/products"
      />

      <DiscountSection />

      <CardProductsContainer
        products={items}
        title="احدث الازياء"
        btnTitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="اشهر الماركات" btnTitle="المزيد" />
    </div>
  );
};

export default HomePage;
