import React, { useState, useContext } from 'react';
import {
  Checkbox,
  Clickhere,
  Container,
  Haveacouponcode,
  Input,
  Inputs,
  Left,
  Notes,
  Payementwrapper,
  Paymentmethods,
  Paymenttitle,
  Paypals,
  Placeorder,
  Right,
  Rightcard,
  Rightcardcount,
  Rightcarddesc,
  Rightcardimg,
  Rightcardprice,
  Rightcardtitle,
  Rightcardwrapper,
  RightFlexitem,
  RightFlexitem2,
  Rightflexprice,
  Rightflexright,
  Rightflextitle,
  Rightflexview,
  Rightrightwrapper,
  Righttitle,
  Righttotal,
  Righttotalsubtotal,
  Wrapper,
} from './style';
import payment from '../../../../assets/imgs/payement-types.png';
import ProductContext from '../../../../context/Products';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
);

const OrderPage = () => {
  const [productData] = useContext(ProductContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    town: '',
    houseNumber: '',
    appartment: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  });

  const onChangeValue = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    const {
      firstName,
      lastName,
      state,
      country,
      town,
      houseNumber,
      appartment,
      zip,
      email,
      phone,
    } = inputData;
    if (
      firstName &&
      lastName &&
      state &&
      country &&
      town &&
      houseNumber &&
      appartment &&
      zip &&
      email &&
      phone
    ) {
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
        setIsModalVisible(true);
      }, 1500);
    } else alert('Fill all fields');
  };

  return (
    <Container>
      <Wrapper>
        <Wrapper.Modal
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
        >
          sss
        </Wrapper.Modal>
        <Left>
          <Righttitle>Billing Address</Righttitle>
          <Inputs className='inputs-first'>
            <Input
              name='firstName'
              value={inputData.firstName}
              onChange={onChangeValue}
              placeholder='First Name'
            />
            <Input
              name='lastName'
              value={inputData.lastName}
              onChange={onChangeValue}
              placeholder='Last Name'
            />
          </Inputs>
          <Inputs>
            <Input
              name='country'
              value={inputData.country}
              onChange={onChangeValue}
              placeholder='Country / Region'
            />
            <Input
              name='town'
              value={inputData.town}
              onChange={onChangeValue}
              placeholder='Town / City'
            />
          </Inputs>
          <Inputs>
            <Input
              name='houseNumber'
              value={inputData.houseNumber}
              onChange={onChangeValue}
              placeholder='House number and street name'
            />
            <Input
              name='appartment'
              value={inputData.appartment}
              onChange={onChangeValue}
              placeholder='Appartment, suite, unit, etc. (optional)'
            />
          </Inputs>
          <Inputs>
            <Input
              name='state'
              value={inputData.state}
              onChange={onChangeValue}
              placeholder='Select a state'
            />
            <Input name='zip' onChange={onChangeValue} placeholder='Zip' />
          </Inputs>
          <Inputs>
            <Input
              name='email'
              value={inputData.email}
              onChange={onChangeValue}
              placeholder='Email address'
            />
            <Input
              name='phone'
              value={inputData.phone}
              onChange={onChangeValue}
              placeholder='Phone Number'
            />
          </Inputs>
          <Inputs>
            <Notes placeholder='Order notes (optional)' />
          </Inputs>
        </Left>
        <Right>
          <Righttitle>Your Order</Righttitle>
          <Righttotalsubtotal>
            <Righttotal>Products</Righttotal>
            <Righttotal>Subtotal</Righttotal>
          </Righttotalsubtotal>
          {productData.map((value) => (
            <Rightcard>
              <Rightcardimg src={value.img} />
              <Rightcardwrapper>
                <Rightcardtitle>{value.name}</Rightcardtitle>
                <Rightcarddesc>SKU: ${value.id}</Rightcarddesc>
              </Rightcardwrapper>
              <Rightcardcount>(x {value.count})</Rightcardcount>
              <Rightcardprice>${value.price * value.count}</Rightcardprice>
            </Rightcard>
          ))}
          <Haveacouponcode>
            Have a coupon code? <Clickhere> Click here</Clickhere>
          </Haveacouponcode>
          <Rightrightwrapper>
            <Rightflexright>
              <RightFlexitem>
                <Rightflextitle>Subtotal</Rightflextitle>
                <Rightflexprice>$2,683.00</Rightflexprice>
              </RightFlexitem>
              <RightFlexitem>
                <Rightflextitle>Coupon Discount</Rightflextitle>
                <Rightflexprice>(-) 00.00</Rightflexprice>
              </RightFlexitem>
              <RightFlexitem>
                <Rightflextitle>Shiping</Rightflextitle>
                <Rightflexprice>$16.00</Rightflexprice>
              </RightFlexitem>
              <Rightflexview>View shipping charge</Rightflexview>
              <RightFlexitem2>
                <Rightcardtitle>Total</Rightcardtitle>
                <Rightcardprice>$2,699.00</Rightcardprice>
              </RightFlexitem2>
              <Paymentmethods>Payement Methods</Paymentmethods>
              <Payementwrapper>
                <Checkbox type='checkbox' />
                <Paypals src={payment} />
              </Payementwrapper>
              <Payementwrapper>
                <Checkbox type='checkbox' />
                <Paymenttitle>Dorect bank transfer</Paymenttitle>
              </Payementwrapper>
              <Payementwrapper>
                <Checkbox type='checkbox' />
                <Paymenttitle>Cash on delivery</Paymenttitle>
              </Payementwrapper>
              <Placeorder onClick={placeOrder}>
                {' '}
                {showSpinner ? <Spin indicator={antIcon} /> : 'Place Order'}
              </Placeorder>
            </Rightflexright>
          </Rightrightwrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default OrderPage;
