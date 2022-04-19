import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
Wrapper.ModalParagraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${({ forgot }) => (forgot ? '#46a359' : '#3d3d3d')};
  margin-bottom: 14px;
  text-align: ${({ forgot }) => forgot && 'right'};
`;
Wrapper.LoginInput = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 100%;
  height: 40px;
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
Wrapper.Button = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ changeColor }) => (changeColor ? '#727272' : '#fff')};
  background-color: ${({ changeBg }) => (changeBg ? 'none' : '#46A358')};
  border: ${({ hasBorder }) => hasBorder && '1px solid #EAEAEA'};
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  display: flex;
  ${({ warnignAnimation }) =>
    warnignAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
Wrapper.Icon = styled.img`
  margin-right: ${({ google }) => (google ? '13px' : '5px')};
`;

Wrapper.Select = styled.select`
  border: 1px solid #eaeaea;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding-left: 14px;
  outline-color: #46a359;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000;
  margin-bottom: 17px;
  background: ${({ active }) => active && '#E8F0FE'};
`;
Wrapper.Option = styled.option``;
