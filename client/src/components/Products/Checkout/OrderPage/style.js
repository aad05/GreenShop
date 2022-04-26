import styled from 'styled-components';
import { Modal } from 'antd';

export const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 36px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Nav_item = styled.div`
  font-style: normal;
  font-weight: ${({ option }) => (option ? 'bold' : 'normal')};
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  padding: 0 5px 0 5px;
`;

export const Left = styled.div`
  flex: 2;
  .inputs-first {
    margin-top: 50px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 48%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #a5a5a5;
  }
`;

export const Notes = styled.textarea`
  width: 48%;
  height: 140px;
  padding: 10px;
  outline: none;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #a5a5a5;
  }
`;
export const Right = styled.div`
  flex: 1.2;
  margin-left: 40px;
`;

export const Righttitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 50px;
`;

export const Righttotalsubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid #eaeaea;
  padding-bottom: 10px;
`;

export const Righttotal = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 15px;
`;

export const Rightcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #fbfbfb;
  margin-top: 10px;
`;

export const Rightcardimg = styled.img`
  height: 100px;
`;

export const Rightcardwrapper = styled.div``;

export const Rightcardtitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Rightcarddesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
  margin-top: 6px;
`;

export const Rightcardcount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #727272;
`;

export const Rightcardprice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
  padding-right: 10px;
`;

export const Haveacouponcode = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const Clickhere = styled.div`
  color: #46a358;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
`;

export const Rightrightwrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Rightflexright = styled.div`
  width: 80%;
`;

export const RightFlexitem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Rightflextitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Rightflexprice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
`;

export const Rightflexview = styled.div`
  display: flex;
  justify-content: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #46a358;
  margin-top: 10px;
`;

export const RightFlexitem2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-top: 1px solid rgba(70, 163, 88, 0.5);
  padding-top: 10px;
`;

export const Paymentmethods = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 30px;
`;

export const Payementwrapper = styled.div`
  display: flex;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  height: 45px;
  margin-top: 17px;
  align-items: center;
  padding: 0 10px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1.2px solid #46a358;
  box-sizing: border-box;
  border-radius: 50%;
  accent-color: #46a358;
`;

export const Paypals = styled.img`
  margin-left: 10px;
`;

export const Paymenttitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  margin-left: 10px;
`;

export const Placeorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #46a358;
  border-radius: 3px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  :hover {
    transform: scale(0.97);
  }
`;
Wrapper.Modal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ant-btn-default {
    display: none;
  }
  .ant-btn-primary {
    display: none;
  }
  .ant-modal-close-x {
    :hover {
      color: #46a359;
    }
  }
`;
