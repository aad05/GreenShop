import React, { useContext, useState } from 'react';
import {
  Wrapper,
  Left,
  Center,
  Right,
  Logo,
  PageWrapper,
  NavbarLogos,
  LoginButton,
  Logout,
  Link,
} from './style';
import { data } from '../../utils/navbar';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import karzinka from '../../assets/icons/karzinka.svg';
import logout from '../../assets/icons/logout.svg';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuthorizationData from '../../context/Authorization';
import { useNavigate } from 'react-router-dom';
import Navigator from '../../context/NavigateContext';

const Navbar = () => {
  const [activeLogin, setActiveLogin] = useState('login');
  const [authedData, setAutheddata] = useContext(AuthorizationData);
  const [, setNavigateTo] = useContext(Navigator);

  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Left>
          <Logo src={logo} />
        </Left>
        <Center>
          {data.map(({ title, pathname, id }) => (
            <PageWrapper key={id}>
              <Link to={pathname}>{title}</Link>
            </PageWrapper>
          ))}
        </Center>
        <Right>
          <NavbarLogos src={search} />
          <NavbarLogos ml src={karzinka} />
          <LoginButton
            onClick={() => {
              if (!authedData.isAuthed) {
                setAutheddata({ ...authedData, showModal: true });
                setNavigateTo('profile/account_details');
              } else {
                navigate(`profile/account_details`);
              }
            }}
          >
            <Logout none src={logout} />
            {authedData.userName.toUpperCase() || 'Login'}
          </LoginButton>
        </Right>
      </Wrapper>
      <Wrapper.Modal
        onCancel={() => setAutheddata({ ...authedData, showModal: false })}
        visible={authedData.showModal}
      >
        <Wrapper.Modal.HeaderWrapper>
          <Wrapper.Modal.Header
            onClick={() => setActiveLogin('login')}
            active={activeLogin === 'login'}
          >
            Login
          </Wrapper.Modal.Header>
          <Wrapper.Modal.HeaderBorder>|</Wrapper.Modal.HeaderBorder>
          <Wrapper.Modal.Header
            onClick={() => setActiveLogin('register')}
            active={activeLogin === 'register'}
          >
            Register
          </Wrapper.Modal.Header>
        </Wrapper.Modal.HeaderWrapper>
        {activeLogin === 'login' ? <Login /> : <Register />}
      </Wrapper.Modal>
      <Outlet />
    </>
  );
};

export default Navbar;
