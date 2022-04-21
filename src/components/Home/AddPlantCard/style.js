import styled from "styled-components";
import { ReactComponent as logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as location2 } from "../../../assets/icons/location2.svg";
import { ReactComponent as phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as message } from "../../../assets/icons/message.svg";
const Add_Wrapper = styled.div`
  width: 100%;
  height: 1900px;
  display: flex;
  flex-direction: column;
`;
const Type_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 289px;
  margin-right: 289px;
  height: 1000px;
`;
const Plant = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
const Input_Wrapper = styled.div`
  display: flex;
`;
const Flex_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name_Plant = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Name_Input_Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const RedIcon = styled.img`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 15px;
  margin-top: -25px;
`;
const Input_Name = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 3px;
  width: 453px;
  height: 40px;
  outline: none;
`;
const Typing = styled.div`
  display: flex;
  flex-direction: column;
`;
const Type_Flex_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
`;
const Type_Plant = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Icon_Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Input_Type = styled.input`
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  width: 453px;
  outline: none;
  height: 40px;
`;
const Category_Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
`;
const Category_Icon_Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Category_Word = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Category_Input = styled.input`
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  width: 453px;
  height: 40px;
  outline: none;
`;
const Tags = styled.div`
  display: flex;
  margin-left: 28px;
  flex-direction: column;
`;
const Tags_Icon_Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Tags_Word = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Tags_Input = styled.input`
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  width: 453px;
  height: 40px;
  outline: none;
`;
const Short_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Short_Input_Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Short_Word = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Short_Input = styled.input`
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  width: 934px;
  height: 40px;
  outline: none;
`;
const Description_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Desc_Input_Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Desc_Word = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Desc_Input = styled.input`
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 3px;
  width: 934px;
  height: 80px;
  outline: none;
`;
const Featured_Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Featured = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
`;
const Img_Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img_Wrapper_One = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Img_Wrapper_Two = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Flower_One = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Two = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Three = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Four = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Five = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Six = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Seven = styled.img`
  width: 200px;
  height: 200px;
`;
const Flower_Eight = styled.img`
  width: 200px;
  height: 200px;
`;
const OnSave = styled.button`
  background: #46a358;
  border-radius: 3px;
  width: 130px;
  height: 40px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  border: none;
  margin-top: 50px;
`;

export {
  OnSave,
  Flower_One,
  Flower_Two,
  Flower_Three,
  Flower_Four,
  Flower_Five,
  Flower_Six,
  Flower_Seven,
  Flower_Eight,
  Img_Wrapper_One,
  Img_Wrapper_Two,
  Img_Container,
  Featured,
  Featured_Wrapper,
  Desc_Input_Wrapper,
  Desc_Input,
  Desc_Word,
  Description_Wrapper,
  Short_Input,
  Short_Input_Wrapper,
  Short_Word,
  Short_Wrapper,
  Tags_Icon_Wrapper,
  Tags_Word,
  Tags_Input,
  Category_Input,
  Category_Word,
  Category_Icon_Wrapper,
  Tags,
  Category_Wrapper,
  Category,
  Name_Input_Wrapper,
  Type_Flex_Wrapper,
  Type_Plant,
  Icon_Wrapper,
  Input_Type,
  RedIcon,
  Input_Wrapper,
  Input_Name,
  Name_Plant,
  Typing,
  Flex_Wrapper,
  Plant,
  Add_Wrapper,
  Type_Wrapper,
};
