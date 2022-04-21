import React from "react";
import Categories from "./Categories Dashboard";
import CreateNewsletter from "./CreateNewsletter";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { Container } from "./style";
// import { data } from '../../utils/auth/data';
import AddPlantCard from "../Home/AddPlantCard";
const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
      <CreateNewsletter />
      <AddPlantCard />
    </div>
  );
};

export default Home;
