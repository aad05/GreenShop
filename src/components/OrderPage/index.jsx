import React, { useState } from "react";
import {
  Checkbox,
  Click__here,
  Container,
  Have__a__coupon__code,
  Input,
  Inputs,
  Left,
  Nav_item,
  Notes,
  Payement__wrapper,
  Payment__methods,
  Payment__title,
  Paypals,
  Place__order,
  Right,
  Right__card,
  Right__card__count,
  Right__card__desc,
  Right__card__img,
  Right__card__price,
  Right__card__title,
  Right__card__wrapper,
  Right__Flex__item,
  Right__Flex__item2,
  Right__flex__price,
  Right__flex__right,
  Right__flex__title,
  Right__flex__view,
  Right__right__wrapper,
  Right__title,
  Right__total,
  Right__total__subtotal,
  Wrapper,
} from "./style";
import img1 from "../../assets/imgs/orderpage1.png";
import img2 from "../../assets/imgs/orderpage2.png";
import img3 from "../../assets/imgs/orderpage3.png";
import payment from "../../assets/imgs/payement-types.png";

export const OrderPage = () => {
  const [nav, setNav] = useState("home");
  const [order, setOrder] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Nav_item option={nav === "home" && nav} onClick={() => setNav("home")}>
          Home
        </Nav_item>
        <Nav_item>/</Nav_item>
        <Nav_item option={nav === "shop" && nav} onClick={() => setNav("shop")}>
          Shop
        </Nav_item>
        <Nav_item>/</Nav_item>
        <Nav_item
          option={nav === "shopCard" && nav}
          onClick={() => setNav("shopCard")}
        >
          Shopping Card
        </Nav_item>
      </Wrapper>
      <Wrapper>
        <Left>
          <Right__title>Billing Address</Right__title>
          <Inputs className="inputs-first">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </Inputs>
          <Inputs>
            <Input placeholder="Country / Region" />
            <Input placeholder="Town / City" />
          </Inputs>
          <Inputs>
            <Input placeholder="House number and street name" />
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
          </Inputs>
          <Inputs>
            <Input placeholder="Select a state" />
            <Input placeholder="Zip" />
          </Inputs>
          <Inputs>
            <Input placeholder="Email address" />
            <Input placeholder="Phone Number" />
          </Inputs>
          <Inputs>
            <Notes placeholder="Order notes (optional)" />
          </Inputs>
        </Left>
        <Right>
          <Right__title>Your Order</Right__title>
          <Right__total__subtotal>
            <Right__total>Products</Right__total>
            <Right__total>Subtotal</Right__total>
          </Right__total__subtotal>
          <Right__card>
            <Right__card__img src={img1} />
            <Right__card__wrapper>
              <Right__card__title>Barberton Daisy</Right__card__title>
              <Right__card__desc>SKU: 1995751877966</Right__card__desc>
            </Right__card__wrapper>
            <Right__card__count>(x 2)</Right__card__count>
            <Right__card__price>$238.00</Right__card__price>
          </Right__card>
          <Right__card>
            <Right__card__img src={img2} />
            <Right__card__wrapper>
              <Right__card__title>Blushing Bromeliad</Right__card__title>
              <Right__card__desc>SKU: 1995751877966</Right__card__desc>
            </Right__card__wrapper>
            <Right__card__count>(x 6)</Right__card__count>
            <Right__card__price>$834.00</Right__card__price>
          </Right__card>
          <Right__card>
            <Right__card__img src={img3} />
            <Right__card__wrapper>
              <Right__card__title>Aluminum Plant</Right__card__title>
              <Right__card__desc>SKU: 1995751877966</Right__card__desc>
            </Right__card__wrapper>
            <Right__card__count>(x 9)</Right__card__count>
            <Right__card__price>$1,611.00</Right__card__price>
          </Right__card>
          <Have__a__coupon__code>
            Have a coupon code? <Click__here> Click here</Click__here>
          </Have__a__coupon__code>
          <Right__right__wrapper>
            <Right__flex__right>
              <Right__Flex__item>
                <Right__flex__title>Subtotal</Right__flex__title>
                <Right__flex__price>$2,683.00</Right__flex__price>
              </Right__Flex__item>
              <Right__Flex__item>
                <Right__flex__title>Coupon Discount</Right__flex__title>
                <Right__flex__price>(-) 00.00</Right__flex__price>
              </Right__Flex__item>
              <Right__Flex__item>
                <Right__flex__title>Shiping</Right__flex__title>
                <Right__flex__price>$16.00</Right__flex__price>
              </Right__Flex__item>
              <Right__flex__view>View shipping charge</Right__flex__view>
              <Right__Flex__item2>
                <Right__card__title>Total</Right__card__title>
                <Right__card__price>$2,699.00</Right__card__price>
              </Right__Flex__item2>
              <Payment__methods>Payement Methods</Payment__methods>
              <Payement__wrapper>
                <Checkbox type="checkbox" />
                <Paypals src={payment} />
              </Payement__wrapper>
              <Payement__wrapper>
                <Checkbox type="checkbox" />
                <Payment__title>Dorect bank transfer</Payment__title>
              </Payement__wrapper>
              <Payement__wrapper>
                <Checkbox type="checkbox" />
                <Payment__title>Cash on delivery</Payment__title>
              </Payement__wrapper>
              <Place__order onClick={() => setOrder(true)}>
                Place Order
              </Place__order>
            </Right__flex__right>
          </Right__right__wrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};
