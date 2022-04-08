import React from "react";
import Footer from "./Footer";
import Categories from "./Categories Dashboard";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { Container } from "./style";

const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
