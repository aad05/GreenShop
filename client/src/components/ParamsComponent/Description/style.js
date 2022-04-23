import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 91px;
`;
Wrapper.Header = styled.div`
  display: flex;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.2);
`;
Wrapper.Header.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#46A358' : '#3d3d3d')};
  margin-left: ${({ left }) => left && '24px'};
  cursor: pointer;
  padding-bottom: 20px;
  border-bottom: ${({ active }) => active && '3px solid #46A358'};
  transition: color 0.3s;
`;
Wrapper.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  margin-top: ${({ bigger }) => (bigger ? '40px' : '20px')};
`;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;
  margin-top: 20px;
`;
