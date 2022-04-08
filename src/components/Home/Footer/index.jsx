import React from "react";
import {
  FooterCardImg,
  FooterCardPreTitle,
  FooterCards,
  FooterCardsCon,
  FooterCardTitle,
  Wrapper,
  FooterFormCon,
  FooterFormInputCon,
  FooterFormInput,
  FooterFormButton,
  FooterContact,
  FooterContactCon,
  DisplayFlex,
  FooterAboutContact,
  DisplayFlexColumn,
} from "./style";
import { footerCard } from "../../../mock/Categories/footer/footerCard";
import { footerContact } from "../../../mock/Categories/footer/footerContact";
import Logo from "../../../assets/icons/logo.svg";
import { footerAbout } from "../../../mock/Categories/footer/footerAbout";

const Footer = () => {
  return (
    <Wrapper>
      <FooterCards>
        {footerCard.map((value) => {
          return (
            <FooterCardsCon>
              <FooterCardImg src={value.img} alt="" />
              <FooterCardTitle>{value.title}</FooterCardTitle>
              <FooterCardPreTitle>{value.preTitle}</FooterCardPreTitle>
            </FooterCardsCon>
          );
        })}
        <FooterFormCon>
          <FooterCardTitle>Would you like to join newsletters?</FooterCardTitle>
          <FooterFormInputCon>
            <FooterFormInput placeholder="enter your email address..." />
            <FooterFormButton>Join</FooterFormButton>
          </FooterFormInputCon>
          <FooterCardPreTitle>
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </FooterCardPreTitle>
        </FooterFormCon>
      </FooterCards>
      <FooterContact>
        <FooterContactCon>
          <img src={Logo} alt="" />
          {footerContact.map((value) => {
            return (
              <DisplayFlex>
                <img src={value.icon} width="20px" alt="" />
                <FooterCardPreTitle>{value.title}</FooterCardPreTitle>
              </DisplayFlex>
            );
          })}
        </FooterContactCon>
      </FooterContact>
      <FooterAboutContact>
        {footerAbout.map((value) => {
          return (
            <>
              <DisplayFlexColumn>
                <FooterCardTitle>My Account</FooterCardTitle>
                {value.account.map((value) => {
                  return <p>{value.title}</p>;
                })}
              </DisplayFlexColumn>
              <DisplayFlexColumn>
                <FooterCardTitle>Categories</FooterCardTitle>
                {value.category.map((value) => {
                  return <p>{value.title}</p>;
                })}
              </DisplayFlexColumn>
              <DisplayFlexColumn>
                <FooterCardTitle>Social Media</FooterCardTitle>
                <div>
                  {value.social.map((value) => {
                    return (
                      <img style={{ marginLeft: "7px" }} src={value.icon} />
                    );
                  })}
                </div>
              </DisplayFlexColumn>
            </>
          );
        })}
      </FooterAboutContact>
    </Wrapper>
  );
};

export default Footer;
