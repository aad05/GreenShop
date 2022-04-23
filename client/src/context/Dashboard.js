import React, { createContext, useState } from 'react';

export const Dashboard = createContext();

const Dashboards = ({ children }) => {
  const [choosenCategory, setChoosenCategory] = useState('House Plants');
  return (
    <Dashboard.Provider value={[choosenCategory, setChoosenCategory]}>
      {children}
    </Dashboard.Provider>
  );
};

export default Dashboards;
