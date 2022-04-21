import React from "react";
import Footer from "../Footer";
import Categories from "./Categories Dashboard";
import CreateNewsletter from "./CreateNewsletter";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { Container } from "./style";
// import { data } from '../../utils/auth/data';

const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
      <CreateNewsletter />
      <Footer />
    </div>
  );
};

export default Home;
