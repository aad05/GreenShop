import React, { useState, useContext } from 'react';
import {
  NameWrapper,
  Price,
  PriceWrap,
  Title,
  Wrapper,
  DashBoard,
  FilterButton,
} from './style';
import { data } from '../../../mock/Categories/categories';
import { Dashboard } from '../../../context/Dashboard';
import Banner from '../../../assets/imgs/banner.png';
import FilterBySlide from '../../../context/SliderFilter';

const Categories = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [active, setActive] = useState(1);
  const [, setChoosenData] = useContext(Dashboard);
  const filterData = useContext(FilterBySlide);
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
      <Wrapper.Slider
        onChange={changedValue}
        max={1000}
        range
        color='#46A358'
        defaultValue={[0, 1000]}
        style={{ color: '#46A358' }}
      />
      <PriceWrap>
        Price: <Price>{min}$ - </Price> <Price left>{max}$</Price>
      </PriceWrap>
      <FilterButton
        onClick={() => {
          filterData.min = min;
          filterData.max = max;
          filterData.filter(min, max);
        }}
      >
        Filter
      </FilterButton>
      <DashBoard src={Banner} />
    </Wrapper>
  );
};

export default Categories;
