import styled from 'styled-components';
import { ReactComponent as deletee } from '../../../assets/icons/delete.svg';

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${({ products }) => (products ? '51px' : '36px')};
`;

export const Navitem = styled.div`
  font-style: normal;
  font-weight: ${({ option }) => (option ? 'bold' : 'normal')};
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  padding: 0 5px 0 5px;
`;

export const Left = styled.div`
  width: 60%;
`;

export const Wrappertable = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Wrapper2 = styled.div`
  display: flex;
  background: #fbfbfb;
  margin-top: 15px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
`;

export const LeftTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Leftdesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
  margin-top: 6px;
`;

export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  width: 21.71px;
  height: 25px;
  left: 578px;
  top: 241px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 29px;
  cursor: pointer;
`;

export const Count = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 10px;
  color: #3d3d3d;
  margin: 0 10px;
`;

export const Deleteicon = styled(deletee)`
  transition: all 0.2s ease;
  :active {
    transform: scale(0.97);
  }
`;

export const Delete = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
`;

export const Total = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #46a358;
`;

export const Right = styled.div`
  width: 40%;
  padding-left: 75px;
`;

export const RightTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  padding-bottom: 15px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5); ;
`;

export const Rightapply = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 10px;
`;

export const Rightwrapper = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const Rightinput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #46a358;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
`;

export const Rightbtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 102px;
  height: 40px;
  background: #46a358;
  border-radius: 0px 3px 3px 0px;
  color: white;
`;

export const Sub = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Rightwrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Rightprice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
`;

export const Rightwrapper3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Righttotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Righttotalprice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
`;

export const Checkout = styled.div`
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
  margin-top: 27px;
`;

export const Continueshopping = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #46a358;
  margin-top: 10px;
`;
