import React, { useEffect, useState, useContext } from 'react';
import { data } from '../../../mock/Categories/data';
import {
  Wrapper,
  Header,
  SortByDateWrap,
  SortByPriceWrap,
  Body,
} from './style';
import { Pagination } from 'antd';
import { Dashboard } from '../../../context/Dashboard';
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import FilterBySlide from '../../../context/SliderFilter';
import { useNavigate } from 'react-router-dom';

const MapData = () => {
  const [mockdata, setMockData] = useState(data);
  const [selected, setSelected] = useState('All Plants');
  const [total, setTotal] = useState(30);
  const [page, setPage] = useState('1');
  const [showCard, setShowCard] = useState([1, 9]);
  const [choosenData] = useContext(Dashboard);
  const filterData = useContext(FilterBySlide);
  const navigate = useNavigate();
  const AllPlants = () => {
    setSelected('All Plants');
  };
  const NewArrivals = () => {
    setSelected('New Arrivals');
  };
  const Sale = () => {
    setSelected('Sale');
  };
  useEffect(() => {
    switch (page) {
      case '1':
        return setShowCard([0, 8]);
      case '2':
        return setShowCard([9, 17]);
      case '3':
        return setShowCard([18, 26]);
      default:
        return setShowCard([0, 8]);
    }
  }, [page]);
  const defaultSort = () => {
    const defaultSortedData = data[choosenData];
    setMockData({ ...mockdata, choosenData: defaultSortedData });
  };
  const chepestSort = () => {
    const chepestSortedData = mockdata[choosenData].sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    setMockData({ ...mockdata, choosenData: chepestSortedData });
  };

  filterData.filter = () => {
    const filteredData = data[choosenData].filter(
      (value) => value.price > filterData.min && value.price < filterData.max
    );
    setMockData({ ...mockdata, [choosenData]: filteredData });
    if (filteredData.length >= 18 && filteredData.length <= 26) setTotal(30);
    if (filteredData.length >= 9 && filteredData.length <= 17) setTotal(20);
    if (filteredData.length >= 0 && filteredData.length <= 8) setTotal(10);
  };
  const expensiveSort = () => {
    const expensiveSortedData = mockdata[choosenData].sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });
    setMockData({ ...mockdata, choosenData: expensiveSortedData });
  };

  const sortData = (sortType) => {
    switch (sortType) {
      case 'default':
        return defaultSort();
      case 'chepest':
        return chepestSort();
      case 'expensive':
        return expensiveSort();
      default:
        return defaultSort();
    }
  };
  return (
    <Wrapper>
      <Header>
        <SortByDateWrap>
          <SortByDateWrap.Title
            active={selected === 'All Plants' ? true : false}
            onClick={AllPlants}
          >
            All Plants
          </SortByDateWrap.Title>

          <SortByDateWrap.Title
            active={selected === 'New Arrivals' ? true : false}
            onClick={NewArrivals}
            left
          >
            New Arrivals
          </SortByDateWrap.Title>
          <SortByDateWrap.Title
            active={selected === 'Sale' ? true : false}
            onClick={Sale}
            left
          >
            Sale
          </SortByDateWrap.Title>
        </SortByDateWrap>
        <SortByPriceWrap>
          <SortByPriceWrap.Title>Sort by:</SortByPriceWrap.Title>
          <SortByPriceWrap.Select onChange={(e) => sortData(e.target.value)}>
            <SortByPriceWrap.Option value='default'>
              Default Sorting
            </SortByPriceWrap.Option>
            <SortByPriceWrap.Option value='chepest'>
              Chepest
            </SortByPriceWrap.Option>
            <SortByPriceWrap.Option value='expensive'>
              Most Expensive
            </SortByPriceWrap.Option>
          </SortByPriceWrap.Select>
        </SortByPriceWrap>
      </Header>
      <Body>
        <Body.Container>
          {mockdata[choosenData].map(
            (value, index) =>
              index >= showCard[0] &&
              index <= showCard[1] && (
                <Body.Card key={value.id}>
                  <Body.Img src={value.img} />
                  <Body.Title>{value.name}</Body.Title>
                  <Body.Price>${value.price}</Body.Price>
                  <Body.HoverableWrap className='hover'>
                    <Body.HoverableIcons right>
                      <ShoppingCartOutlined className='changeColor' />
                    </Body.HoverableIcons>
                    <Body.HoverableIcons right>
                      <HeartOutlined className='changeColor' />
                    </Body.HoverableIcons>
                    <Body.HoverableIcons
                      onClick={() => {
                        navigate(`/shop/${choosenData}/${value.id}`);
                      }}
                    >
                      <SearchOutlined className='changeColor' />
                    </Body.HoverableIcons>
                  </Body.HoverableWrap>
                </Body.Card>
              )
          )}
        </Body.Container>
        <Pagination
          style={{
            position: 'absolute',
            bottom: '-90px',
            right: 0,
          }}
          onChange={(e) => setPage(e.toFixed())}
          defaultCurrent={1}
          total={total}
        />
      </Body>
    </Wrapper>
  );
};

export default MapData;
