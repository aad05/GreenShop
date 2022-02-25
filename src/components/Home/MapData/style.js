import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    padding-right: 0px;
  }
  to {
    padding-right: 10px;
  }
`;

export const Wrapper = styled.div`
  flex: 4;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const SortByDateWrap = styled.div`
  display: flex;
  align-items: center;
`;
SortByDateWrap.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#46A358' : '#3d3d3d')};
  margin-left: ${({ left }) => left && `37px`};
  cursor: pointer;
  width: fit-content;
  box-shadow: ${({ active }) => active && '0 3px 0 #46a358'};
  transition: 0.4s all ease;
`;
export const SortByPriceWrap = styled.div`
  display: flex;
  align-items: center;
`;
SortByPriceWrap.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
SortByPriceWrap.Select = styled.select`
  border: none;
  outline: none;
  padding-left: 10px;
`;
SortByPriceWrap.Option = styled.option``;
export const Body = styled.div`
  position: relative;
`;
Body.Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 90px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
Body.Card = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  :hover {
    .hover {
      display: flex;
    }
  }
`;
Body.Img = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
`;
Body.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 31px;
`;
Body.Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
  margin-top: 6px;
`;
Body.HoverableWrap = styled.div`
  display: none;
  position: absolute;
  bottom: 25%;
  right: 50px;
  animation: ${moveLeft} 1s;
  padding-right: 10px;
`;
Body.HoverableIcons = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ right }) => right && `10px`};
  cursor: pointer;
  :hover {
    .changeColor {
      color: #46a358;
    }
  }
`;
export const PaginationWrapper = styled.div``;
