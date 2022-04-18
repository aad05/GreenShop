import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export default ProductContext;

export const Products = ({ children }) => {
  const [product, setProduct] = useState([
    {
      count: 5,
      discount: false.valueOf,
      id: 1,
      img: '/static/media/flower1.1b6a816a895d6ff57099.png',
      name: 'Barberton Daisy',
      price: 119,
    },
  ]);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
