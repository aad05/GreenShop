import React, { useState } from 'react'
import { data } from '../../mock/product';
import { Checkout, Container, Continue__shopping, Count, Delete, Delete_icon, Img, Left, Left_desc, Left_Title, Nav_item, Plus, Price, Product, Right, Right__apply, Right__btn, Right__input, Right__price, Right__Title, Right__total, Right__totalprice, Right__wrapper, Right__wrapper2, Right__wrapper3, Sub, Total, Wrapper, Wrapper2, Wrapper__table } from './style'


const Products = () => {
  const [nav, setNav] = useState('home');
  const [product, setProduct] = useState(data);
  const [count, setCount] = useState(1);
  return(
    <Container>
        <Wrapper>
        <Nav_item option={nav==='home' && nav} onClick={()=>setNav('home')}>Home</Nav_item>
        <Nav_item>/</Nav_item>
        <Nav_item option={nav==='shop' && nav} onClick={()=>setNav('shop')}>Shop</Nav_item>
        <Nav_item>/</Nav_item>
        <Nav_item option={nav==='shopCard' && nav} onClick={()=>setNav('shopCard')}>Shopping Card</Nav_item>
      </Wrapper>
      <Wrapper products>
        <Left>
          <Wrapper__table>
            <Product>Product</Product>
            <Price>Price</Price>
            <Price>Quantity</Price>
            <Price>Total</Price>
            <Delete></Delete>
          </Wrapper__table>
          {
            product.map(({id, img, title, desc, price})=>(
              <Wrapper2 key={id}>
                <Product>
                  <Img src={img} />
                  <div>
                    <Left_Title>{title}</Left_Title>
                    <Left_desc>{desc}</Left_desc>
                  </div>
                </Product>
                <Price center>${price}.00</Price>
                <Price>
                  <Plus onClick={()=>setCount(count-1)}>-</Plus>
                  <Count>{count}</Count>
                  <Plus onClick={()=>setCount(count+1)}>+</Plus>
                </Price>
                <Price>
                  <Total>${price * count}.00</Total>
                </Price>
                <Delete><Delete_icon /></Delete>
              </Wrapper2>
            ))
          }
        </Left>
        <Right>
          <Right__Title>Card Totals</Right__Title>
          <Right__apply>Coupon Apply</Right__apply>
          <Right__wrapper >
            <Right__input placeholder='Enter coupon code here...' />
            <Right__btn>Apply</Right__btn>
          </Right__wrapper>
          <Right__wrapper2>
            <Sub>Subtotal</Sub>
            <Right__price>$2,683.00</Right__price>
          </Right__wrapper2>
          <Right__wrapper2>
            <Sub>Coupon Discount</Sub>
            <Right__price>(-) 00.00</Right__price>
          </Right__wrapper2>
          <Right__wrapper2>
            <Sub>Shiping</Sub>
            <Right__price>$16.00</Right__price>
          </Right__wrapper2>
          <Right__wrapper3>
            <Right__total>Total</Right__total>
            <Right__totalprice>$2,699.00</Right__totalprice>
          </Right__wrapper3>
          <Checkout>Proceed To Checkout</Checkout>
          <Continue__shopping>Continue Shopping</Continue__shopping>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Products;
