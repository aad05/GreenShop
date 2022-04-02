import React, { createContext } from 'react';

const FilterBySlide = createContext();

export default FilterBySlide;

export const SliderFilter = ({ children }) => {
  const data = {
    min: 0,
    max: 1000,
    filter: null,
  };
  return (
    <FilterBySlide.Provider value={data}>{children}</FilterBySlide.Provider>
  );
};
