import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;
Wrapper.ImgSet = styled.div`
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(4, 100px);
  grid-row-gap: 16px;
`;

Wrapper.ImgSet.Img = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 1s;
  :hover {
    transform: scale(1.2);
  }
`;
Wrapper.MainWrapper = styled.img`
  width: 404px;
  height: 404px;
  mix-blend-mode: multiply;
  margin-left: 46px;
  @media (max-width: 1375px) {
    width: 304px;
    height: 404px;
  }
`;
Wrapper.MainImgWrapper = styled.div`
  position: relative;
`;
Wrapper.Search = styled(SearchOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 5;
  :hover {
    color: #46a358;
  }
  [data-icon] {
    width: 18px;
    height: 18px;
  }
`;
