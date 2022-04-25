import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../../../context/Products';
import {
  Checkout,
  Container,
  Continueshopping,
  Count,
  Delete,
  Deleteicon,
  Img,
  Left,
  Leftdesc,
  LeftTitle,
  // Navitem,
  Plus,
  Price,
  Product,
  Right,
  Rightapply,
  Rightbtn,
  Rightinput,
  Rightprice,
  RightTitle,
  Righttotal,
  Righttotalprice,
  Rightwrapper,
  Rightwrapper2,
  Rightwrapper3,
  Sub,
  Total,
  Wrapper,
  Wrapper2,
  Wrappertable,
} from './style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

export const CouponApplyPage = () => {
  // const [nav, setNav] = useState('home');
  const [product, setProduct] = useContext(ProductContext);
  const [codeInput, setCodeInput] = useState('');
  const [couponCode, setCouponCode] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );
  const navigate = useNavigate();

  const counterHandle = (id, type) => {
    const changedData = product.map((value) =>
      value.id === id
        ? {
            ...value,
            count:
              type === 'add'
                ? value.count + 1
                : value.count > 1
                ? value.count - 1
                : value.count,
          }
        : value
    );
    setProduct(changedData);
  };
  const onDelete = (id) => {
    setProduct(product.filter((value) => value.id !== id));
  };

  useEffect(() => {
    setCouponCode(Math.floor(Math.random() * 1000000));
  }, []);

  const checkCode = () => {
    setShowSpinner(true);
    if (product.length < 1) {
      setTimeout(() => {
        setShowSpinner(false);
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 1000);
      }, 500);
    } else {
      setTimeout(() => {
        if (couponCode + '' === codeInput) navigate('/shop/products/checkout');
        else alert('Wrong or empty coupon apply code');
        setShowSpinner(false);
      }, 1500);
    }
  };

  return (
    <Container>
      {/* <Wrapper>
        <Naitem option={nav==='home' && nav} onClick={()=>setNav('home')}>Home</Naitem>
        <Nav_item>/</Nav_item>
        <Nav_item option={nav==='shop' && nav} onClick={()=>setNav('shop')}>Shop</Nav_item>
        <Nav_item>/</Nav_item>
        <Nav_item option={nav==='shopCard' && nav} onClick={()=>setNav('shopCard')}>Shopping Card</Nav_item>
      </Wrapper> */}
      <Wrapper products>
        <Left>
          <Wrappertable>
            <Product>Product</Product>
            <Price>Price</Price>
            <Price>Quantity</Price>
            <Price>Total</Price>
            <Delete></Delete>
          </Wrappertable>
          {product.map(({ id, img, name, price, count }) => (
            <Wrapper2 key={id}>
              <Product>
                <Img src={img} />
                <div>
                  <LeftTitle>{name}</LeftTitle>
                  <Leftdesc>SKU:{id}</Leftdesc>
                </div>
              </Product>
              <Price center>${price}.00</Price>
              <Price>
                <Plus onClick={() => counterHandle(id, 'minus')}>-</Plus>
                <Count>{count}</Count>
                <Plus onClick={() => counterHandle(id, 'add')}>+</Plus>
              </Price>
              <Price>
                <Total>${price * count}.00</Total>
              </Price>
              <Delete onClick={() => onDelete(id)}>
                <Deleteicon />
              </Delete>
            </Wrapper2>
          ))}
        </Left>
        <Right>
          <RightTitle>Card Totals</RightTitle>
          <Rightapply>Coupon Apply Code: {couponCode}</Rightapply>
          <Rightwrapper>
            <Rightinput
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder='Enter coupon code here...'
            />
            <Rightbtn onClick={checkCode}>
              {showSpinner ? (
                <Spin indicator={antIcon} />
              ) : showWarning ? (
                'Data is empty'
              ) : (
                'Apply'
              )}
            </Rightbtn>
          </Rightwrapper>
          <Rightwrapper2>
            <Sub>Subtotal</Sub>
            <Rightprice>$2,683.00</Rightprice>
          </Rightwrapper2>
          <Rightwrapper2>
            <Sub>Coupon Discount</Sub>
            <Rightprice>(-) 00.00</Rightprice>
          </Rightwrapper2>
          <Rightwrapper2>
            <Sub>Shiping</Sub>
            <Rightprice>$16.00</Rightprice>
          </Rightwrapper2>
          <Rightwrapper3>
            <Righttotal>Total</Righttotal>
            <Righttotalprice>$222,222,00</Righttotalprice>
          </Rightwrapper3>
          <Checkout>Proceed To Checkout</Checkout>
          <Continueshopping>Continue Shopping</Continueshopping>
        </Right>
      </Wrapper>
    </Container>
  );
};
