import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  width: 320px;
  background: #fbfbfb;
  margin-top: 61px;
`;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  padding-left: 21px;
  margin-bottom: 17px;
`;
Wrapper.DoashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;
Wrapper.ItemWrapper = styled(NavLink)`
  display: flex;
  grid-gap: 14px;
  height: 39px;
  align-items: center;
  border-left: ${({ activeColor }) => activeColor && '5px solid #46A358;'};
  padding-left: 21px;
  transition: all 0.5s;
`;
Wrapper.Link = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 45px;
  color: ${({ activeColor }) => (activeColor ? '#46A358' : '#727272')};
  :hover {
    color: ${({ activeColor }) => (activeColor ? '#46A358' : '#727272')};
  }
`;
Wrapper.Icon = styled.img``;
Wrapper.Hr = styled.div`
  width: 100%;
  border: 0.3px solid rgba(70, 163, 88, 0.1);
  margin-top: 32px;
`;
Wrapper.LogoutWrapper = styled.div`
  display: flex;
  padding-left: 21px;
  margin-top: 21px;
  margin-bottom: 21px;
`;
Wrapper.Logout = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #727272;
`;
