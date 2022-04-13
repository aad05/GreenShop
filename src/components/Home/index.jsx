import React from 'react';
import { OrderPage } from '../OrderPage';
import Categories from './Categories Dashboard';
import MainCard from './MainCard';
import MapData from './MapData';
import { Container } from './style';
// import { data } from '../../utils/auth/data';

const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
    </div>
  );
};

export default Home;
