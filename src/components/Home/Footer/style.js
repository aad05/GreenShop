import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: fit-content;
  margin: auto;
`;

const FooterCards = styled.div`
  background: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 23px;
`;

const FooterCardsCon = styled.div`
  width: 20%;
  height: fit-content;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 2px solid rgba(70, 163, 88, 0.1);
  display: flex;
  flex-direction: column;
`;

const FooterCardImg = styled.img`
  width: 80px;
  margin-bottom: 15px;
`;

const FooterCardTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 10px;
`;

const FooterCardPreTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
`;

const FooterFormCon = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
`;

const FooterFormInputCon = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 354px;
  height: 40px;
  margin-bottom: 17px;
`;

const FooterFormInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px 0 0 6px;
  padding: 12px;
  width: 100%;
  height: 40px;
  border: none;
`;

const FooterFormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #46a358;
  border-radius: 0px 6px 6px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #ffffff;
  padding: 12px 20px;
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;
  background: rgba(70, 163, 88, 0.1);
  height: 88px;
  border-top: 2px solid rgb(0, 128, 0, 0.1);
  border-bottom: 2px solid rgb(0, 128, 0, 0.1);
`;

const FooterContactCon = styled.div`
  padding: 0 23px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;

const FooterAboutContact = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 25px;
`;

const DisplayFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  Wrapper,
  FooterCards,
  FooterCardsCon,
  FooterCardImg,
  FooterCardTitle,
  FooterCardPreTitle,
  DisplayFlexColumn,
  FooterFormCon,
  FooterFormInputCon,
  FooterFormInput,
  FooterFormButton,
  FooterContact,
  FooterContactCon,
  DisplayFlex,
  FooterAboutContact,
};
