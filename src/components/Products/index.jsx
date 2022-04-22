import React from "react";
import { CouponApplyPage } from "./CouponApplyPage";
import ProductCarousel from "./ProductsCarousel";
import { Wrapper } from "./style";

const Products = () => {
  return (
    <Wrapper>
      <CouponApplyPage />
      <ProductCarousel />
    </Wrapper>
  );
};

export default Products;
