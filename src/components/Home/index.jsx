import React from 'react';
import Categories from './Categories Dashboard';
import MainCard from './MainCard';
import MapData from './MapData';
import { Container } from './style';

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
