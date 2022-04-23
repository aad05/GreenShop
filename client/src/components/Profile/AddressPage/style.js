import styled from 'styled-components'

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

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #727272;
    margin: 9px 0 30px 0;
`

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
  width: ${({phone}) => phone ? '80%' : '100%'};
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

Wrapper.Phone__wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`

Wrapper.Select = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;
  height: 40px;
  width: 20%;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  outline-color: #46a359;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 0 15px;
  padding-right: 10px;
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
`

Wrapper.Option = styled.option`
    padding: 0 15px;
`

Wrapper.Btn = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 131px;
    height: 40px;
    left: 458px;
    top: 704px;
    background: #46A358;
    border-radius: 3px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    margin: 50px 0 64px 0;
`

Wrapper.Bottom__wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 230px;
`

Wrapper.Bottom__left = styled.div`

`

Wrapper.Bottom__right = styled.div`
    display: flex;
    align-items: center;
`

Wrapper.Radio = styled.input`
    width: 16px;
    height: 16px;
    border: 1.5px solid #46A358;
    box-sizing: border-box;
    margin-right: 8px;
`

Wrapper.Add = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #46A358;
    margin-left: 55px;
    cursor: pointer;
`

Wrapper.Radio__title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
`