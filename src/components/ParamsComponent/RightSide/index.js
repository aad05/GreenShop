import React, { useState, useContext } from 'react';
import { Wrapper } from './style';
import star from '../../../assets/icons/starlight.svg';
import { useParams } from 'react-router';
import AuthorizationData from '../../../context/Authorization';
import Navigator from '../../../context/NavigateContext';

const Right = ({ data }) => {
  const [sizeActive, setSizeActive] = useState(1);
  const [count, setCount] = useState(1);
  const { type, id } = useParams();
  const [authedData, setAuthedData] = useContext(AuthorizationData);
  const [, setNavigateTo] = useContext(Navigator);

  const buyHandle = () => {
    const { isAuthed, showModal } = authedData;

    if (isAuthed) {
      console.log('You can go');
    } else {
      setNavigateTo('/shop/products');
      setAuthedData({
        ...authedData,
        showModal: !showModal,
      });
    }
  };

  return (
    <Wrapper>
      {/* ========== Header ========== */}
      <Wrapper.Header>
        <Wrapper.FlowerName>{data.name}</Wrapper.FlowerName>
        <Wrapper.AdditionalInfo>
          <Wrapper.Price>${data.price}</Wrapper.Price>
          <div>
            <Wrapper.StarWrapper>
              <Wrapper.StarImg src={star} />
              <Wrapper.StarImg src={star} />
              <Wrapper.StarImg src={star} />
              <Wrapper.StarImg src={star} />
              <Wrapper.StarImg src={star} />
            </Wrapper.StarWrapper>
            <Wrapper.Paragraph>19 Customer Review</Wrapper.Paragraph>
          </div>
        </Wrapper.AdditionalInfo>
      </Wrapper.Header>
      <Wrapper.Hr />
      <Wrapper.WrapperDescription>
        <Wrapper.Title>Short Description:</Wrapper.Title>
        <Wrapper.Description>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.{' '}
        </Wrapper.Description>
      </Wrapper.WrapperDescription>
      {/* ========== Size ========== */}
      <Wrapper.Title>Size:</Wrapper.Title>
      <Wrapper.WrapperSize>
        <Wrapper.Size
          onClick={() => setSizeActive(1)}
          active={sizeActive === 1}
        >
          S
        </Wrapper.Size>
        <Wrapper.Size
          onClick={() => setSizeActive(2)}
          active={sizeActive === 2}
        >
          M
        </Wrapper.Size>
        <Wrapper.Size
          onClick={() => setSizeActive(3)}
          active={sizeActive === 3}
        >
          L
        </Wrapper.Size>
        <Wrapper.Size
          onClick={() => setSizeActive(4)}
          active={sizeActive === 4}
        >
          XL
        </Wrapper.Size>
      </Wrapper.WrapperSize>
      {/* ========== Buy and Carts ========== */}
      <Wrapper.CartWrapper>
        <Wrapper.IncreamentWrapper>
          <Wrapper.IncreamentCart
            onClick={() => {
              if (count > 1) {
                setCount((prev) => prev - 1);
              }
            }}
          >
            -
          </Wrapper.IncreamentCart>
          <Wrapper.Count>{count}</Wrapper.Count>
          <Wrapper.IncreamentCart onClick={() => setCount((prev) => prev + 1)}>
            +
          </Wrapper.IncreamentCart>
        </Wrapper.IncreamentWrapper>
        <Wrapper.ButtonWrapper>
          <Wrapper.Button onClick={buyHandle}>Buy Now</Wrapper.Button>
          <Wrapper.Button>Add to cart</Wrapper.Button>
          <Wrapper.ButtonHeart>
            <Wrapper.Heart />
          </Wrapper.ButtonHeart>
        </Wrapper.ButtonWrapper>
      </Wrapper.CartWrapper>
      {/* ========== Tags ========== */}
      <Wrapper.TagsWrapper>
        <Wrapper.Tag>
          <Wrapper.ThinTag>SKU (ID):</Wrapper.ThinTag> {id}
        </Wrapper.Tag>
        <Wrapper.Tag>
          <Wrapper.ThinTag>Categories:</Wrapper.ThinTag> {type}
        </Wrapper.Tag>
        <Wrapper.Tag>
          <Wrapper.ThinTag>Tags:</Wrapper.ThinTag> Home, Garden, Plants
        </Wrapper.Tag>
      </Wrapper.TagsWrapper>
    </Wrapper>
  );
};

export default Right;
