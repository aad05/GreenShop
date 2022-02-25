import React from 'react';
import { Button, Desc, Left, Right, Title, Wrapper, Image } from './style';
import bigflower from '../../../assets/imgs/big.png';

const MainCard = () => {
  return (
    <Wrapper>
      <Left>
        <Desc top>Welcome to GreenShop</Desc>
        <Title>Let’s Make a Better Planet</Title>
        <Desc line>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </Desc>
        <Button>Shop Now</Button>
      </Left>
      <Right>
        <Image src={bigflower} alt='cannot be used' />
      </Right>
    </Wrapper>
  );
};

export default MainCard;
