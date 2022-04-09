import React, { useState, useContext } from 'react';
import google from '../../../assets/icons/google.svg';
import facebook from '../../../assets/icons/facebook.svg';
import { Wrapper } from './style';
import AuthorizationData from '../../../context/Authorization';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Register = () => {
  const [authData, setAuthedData] = useContext(AuthorizationData);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );
  const data = {
    userName,
    email,
    password,
    firstName,
    lastName,
    phone,
    role: 'user',
  };
  const onSubmit = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      if (email && password && firstName && lastName && phone && userName) {
        authData.registerUser(data);
        setShowSpinner(true);
        setTimeout(() => {
          if (authData.isAuthed) {
            setAuthedData({ ...authData, showModal: false });
          } else {
            setShowSpinner(false);
          }
        }, 2000);
      }
    }
  };
  return (
    <>
      <Wrapper>
        <Wrapper.ModalParagraph>
          Enter your username and password to register.
        </Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          active={firstName.length > 0}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          value={firstName}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          active={lastName.length > 0}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
          value={lastName}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          active={phone.length > 0}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
          value={phone}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          active={userName.length > 0}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='Username'
          value={userName}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          active={email.length > 0}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          value={email}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          active={password.length > 0}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          value={password}
          onKeyDown={onSubmit}
        />
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
