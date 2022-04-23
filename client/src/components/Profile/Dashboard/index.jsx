import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { dashboardData } from '../../../utils/dashboard';
import { Container, Wrapper } from './style';
import AuthorizationData from '../../../context/Authorization';

const Dashboard = () => {
  const [authData] = useContext(AuthorizationData);
  const onLogout = () => authData.logout();
  return (
    <Wrapper>
      <Container>
        <Wrapper.Title>My Account</Wrapper.Title>
        <Wrapper.DoashboardWrapper>
          {dashboardData.map((value) => (
            <Wrapper.ItemWrapper key={value.id} to={value.pathname}>
              <Wrapper.Icon src={value.icon} />
              <Wrapper.Link>{value.title}</Wrapper.Link>
            </Wrapper.ItemWrapper>
          ))}
        </Wrapper.DoashboardWrapper>
        <Wrapper.Hr />
        <Wrapper.LogoutWrapper>
          <Wrapper.Logout onClick={onLogout}>Logout</Wrapper.Logout>
        </Wrapper.LogoutWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
