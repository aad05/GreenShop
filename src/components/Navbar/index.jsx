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
import { Outlet } from 'react-router-dom';

const Navbar = () => {
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
          <LoginButton>
            <Logout none src={logout} /> LogIn
          </LoginButton>
        </Right>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
