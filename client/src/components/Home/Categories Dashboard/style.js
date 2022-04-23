import styled from 'styled-components';
import { Slider } from 'antd';

export const Wrapper = styled.div`
  flex: 1;
  background: #fbfbfb;
  padding: 14px 18px;
  margin-right: 50px;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
`;
export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 1em;
  line-height: 40px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 0 12px 12px 0;
  transition: padding-left 0.3s;
  justify-content: space-between;
  padding-right: 10px;
  background: ${({ active }) => active && `rgba(70, 163, 88, 0.95)`};
  color: ${({ active }) => active && `#fff`};
  padding-left: ${({ active }) => active && `20px`};
  :hover {
    padding-left: 20px;
    background: rgba(70, 163, 88, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: #fff;
  }
`;
export const PriceWrap = styled.div`
  display: flex;
  font-style: normal;
  font-size: 15px;
  line-height: 16px;
  align-items: center;
  height: 30px;
  font-weight: 300;
`;
export const Price = styled.div`
  font-weight: 600;
  color: #46a358;
  padding-left: 5px;
`;
export const DashBoard = styled.img`
  height: 470px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FilterButton = styled.div`
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  margin-bottom: 46px;
`;
Wrapper.Slider = styled(Slider)`
  .ant-slider-track {
    border: 2px solid #46a358;
  }
  .ant-slider-handle {
    background: #46a358;
    width: 15px;
    height: 15px;
    border: 2px solid #fff;
  }
`;
