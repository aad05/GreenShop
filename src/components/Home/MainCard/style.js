import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  height: 60vh;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  margin-top: 12px;
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  height: 100%;
  padding: 30px;
`;
export const Right = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;
export const Desc = styled.div`
  font-style: normal;
  font-weight: ${({ line }) => (line ? '300' : '500')};
  font-size: 14px;
  line-height: ${({ line }) => (line ? '26px' : '16px')};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3d3d3d;
  padding-top: ${({ top }) => (top ? '38px' : '10px')};
  padding-bottom: ${({ line }) => line && '55px'};
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 70px;
  text-transform: uppercase;
  color: #3d3d3d;
`;
export const Button = styled.div`
  background: #46a358;
  border-radius: 6px;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;
export const Image = styled.img`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 32em;
`;
