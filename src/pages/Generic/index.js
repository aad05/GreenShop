import React from 'react';
import { useLocation } from 'react-router-dom';

const Generic = () => {
  const location = useLocation();
  return <div>{location.pathname} Coming soon</div>;
};

export default Generic;
