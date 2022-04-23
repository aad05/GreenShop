import styled, { css } from 'styled-components';
import { HeartOutlined } from '@ant-design/icons';

const select = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
Wrapper.Header = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
`;
Wrapper.FlowerName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Price = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;
  color: #46a358;
`;
Wrapper.AdditionalInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
Wrapper.Paragraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  display: inline;
  @media (max-width: 1400px) {
    display: block;
  }
`;
Wrapper.StarWrapper = styled.div`
  display: flex;
  grid-column-gap: 5.5px;
  display: inline;
  margin-right: 13px;
  @media (max-width: 1400px) {
    display: block;
  }
`;
Wrapper.StarImg = styled.img``;
Wrapper.Hr = styled.div`
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.2);
  margin: 13px 0 15px 0;
`;
// ========== Desctription ==========
Wrapper.WrapperDescription = styled.div``;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 10px;
`;
Wrapper.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  margin-bottom: 24px;
`;
// ========== Size ==========

Wrapper.WrapperSize = styled.div`
  display: flex;
  grid-gap: 10px;
`;
Wrapper.Size = styled.div`
  width: 28px;
  height: 28px;
  border: ${({ active }) =>
    active ? '1px solid  #46A358' : '1px solid #EAEAEA'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? '#46A358' : '#727272')};
  ${select}
`;

// ========== Buy and Carts ==========

Wrapper.CartWrapper = styled.div`
  display: flex;
  margin-top: 23px;
`;
Wrapper.IncreamentWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;
Wrapper.IncreamentCart = styled.div`
  width: 38px;
  height: 38px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${select}
`;
Wrapper.Count = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 10px;
  color: #3d3d3d;
  ${select}
`;
Wrapper.ButtonWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-left: 26px;
`;
Wrapper.Button = styled.div`
  width: 130px;
  height: 40px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: #46a358;
  border: 1px solid #46a358;
  ${select}
  :hover {
    background: #46a358;
    color: #fff;
  }
`;
Wrapper.ButtonHeart = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #46a358;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  ${select}
`;
Wrapper.Heart = styled(HeartOutlined)`
  color: #46a358;
  [data-icon] {
    width: 20px;
    height: 20px;
  }
`;

// ========== Tags ==========
Wrapper.TagsWrapper = styled.div`
  margin-top: 26px;
`;
Wrapper.Tag = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  margin: 10px 0;
`;
Wrapper.ThinTag = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  opacity: 0.5;
  display: inline;
`;
