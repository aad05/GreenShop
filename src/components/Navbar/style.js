import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';

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
Wrapper.Modal.HeaderWrapper = styled.div`
  display: flex;
  grid-gap: 11px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
Wrapper.Modal.Header = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#46a359' : ' #3d3d3d')};
  cursor: pointer;
`;
Wrapper.Modal.HeaderBorder = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;

Wrapper.LoginWrapper = styled.div`
  width: 80%;
  margin: auto;
`;
Wrapper.ModalParagraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${({ forgot }) => (forgot ? '#46a359' : '#3d3d3d')};
  margin-bottom: 14px;
  text-align: ${({ forgot }) => forgot && 'right'};
`;
Wrapper.Modal.LoginInput = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding-left: 14px;
  outline-color: #46a359;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#000' : '#a5a5a5')};
  margin-bottom: 17px;
  background: ${({ active }) => active && '#E8F0FE'};
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a5a5a5;
  }
`;
Wrapper.Modal.Button = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ changeColor }) => (changeColor ? '#727272' : '#fff')};
  background-color: ${({ changeBg }) => (changeBg ? 'none' : '#46A358')};
  border: ${({ hasBorder }) => hasBorder && '1px solid #EAEAEA'};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  display: flex;
`;
Wrapper.Modal.Icon = styled.img`
  margin-right: ${({ google }) => (google ? '13px' : '5px')};
`;

// E8F0FE
