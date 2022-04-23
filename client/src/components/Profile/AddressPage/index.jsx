import React from 'react'
import { Wrapper } from './style'

export const AddressPage = () => {
  return (
    <Wrapper>
        <Wrapper.Title>Billing Address</Wrapper.Title>
        <Wrapper.Description>The following addresses will be used on the checkout page by default.</Wrapper.Description>
        {/* First */}
        <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>First Name *</Wrapper.Lable>
          <Wrapper.Input
            placeholder=''
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Last Name *</Wrapper.Lable>
          <Wrapper.Input
            placeholder=''
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Second */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Country / Region *</Wrapper.Lable>
          <Wrapper.Input
            placeholder='Select a country / region'
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Town / City *</Wrapper.Lable>
          <Wrapper.Input
            placeholder=''
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Third */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Street Address *</Wrapper.Lable>
          <Wrapper.Input
            placeholder='House number and street name'
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Appartment *</Wrapper.Lable>
          <Wrapper.Input
            placeholder='Appartment, suite, unit, etc. (optional)'
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Fourth */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>State *</Wrapper.Lable>
          <Wrapper.Input
            placeholder='Select a state'
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Zip *</Wrapper.Lable>
          <Wrapper.Input
            placeholder=''
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Fifth */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Email Address *</Wrapper.Lable>
          <Wrapper.Input
            placeholder=''
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Phone Number *</Wrapper.Lable>
          <Wrapper.Phone__wrapper>
            <Wrapper.Select>
                <Wrapper.Option>+966</Wrapper.Option>
                <Wrapper.Option>+998</Wrapper.Option>
                <Wrapper.Option>+1</Wrapper.Option>
                <Wrapper.Option>+82</Wrapper.Option>
                <Wrapper.Option>+86</Wrapper.Option>
            </Wrapper.Select>
            <Wrapper.Input
                type='tel'
                placeholder=''
                phone
            />
          </Wrapper.Phone__wrapper>
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      <Wrapper.Btn>Save Address</Wrapper.Btn>
      <Wrapper.Bottom__wrapper>
          <Wrapper.Bottom__left>
              <Wrapper.Title>Shipping Address</Wrapper.Title>
              <Wrapper.Description>You have not set up this type of address yet.</Wrapper.Description>
          </Wrapper.Bottom__left>
          <Wrapper.Bottom__right>
                <Wrapper.Radio type='radio' />
                <Wrapper.Radio__title>Same as billing address</Wrapper.Radio__title>
                <Wrapper.Add>Add</Wrapper.Add>
          </Wrapper.Bottom__right>
      </Wrapper.Bottom__wrapper>
    </Wrapper>
  )
}
