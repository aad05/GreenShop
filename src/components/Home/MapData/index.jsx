import React, { useEffect, useState, useContext } from "react";
import { data } from "../../../mock/Categories/data";
import {
  Wrapper,
  Header,
  SortByDateWrap,
  SortByPriceWrap,
  Body,
} from "./style";
import { Pagination } from "antd";
import { Dashboard } from "../../../context/Dashboard";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const MapData = () => {
  const [mockdata, setMockData] = useState(data);
  const [selected, setSelected] = useState("All Plants");
  const [page, setPage] = useState("1");
  const [showCard, setShowCard] = useState([1, 9]);
  const [choosenData,setChoosenData] = useContext(Dashboard);

  const AllPlants = () => {
    setSelected("All Plants");
  };
  const NewArrivals = () => {
    setSelected("New Arrivals");
  };
  const Sale = () => {
    setSelected("Sale");
  };
  useEffect(() => {
    switch (page) {
      case "1":
        return setShowCard([1, 9]);
      case "2":
        return setShowCard([10, 18]);
      case "3":
        return setShowCard([18, 20]);
      default:
        return setShowCard([1, 9]);
    }
  }, [page]);
  return (
    <Wrapper>
      <Header>
        <SortByDateWrap>
          <SortByDateWrap.Title
            active={selected === "All Plants" ? true : false}
            onClick={AllPlants}
          >
            All Plants
          </SortByDateWrap.Title>

          <SortByDateWrap.Title
            active={selected === "New Arrivals" ? true : false}
            onClick={NewArrivals}
            left
          >
            New Arrivals
          </SortByDateWrap.Title>
          <SortByDateWrap.Title
            active={selected === "Sale" ? true : false}
            onClick={Sale}
            left
          >
            Sale
          </SortByDateWrap.Title>
        </SortByDateWrap>
        <SortByPriceWrap>
          <SortByPriceWrap.Title>Sort by:</SortByPriceWrap.Title>
          <SortByPriceWrap.Select>
            <SortByPriceWrap.Option>Default Sorting</SortByPriceWrap.Option>
            <SortByPriceWrap.Option>Chepest</SortByPriceWrap.Option>
            <SortByPriceWrap.Option>Most Expensive</SortByPriceWrap.Option>
          </SortByPriceWrap.Select>
        </SortByPriceWrap>
      </Header>
      <Body>
        <Body.Container>
          {mockdata[choosenData].map(
            (value) =>
              value.id >= showCard[0] &&
              value.id <= showCard[1] && (
                <Body.Card key={value.id}>
                  <Body.Img src={value.img} />
                  <Body.Title>{value.name}</Body.Title>
                  <Body.Price>${value.price}</Body.Price>
                  <Body.HoverableWrap className="hover">
                    <Body.HoverableIcons right>
                      <ShoppingCartOutlined className="changeColor" />
                    </Body.HoverableIcons>
                    <Body.HoverableIcons right>
                      <HeartOutlined className="changeColor" />
                    </Body.HoverableIcons>
                    <Body.HoverableIcons>
                      <SearchOutlined className="changeColor" />
                    </Body.HoverableIcons>
                  </Body.HoverableWrap>
                </Body.Card>
              )
          )}
        </Body.Container>
        <Pagination
          style={{
            position: "absolute",
            bottom: "-90px",
            right: 0,
          }}
          onChange={(e) => setPage(e.toFixed())}
          defaultCurrent={1}
          total={30}
        />
      </Body>
    </Wrapper>
  );
};

export default MapData;
