import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { data } from '../utils/navbar';
import { dashboardData } from '../utils/dashboard';
import Navbar from '../components/Navbar';
import ParamsComponent from '../components/ParamsComponent';
import Profile from '../components/Profile';
import AuthorizationData from '../context/Authorization';
import Products from '../components/Products';

const Root = () => {
  const [authedData] = useContext(AuthorizationData);
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ pathname, id, Component }) => (
          <Route path={pathname} key={id} element={<Component />} />
        ))}
        <Route path='shop/:type/:id' element={<ParamsComponent />} />
        <Route path='shop/products' element={<Products />} />
        <Route element={<Profile />}>
          {dashboardData.map(({ id, pathname, Component }) => {
            return authedData.isAuthed ? (
              <Route key={id} path={pathname} element={<Component />} />
            ) : (
              <Route key={id} path={pathname} element={<Navigate to='/' />} />
            );
          })}
        </Route>
        <Route path='/' element={<Navigate to='/home' />} />
      </Route>
    </Routes>
  );
};

export default Root;
