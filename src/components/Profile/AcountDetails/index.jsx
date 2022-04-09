import React, { useContext } from 'react';
import AuthorizationData from '../../../context/Authorization';
import { Wrapper } from './style';

const AcountDetails = () => {
  const [authedData] = useContext(AuthorizationData);
  //   In inputs have problem not changable
  return (
    <Wrapper>
      <Wrapper.Title>
        Personal Information ({authedData.userName.toUpperCase()})
      </Wrapper.Title>
      {/* First */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>First Name</Wrapper.Lable>
          <Wrapper.Input
            active={authedData.firstName.length}
            value={authedData.firstName}
            placeholder='First Name'
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Last Name</Wrapper.Lable>
          <Wrapper.Input
            active={authedData.lastName.length}
            value={authedData.lastName}
            placeholder='Last Name'
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Second */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Email address</Wrapper.Lable>
          <Wrapper.Input
            active={authedData.email.length}
            value={authedData.email}
            placeholder='Email address'
          />
        </Wrapper.LabelWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Phone Number</Wrapper.Lable>
          <Wrapper.Input
            active={authedData.phone.length}
            value={authedData.phone}
            placeholder='Phone number'
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
      {/* Third */}
      <Wrapper.InputWrapper>
        <Wrapper.LabelWrapper>
          <Wrapper.Lable>Username</Wrapper.Lable>
          <Wrapper.Input
            active={authedData.userName.length}
            value={authedData.userName}
            placeholder='User name'
          />
        </Wrapper.LabelWrapper>
      </Wrapper.InputWrapper>
    </Wrapper>
  );
};

export default AcountDetails;
