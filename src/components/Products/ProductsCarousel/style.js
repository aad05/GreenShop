import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: fit-content;
  background-color: #fbfbfb;
  margin-bottom: 40px;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    /* identical to box height, or 107% */

    color: #3d3d3d;
  }
  .price {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 100% */

    color: #46a358;
  }
  .wrap {
    padding-top: 12px;
    background-color: white;
  }
`;
