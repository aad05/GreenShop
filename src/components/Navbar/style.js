import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 85%;
  height: 78px;
  margin: auto;
  display: flex;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1.5;
  font-weight: 300;
  display: flex;
  align-items: center;
`;
export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavbarLogos = styled.img`
  margin-right: ${({ ml }) => (ml ? '35px' : '30px')};
  cursor: pointer;
`;
export const LoginButton = styled.div`
  background: #46a358;
  border-radius: 6px;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
`;
export const Logout = styled.img`
  padding-right: 10px;
`;
export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  text-decoration: none;
  height: 80px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  :hover {
    font-weight: bold;
    color: #46a359;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 3px;
    background: #46a358;
    transition: width 0.3s;
  }
  :hover::after {
    width: 100%;
    color: #46a359;
  }
`;
