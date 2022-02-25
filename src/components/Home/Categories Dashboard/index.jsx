import React, { useState, useContext } from 'react';
import { NameWrapper, Price, PriceWrap, Title, Wrapper } from './style';
import { data } from '../../../mock/Categories/categories';
import { Slider } from 'antd';
import { Dashboard } from '../../../context/Dashboard';

const Categories = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [active, setActive] = useState(1);
  const [, setChoosenData] = useContext(Dashboard);
  const changedValue = (e) => {
    setMin(e[0]);
    setMax(e[1]);
  };
  const changeChoosenMap = (e, id) => {
    setChoosenData(e);
    setActive(id);
  };
  return (
    <Wrapper>
      <Title>Categories</Title>
      {data.map(({ name, id, much }) => (
        <NameWrapper
          onClick={() => changeChoosenMap(name, id)}
          active={active === id ? true : false}
          key={id}
        >
          <div>{name}</div> <div>({much})</div>
        </NameWrapper>
      ))}
      <Slider
        onChange={changedValue}
        max={1000}
        range
        color='#46A358'
        defaultValue={[0, 1000]}
      />
      <PriceWrap>
        <Price>{min}$ - </Price> <Price left>{max}$</Price>
      </PriceWrap>
    </Wrapper>
  );
};

export default Categories;
