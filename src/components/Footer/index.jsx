import React from "react";
import { footerBody } from "../../mock/Footer/footerBody";
import { footerData } from "../../mock/Footer/footerTop";
import Logo from "../../assets/icons/logo.svg";
import Icon1 from "../../assets/imgs/FooterImages/icon1.png";
import Icon2 from "../../assets/imgs/FooterImages/icon2.png";
import Icon3 from "../../assets/imgs/FooterImages/icon3.png";
import Icon4 from "../../assets/imgs/FooterImages/icon4.png";
import Icon5 from "../../assets/imgs/FooterImages/icon5.png";
import Visa from "../../assets/imgs/FooterImages/visa.svg";

import {
  Card,
  Column,
  Content,
  Divv,
  FooterBody,
  FooterBottom,
  FooterTop,
  Img,
  InfoCon,
  InfoConInput,
  InfoConInputButton,
  InfoConInputCon,
  PreTitle,
  Title,
  Wrapper,
} from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop>
        {footerData.map((value) => {
          return (
            <Card key={value.id}>
              <Img src={value.icon} alt="" />
              <Title>{value.title}</Title>
              <PreTitle>{value.preTitle}</PreTitle>
            </Card>
          );
        })}
        <InfoCon>
          <Title marginBottom>Would you like to join newsletters?</Title>
          <InfoConInputCon>
            <InfoConInput
              type={"text"}
              placeholder="enter your email address..."
            />
            <InfoConInputButton>Join</InfoConInputButton>
          </InfoConInputCon>
          <PreTitle>
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </PreTitle>
        </InfoCon>
      </FooterTop>
      <FooterBody>
        <img src={Logo} alt="" />
        {footerBody.map((value) => {
          return (
            <Content key={value.id}>
              <img src={value.icon} alt="logo" />
              <PreTitle marginLeft>{value.title}</PreTitle>
            </Content>
          );
        })}
      </FooterBody>
      <FooterBottom>
        <Column>
          <Title>My Account</Title>
          <PreTitle>My Account</PreTitle>
          <PreTitle>Address</PreTitle>
          <PreTitle>Wishlist</PreTitle>
        </Column>
        <Column>
          <Title>Categories</Title>
          <PreTitle>House Plants</PreTitle>
          <PreTitle>Potter Plants</PreTitle>
          <PreTitle>Seeds</PreTitle>
          <PreTitle>Small Plants</PreTitle>
          <PreTitle>Accessories</PreTitle>
        </Column>
        <Column>
          <Title>Social Media</Title>
          <div style={{ marginBottom: "20px" }}>
            <Divv>
              <Img wizz src={Icon1} />
            </Divv>
            <Divv>
              <Img wizz src={Icon2} />
            </Divv>
            <Divv>
              <Img wizz src={Icon3} />
            </Divv>
            <Divv>
              <Img wizz src={Icon4} />
            </Divv>
            <Divv>
              <Img wizz src={Icon5} />
            </Divv>
          </div>
          <Title>We accept</Title>
          <img src={Visa} alt="" />
        </Column>
      </FooterBottom>
      <h5 style={{ textAlign: "center" }}>© 2022 GreenShop. All Rights Reserved.</h5>
    </Wrapper>
  );
};

export default Footer;
