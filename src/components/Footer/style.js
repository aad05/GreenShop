import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fbfbfb;
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  /* margin: 25px; */
  margin: 20px 0 20px 20px;
  border-right: 1px solid rgba(70, 163, 88, 0.2); ;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  margin-bottom: ${(props) => (props.marginBottom ? "18px" : "9px")};
  color: #3d3d3d;
`;

const PreTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
  margin-left: ${(props) => (props.marginLeft ? "12px" : "0")};
`;

const Img = styled.img`
  width: ${(props) => (props.wizz ? "25px" : "100px")};
  margin-bottom: 15px;
  margin: ${(props) => (props.wizz ? "auto" : "")};
  padding: ${(props) => (props.wizz ? "5px" : "")};
`;

const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const InfoConInputCon = styled.div`
  width: 354px;
  display: flex;
`;

const InfoConInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px 0 0 6px;
  width: 354px;
  height: 40px;
  margin-bottom: 18px;
  border: none;
  outline: none;
  padding: 11px;
`;

const InfoConInputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 40px;
  background: #46a358;
  border-radius: 0px 6px 6px 0px;
  padding: 12px 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;

  color: #ffffff;
`;

const FooterBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 23px;
  background: rgba(70, 163, 88, 0.1);
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
  }
`;

const Divv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(70, 163, 88, 0.2);
  border-radius: 4px;
  margin: 5px;
`;
export {
  Wrapper,
  FooterTop,
  Card,
  Title,
  PreTitle,
  Img,
  InfoCon,
  InfoConInput,
  InfoConInputCon,
  InfoConInputButton,
  FooterBody,
  Content,
  FooterBottom,
  Column,
  Divv,
};
