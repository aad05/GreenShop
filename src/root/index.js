import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { data } from '../utils/navbar';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ pathname, id, Component }) => (
          <Route path={pathname} key={id} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default Root;
