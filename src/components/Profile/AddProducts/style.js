import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  .crud {
    background: #fbfbfb;
    padding: 10px 20px 10px 10px;
  }
`;
Wrapper.Sidebar = styled.div`
  margin-top: 60px;
  width: 30%;
  height: fit-content;
  background: #fbfbfb;
`;
Wrapper.Body = styled.div`
  width: 100%;
  height: fit-content;
  margin-left: 28px;
  table {
    tr:not(.not) {
      margin-bottom: 20px;
      margin-top: 20px;
      background-color: #fbfbfb;
      border: 10px solid white;
    }
  }
`;
const SidebarFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 26px;
  :hover {
    cursor: pointer;
    transition: 0.2s linear;
    border-left: 5px solid green;
    background-color: white;
    .pre-title {
      color: green;
      font-weight: 500;
    }
  }
`;

const Line = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 22px;
  margin-top: 22px;
`;

const PreTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #727272;
  margin-left: 13px;
  font-weight: ${(props) => (props.bold ? '900' : '')};
  :hover {
    color: green;
    font-weight: 500;
  }
`;

const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: ${(props) => (props.italic ? '16px' : '18px')};
  margin: 13px 12px;
  color: #3d3d3d;
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
`;

const NavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
`;

const AddNew = styled.div`
  border: 1px solid #46a358;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #46a358;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #46a358;
  :hover {
    cursor: pointer;
  }
`;

const ItemTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;

const PreItemTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #a5a5a5;
`;

const ItemTitleGray = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #727272;
`;
const BorderTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 22px;
  color: #3d3d3d;
`;
const CrudTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #727272;
`;
const TitleTH = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: ${(props) => (props.margin ? '6px' : '')};
  color: #3d3d3d;
`;
const TitleTHGray = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #727272;
`;
const InputType = styled.input`
  padding: 5px 10px;
  color: #727272;
  background-color: white;
  outline: none;
  border: 1px solid #e0dede;
  border-radius: 10px;
  width: 160px;
`;

export {
  Wrapper,
  SidebarFlex,
  ItemTitleGray,
  PreTitle,
  Title,
  Logout,
  Line,
  NavBody,
  AddNew,
  ItemTitle,
  PreItemTitle,
  BorderTitle,
  CrudTitle,
  TitleTH,
  TitleTHGray,
  InputType,
};
