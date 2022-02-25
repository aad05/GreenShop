import styled from 'styled-components';

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
`;
export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  color: #46a358;
  padding-left: ${({ left }) => left && '5px'};
`;
