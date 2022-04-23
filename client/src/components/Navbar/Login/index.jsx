import React, { useState, useContext } from 'react';
import google from '../../../assets/icons/google.svg';
import facebook from '../../../assets/icons/facebook.svg';
import AuthorizationData from '../../../context/Authorization';
import { Wrapper } from './style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Navigator from '../../../context/NavigateContext';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    role: 'user',
  });
  const [showSpinner, setShowSpinner] = useState(false);
  const [authData, setAuhedData] = useContext(AuthorizationData);
  const [warnignAnimation, setWarningAnimation] = useState(false);
  const [navogateTo] = useContext(Navigator);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    const { email, password } = data;
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      email && password && authData.checkUser(data, navogateTo);
      setShowSpinner(true);
      setTimeout(() => {
        if (authData.isAuthed) {
          setAuhedData({ ...authData, showModal: false });
        } else {
          setShowSpinner(false);
        }
        if (!authData.isAuthed) {
          setWarningAnimation(true);
          setTimeout(() => {
            setWarningAnimation(false);
          }, 1000);
        }
      }, 2000);
    }
  };
  const { email, password } = data;
  return (
    <>
      <Wrapper>
        <Wrapper.ModalParagraph>
          Enter your username and password to login.
        </Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          active={email.length > 0}
          onChange={handleChange}
          name='email'
          placeholder='Email'
          value={email}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          value={password}
          active={password.length > 0}
          onChange={handleChange}
          type='password'
          name='password'
          placeholder='Password'
          onKeyDown={onSubmit}
        />
        <Wrapper.Select name='role' onChange={handleChange}>
          <Wrapper.Option value={'user'}>User</Wrapper.Option>
          <Wrapper.Option value={'seller'}>Seller</Wrapper.Option>
        </Wrapper.Select>
        <Wrapper.ModalParagraph forgot>Forgot Password?</Wrapper.ModalParagraph>
        <Wrapper.Button
          warnignAnimation={warnignAnimation}
          mt='27'
          onClick={onSubmit}
        >
          {showSpinner ? <Spin indicator={antIcon} /> : 'Login'}
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

export default Login;
