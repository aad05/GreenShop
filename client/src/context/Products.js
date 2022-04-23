import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export default ProductContext;

export const Products = ({ children }) => {
  const [product, setProduct] = useState([]);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
