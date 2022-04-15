import React, { useEffect, useState, useContext } from 'react';
import { data } from '../../../mock/Categories/data';
import {
  Wrapper,
  Header,
  SortByDateWrap,
  SortByPriceWrap,
  Body,
  AdminEditModal,
} from './style';
import { Pagination } from 'antd';
import { Dashboard } from '../../../context/Dashboard';
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  EditOutlined,
} from '@ant-design/icons';
import FilterBySlide from '../../../context/SliderFilter';
import { useNavigate } from 'react-router-dom';
import AuthorizationData from '../../../context/Authorization';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const MapData = () => {
  const [mockdata, setMockData] = useState(data);
  const [selected, setSelected] = useState('All Plants');
  const [total, setTotal] = useState(30);
  const [page, setPage] = useState('1');
  const [showCard, setShowCard] = useState([1, 9]);
  const [choosenData] = useContext(Dashboard);
  const filterData = useContext(FilterBySlide);
  const [authedData] = useContext(AuthorizationData);
  const [visible, setVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [selectedData, setSelectedData] = useState({
    selectIndex: 0,
    name: '',
    price: '',
    discount: false,
  });

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );

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
  const editData = (index, name, price) => {
    setVisible(!visible);
    setSelectedData({ ...selectedData, selectIndex: index, name, price });
  };
  const modalEditChange = (e) => {
    setSelectedData({ ...selectedData, [e.target.name]: e.target.value });
  };
  const editDataChange = () => {
    const { selectIndex, price, name, discount } = selectedData;
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      const changedData = mockdata[choosenData].map((value) =>
        value.id - 1 === selectIndex
          ? {
              ...value,
              name,
              price,
              discount: JSON.parse(discount),
            }
          : value
      );
      setMockData({ ...mockdata, [choosenData]: changedData });
      setVisible(false);
    }, 1000);
  };
  const { selectIndex, price, name } = selectedData;
  return (
    <Wrapper>
      <AdminEditModal visible={visible} onCancel={() => setVisible(!visible)}>
        <Wrapper.EditImage src={mockdata[choosenData][selectIndex].img} />
        <Wrapper.ModalParagraph>New Name of Plant</Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          value={name}
          name='name'
          placeholder='New plant name'
          onChange={modalEditChange}
        />
        <Wrapper.ModalParagraph>New Price of Plant</Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          value={price}
          name='price'
          placeholder='New price name'
          onChange={modalEditChange}
        />
        <Wrapper.ModalParagraph>Discount</Wrapper.ModalParagraph>
        <Wrapper.Select name='discount' onChange={modalEditChange}>
          <Wrapper.Option value={false}>False</Wrapper.Option>
          <Wrapper.Option value={true}>True</Wrapper.Option>
        </Wrapper.Select>
        <Wrapper.Button mt='27' onClick={editDataChange}>
          {showSpinner ? <Spin indicator={antIcon} /> : 'Change'}
        </Wrapper.Button>
      </AdminEditModal>
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
                    {authedData.isAdmin && (
                      <Body.HoverableIcons
                        onClick={() => editData(index, value.name, value.price)}
                        right
                      >
                        <EditOutlined className='changeColor' />
                      </Body.HoverableIcons>
                    )}
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
