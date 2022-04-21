import React from "react";
import {
  Add_Wrapper,
  Category,
  Category_Icon_Wrapper,
  Category_Input,
  Category_Word,
  Category_Wrapper,
  Description_Wrapper,
  Desc_Input,
  Desc_Input_Wrapper,
  Desc_Word,
  Featured,
  Featured_Wrapper,
  Flex_Wrapper,
  Flower_Four,
  Flower_One,
  Flower_Three,
  Flower_Two,
  Icon_Wrapper,
  Img_Container,
  Img_Wrapper_One,
  Img_Wrapper_Two,
  Input_Name,
  Input_Type,
  Input_Wrapper,
  Name_Input_Wrapper,
  Name_Plant,
  Naming,
  Plant,
  RedIcon,
  Short_Input,
  Short_Input_Wrapper,
  Short_Word,
  Short_Wrapper,
  Tags,
  Tags_Icon_Wrapper,
  Tags_Input,
  Tags_Word,
  Type_Flex_Wrapper,
  Type_Plant,
  Type_Wrapper,
  Typing,
  Flower_Five,
  Flower_Six,
  Flower_Seven,
  Flower_Eight,
  OnSave,
  Icon_Card_Wrapper,
  Garden_Wrapper,
  Plant_Wrapper,
  Watering_Wrapper,
  Email_Wrapper,
  Garder_Flower,
  Plant_Flower,
  Watering_Flower,
  Word_Wrapper,
  Garden_Word,
  Garden_Small,
  Plant_Word,
  Plant_Small,
  Watering_Word,
  Watering_Small,
  Join,
  Inputing,
  Button_Wrapper,
  Email_Small,
  GreenShop,
  Logo,
  West_Wrapper,
  West,
  Location,
  Contact_Wrapper,
  Message,
  Contact,
  Phone_Wrapper,
  Phone,
  Phone_Number,
  My_Account,
  Account_Wrapper,
  Weighty_Word,
  Small_Word,
  Instagram_Wrapper,
  Facebook,
  Instagram,
  Twitter,
  Inline,
  Tvchannel,
  Accept,
  PayImage,
  RightsPart,
} from "./style";
import redstar from "../../../assets/icons/redstar.png";
import flower1 from "../../../assets/imgs/flower1.png";
import flower2 from "../../../assets/imgs/flower2.png";
import flower3 from "../../../assets/imgs/flower3.png";
import flower4 from "../../../assets/imgs/flower4.png";
import flower5 from "../../../assets/imgs/flower5.png";
import flower6 from "../../../assets/imgs/flower6.png";
import flower7 from "../../../assets/imgs/flower7.png";
import flower8 from "../../../assets/imgs/flower8.png";
import facebook2 from "../../../assets/icons/facebook2.png";
import instagram from "../../../assets/icons/instagram.png";
import twitter from "../../../assets/icons/twitter.png";
import linkedin from "../../../assets/icons/linkedin.png";
import youtube from "../../../assets/icons/youtube.png";
import paypal from "../../../assets/imgs/paypal.png";
import { Button } from "antd";
export const AddPlantCard = () => {
  return (
    <Add_Wrapper>
      <Type_Wrapper>
        <Plant>Add plant</Plant>
        <Input_Wrapper>
          <Flex_Wrapper>
            <Name_Input_Wrapper>
              <Name_Plant>Name of plant</Name_Plant>
              <RedIcon src={redstar} />
            </Name_Input_Wrapper>
            <Input_Name type="text" />
          </Flex_Wrapper>
          <Typing>
            <Type_Flex_Wrapper>
              <Icon_Wrapper>
                <Type_Plant>Type</Type_Plant>
                <RedIcon src={redstar} />
              </Icon_Wrapper>
              <Input_Type type="text" />
            </Type_Flex_Wrapper>
          </Typing>
        </Input_Wrapper>
        <Category_Wrapper>
          <Category>
            <Category_Icon_Wrapper>
              <Category_Word>Category</Category_Word>
              <RedIcon src={redstar} />
            </Category_Icon_Wrapper>
            <Category_Input type="text" />
          </Category>
          <Tags>
            <Tags_Icon_Wrapper>
              <Tags_Word>Tags</Tags_Word>
              <RedIcon src={redstar} />
            </Tags_Icon_Wrapper>
            <Tags_Input type="text" />
          </Tags>
        </Category_Wrapper>
        <Short_Wrapper>
          <Short_Input_Wrapper>
            <Short_Word>Short Description</Short_Word>
            <RedIcon src={redstar} />
          </Short_Input_Wrapper>
          <Short_Input type="text" />
        </Short_Wrapper>
        <Description_Wrapper>
          <Desc_Input_Wrapper>
            <Desc_Word>Description</Desc_Word>
            <RedIcon src={redstar} />
          </Desc_Input_Wrapper>
          <Desc_Input type="text" />
        </Description_Wrapper>
        <Featured_Wrapper>
          <Featured>Featured Image</Featured>
          <RedIcon src={redstar} />
        </Featured_Wrapper>
        <Img_Container>
          <Img_Wrapper_One>
            <Flower_One src={flower1} />
            <Flower_Two src={flower2} />
            <Flower_Three src={flower3} />
            <Flower_Four src={flower4} />
          </Img_Wrapper_One>
          <Img_Wrapper_Two>
            <Flower_Five src={flower5} />
            <Flower_Six src={flower6} />
            <Flower_Seven src={flower7} />
            <Flower_Eight src={flower8} />
          </Img_Wrapper_Two>
        </Img_Container>
        <OnSave>Save Change</OnSave>
      </Type_Wrapper>
    </Add_Wrapper>
  );
};
export default AddPlantCard;
