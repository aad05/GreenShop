import React from 'react';
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
import google from '../../assets/icons/google.svg';
import facebook from '../../assets/icons/facebook.svg';
import { Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLogin, setActiveLogin] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <LoginButton onClick={() => setVisible(!visible)}>
            <Logout none src={logout} /> LogIn
          </LoginButton>
        </Right>
      </Wrapper>
      <Wrapper.Modal onCancel={() => setVisible(!visible)} visible={visible}>
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
        <Wrapper.Modal.LoginWrapper>
          <Wrapper.ModalParagraph>
            Enter your username and password to login.
          </Wrapper.ModalParagraph>
          <Wrapper.Modal.LoginInput
            active={email.length > 0}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='abduvoitovasadbek3@gmail.com'
          />
          <Wrapper.Modal.LoginInput
            active={email.length > 0}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='12345678'
          />
          <Wrapper.ModalParagraph forgot>
            Forgot Password?
          </Wrapper.ModalParagraph>
          <Wrapper.Modal.Button mt='27'>Login</Wrapper.Modal.Button>
          <Wrapper.Modal.Button changeColor hasBorder changeBg mt='27'>
            <Wrapper.Modal.Icon google src={google} />
            Login with Google
          </Wrapper.Modal.Button>
          <Wrapper.Modal.Button changeColor hasBorder changeBg mt='15'>
            <Wrapper.Modal.Icon src={facebook} />
            Login with Facebook
          </Wrapper.Modal.Button>
        </Wrapper.Modal.LoginWrapper>
      </Wrapper.Modal>
      <Outlet />
    </>
  );
};

export default Navbar;
