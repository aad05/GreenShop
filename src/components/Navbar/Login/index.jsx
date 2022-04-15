import React, { useState, useContext } from 'react';
import google from '../../../assets/icons/google.svg';
import facebook from '../../../assets/icons/facebook.svg';
import AuthorizationData from '../../../context/Authorization';
import { Wrapper } from './style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Navigator from '../../../context/NavigateContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [authData, setAuhedData] = useContext(AuthorizationData);
  const [warnignAnimation, setWarningAnimation] = useState(false);
  const [navogateTo] = useContext(Navigator);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  );
  const onSubmit = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
      email && password && authData.checkUser(email, password, navogateTo);
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
  return (
    <>
      <Wrapper>
        <Wrapper.ModalParagraph>
          Enter your username and password to login.
        </Wrapper.ModalParagraph>
        <Wrapper.LoginInput
          active={email.length > 0}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          value={email}
          onKeyDown={onSubmit}
        />
        <Wrapper.LoginInput
          value={password}
          active={password.length > 0}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          onKeyDown={onSubmit}
        />
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
