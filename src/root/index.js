import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from '../utils/navbar';
import Navbar from '../components/Navbar';
import ParamsComponent from '../components/ParamsComponent';

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ pathname, id, Component }) => (
          <Route path={pathname} key={id} element={<Component />} />
        ))}
      </Route>
      <Route element={<Navbar />}>
        <Route path='shop/:type/:id' element={<ParamsComponent />} />
      </Route>
    </Routes>
  );
};

export default Root;
