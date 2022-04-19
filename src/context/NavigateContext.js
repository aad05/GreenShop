import React, { createContext } from 'react';
import { useState } from 'react';

const Navigator = createContext();
export default Navigator;

export const NavigateContext = ({ children }) => {
  const [navigateTo, setNavigateTo] = useState('/home');
  return (
    <Navigator.Provider value={[navigateTo, setNavigateTo]}>
      {children}
    </Navigator.Provider>
  );
};
