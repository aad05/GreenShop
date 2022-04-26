import React, { useState, useContext } from 'react';
import {
  Checkbox,
  Clickhere,
  Container,
  Haveacouponcode,
  Input,
  Inputs,
  Left,
  ModalMain,
  Notes,
  OrderDetail,
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
  Shipping,
  Wrapper,
} from './style';
import img1 from '../../../../assets/imgs/flower1.png'
import img2 from '../../../../assets/imgs/flower2.png'
import img3 from '../../../../assets/imgs/flower3.png'
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
          <ModalMain>
            <ModalMain.Logo />
            <ModalMain.Title>Your order has been received</ModalMain.Title>
          </ModalMain>
          <ModalMain.Wrapper>
            <ModalMain.SubWrapper>
              <ModalMain.Order>Order Number</ModalMain.Order>
              <ModalMain.Number>19586687</ModalMain.Number>
            </ModalMain.SubWrapper>
            <ModalMain.SubWrapper>
              <ModalMain.Order>Date</ModalMain.Order>
              <ModalMain.Number>15 Sep, 2021</ModalMain.Number>
            </ModalMain.SubWrapper>
            <ModalMain.SubWrapper>
              <ModalMain.Order>Total</ModalMain.Order>
              <ModalMain.Number>2,699.00</ModalMain.Number>
            </ModalMain.SubWrapper>
            <ModalMain.SubWrapper>
              <ModalMain.Order>Payment Method</ModalMain.Order>
              <ModalMain.Number>Cash on delivery</ModalMain.Number>
            </ModalMain.SubWrapper>
          </ModalMain.Wrapper>
          <OrderDetail>
            <OrderDetail.Title>Order Details</OrderDetail.Title>
            <OrderDetail.Wrapper>
              <OrderDetail.Item1>
                <OrderDetail.Titles>Products</OrderDetail.Titles>
                <OrderDetail.Container>
                  <OrderDetail.Img src={img1} />
                  <OrderDetail.Right>
                    <OrderDetail.Name>Barberton Daisy</OrderDetail.Name>
                    <OrderDetail.Sku>SKU: 1995751877966</OrderDetail.Sku>
                  </OrderDetail.Right>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Img src={img2} />
                  <OrderDetail.Right>
                    <OrderDetail.Name>Blushing Bromeliad</OrderDetail.Name>
                    <OrderDetail.Sku>SKU: 1995751877966</OrderDetail.Sku>
                  </OrderDetail.Right>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Img src={img3} />
                  <OrderDetail.Right>
                    <OrderDetail.Name>Aluminum Plant</OrderDetail.Name>
                    <OrderDetail.Sku>SKU: 1995751877966</OrderDetail.Sku>
                  </OrderDetail.Right>
                </OrderDetail.Container>
              </OrderDetail.Item1>
              <OrderDetail.Item2>
                <OrderDetail.Titles>Qty</OrderDetail.Titles>
                <OrderDetail.Container>
                  <OrderDetail.Qty>(x 2)</OrderDetail.Qty>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Qty>(x 2)</OrderDetail.Qty>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Qty>(x 2)</OrderDetail.Qty>
                </OrderDetail.Container>
              </OrderDetail.Item2>
              <OrderDetail.Item3>
                <OrderDetail.Titles end>Subtotal</OrderDetail.Titles>
                <OrderDetail.Container>
                  <OrderDetail.Subtotal>$238.00</OrderDetail.Subtotal>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Subtotal>$238.00</OrderDetail.Subtotal>
                </OrderDetail.Container>
                <OrderDetail.Container>
                  <OrderDetail.Subtotal>$238.00</OrderDetail.Subtotal>
                </OrderDetail.Container>
              </OrderDetail.Item3>
            </OrderDetail.Wrapper>
            <Shipping>
              <Shipping.Title>Shiping</Shipping.Title>
              <Shipping.Price>$16.00</Shipping.Price>
            </Shipping>
            <Shipping last>
              <Shipping.Total>Total</Shipping.Total>
              <Shipping.PriceGreen>$2,699.00</Shipping.PriceGreen>
            </Shipping>

            <OrderDetail.Description>
            Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.
            </OrderDetail.Description>
            <OrderDetail.Button>Track your order</OrderDetail.Button>
          </OrderDetail>
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
