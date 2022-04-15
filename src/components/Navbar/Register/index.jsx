import React, { useState, useContext } from 'react';
import google from '../../../assets/icons/google.svg';
import facebook from '../../../assets/icons/facebook.svg';
import { Wrapper } from './style';
import AuthorizationData from '../../../context/Authorization';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Navigator from '../../../context/NavigateContext';

const Register = () => {
  const [authData, setAuthedData] = useContext(AuthorizationData);
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'user',
    storeName: '',
  });
  const [showSpinner, setShowSpinner] = useState(false);
  const [navigateTo] = useContext(Navigator);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    const { email, password, firstName, lastName, phone, userName } = data;
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      if (email && password && firstName && lastName && phone && userName) {
        authData.registerUser(data, navigateTo);
        setShowSpinner(true);
        setTimeout(() => {
          if (authData.isAuthed) {
            setAuthedData({ ...authData, showModal: false });
          } else {
            setShowSpinner(false);
          }
          setData({
            userName: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            role: 'user',
            storeName: '',
          });
        }, 2000);
      }
    }
  };
  const { email, password, firstName, lastName, phone, userName, storeName } =
    data;
  return (
    <>
      <Wrapper>
        <Wrapper.ModalParagraph>
          Enter your username and password to register.
        </Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          active={firstName.length > 0}
          onChange={handleChange}
          placeholder='First Name'
          value={firstName}
          onKeyDown={onSubmit}
          name='firstName'
        />
        <Wrapper.LoginInput
          active={lastName.length > 0}
          onChange={handleChange}
          placeholder='Last Name'
          value={lastName}
          onKeyDown={onSubmit}
          name='lastName'
        />
        <Wrapper.LoginInput
          active={phone.length > 0}
          onChange={handleChange}
          placeholder='Phone'
          value={phone}
          onKeyDown={onSubmit}
          name='phone'
        />
        <Wrapper.LoginInput
          active={userName.length > 0}
          onChange={handleChange}
          placeholder='Username'
          value={userName}
          onKeyDown={onSubmit}
          name='userName'
        />
        <Wrapper.LoginInput
          active={email.length > 0}
          onChange={handleChange}
          placeholder='Email'
          value={email}
          onKeyDown={onSubmit}
          name='email'
        />
        <Wrapper.LoginInput
          active={password.length > 0}
          onChange={handleChange}
          placeholder='Password'
          value={password}
          onKeyDown={onSubmit}
          name='password'
        />
        <Wrapper.Select name='role' onChange={handleChange}>
          <Wrapper.Option value={'user'}>User</Wrapper.Option>
          <Wrapper.Option value={'seller'}>Seller</Wrapper.Option>
        </Wrapper.Select>
        {data.role === 'seller' && (
          <Wrapper.LoginInput
            active={storeName.length > 0}
            onChange={handleChange}
            placeholder='Store Name'
            value={storeName}
            onKeyDown={onSubmit}
            name='storeName'
          />
        )}
        <Wrapper.Button mt='27' onClick={onSubmit}>
          {showSpinner ? <Spin indicator={antIcon} /> : 'Register'}
        </Wrapper.Button>
        <Wrapper.Button changeColor hasBorder changeBg mt='27'>
          <Wrapper.Icon google src={google} />
          Login with Google
        </Wrapper.Button>
        <Wrapper.Button changeColor hasBorder changeBg mt='15'>
          <Wrapper.Icon src={facebook} />
          Login with Facebook
        </Wrapper.Button>
      </Wrapper>
    </>
  );
};

export default Register;
