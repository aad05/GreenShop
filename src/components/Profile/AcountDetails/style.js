import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 61px;
  margin-left: 28px;
  width: 100%;
`;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.InputWrapper = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 28px;
  margin-top: 20px;
`;
Wrapper.LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  width: 50%;
`;
Wrapper.Lable = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
Wrapper.Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 14px;
  outline-color: #46a359;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#000' : '#a5a5a5')};
  margin-bottom: 17px;
  background: ${({ active }) => active && '#E8F0FE'};
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a5a5a5;
  }
`;
Wrapper.OutletWrap = styled.div`
  flex: 1;
`;
