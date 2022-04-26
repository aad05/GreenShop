import styled from 'styled-components';
import { Modal } from 'antd';
import {ReactComponent as modal} from '../../../../assets/icons/ordermodal.svg'

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
  padding: 0;
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
  .ant-modal-body{
    padding: 0;
  }

  .ant-modal-footer{
    padding: 0;
  }
`;


export const ModalMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 156px;
  background: rgba(70, 163, 88, 0.06);
`

ModalMain.Logo = styled(modal)`

`

ModalMain.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #727272;
  margin-top: 16px;
`

ModalMain.Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  padding: 0 38px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.2);;
`

ModalMain.SubWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid rgba(70, 163, 88, 0.2);
  align-items: center;
  :last-child{
    border-right: 0;
  }
  
`

ModalMain.Order = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
`

ModalMain.Number = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #727272;
  margin-top: 3px;
`

export const OrderDetail = styled.div`
  width: 100%;
  padding: 0 38px;
`

OrderDetail.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #3D3D3D;
  margin-top: 18px;
  margin-bottom: 12px;
`

OrderDetail.Wrapper = styled.div`
  width: 100%;
  display: flex;
`

OrderDetail.Item1 = styled.div`
  flex: 5;
`

OrderDetail.Item2 = styled.div`
  flex: 1;
`

OrderDetail.Item3 = styled.div`
  flex: 2;
  align-content: flex-end;
`

OrderDetail.Titles = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3D3D3D;
  padding-bottom: 11px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  display: flex;
  justify-content: ${({end}) => end && 'flex-end'};
`

OrderDetail.Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #FBFBFB;
  margin-top: 11px;
`

OrderDetail.Img = styled.img`
  width: 70px;
  height: 70px;
`

OrderDetail.Right = styled.div`
  padding-left: 5px;
`

OrderDetail.Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3D3D3D;
`

OrderDetail.Sku = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #A5A5A5;
  margin-top: 6px;
`

OrderDetail.Qty = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #727272;
`

OrderDetail.Subtotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46A358;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`


export const Shipping = styled.div`
  display: flex;
  margin-top: 18px;
  border-bottom: ${({last}) => last && '0.3px solid rgba(70, 163, 88, 0.5)'};
  padding-bottom: ${({last}) => last && '20px'};
`

Shipping.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
    flex: 2;
    display: flex;
    justify-content: center;
  `

Shipping.Price = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #3D3D3D;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

Shipping.Total = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3D3D3D;
  flex: 2;
    display: flex;
    justify-content: center;
`

Shipping.PriceGreen = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46A358;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

OrderDetail.Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #727272;
  margin: 10px 0 25px 0;
  padding: 0 5px;
`

OrderDetail.Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 45px;
  background: #46A358;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;
  margin: auto;
  margin-bottom: 30px;
`