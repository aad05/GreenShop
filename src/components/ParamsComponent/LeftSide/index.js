import React, { useState } from 'react';
import { Wrapper } from './style';
import flower1 from '../../../assets/imgs/flower1.png';
import flower2 from '../../../assets/imgs/flower2.png';
import flower3 from '../../../assets/imgs/flower3.png';

const LeftSide = ({ data }) => {
  var imgSet = [flower1, flower2, flower3, data.img];
  const [showImg, setShowImg] = useState(3);
  return (
    <Wrapper>
      <Wrapper.ImgSet>
        {imgSet.map((value, index) => (
          <Wrapper.ImgSet.Img
            key={index}
            src={value}
            onClick={() => setShowImg(index)}
          />
        ))}
      </Wrapper.ImgSet>
      <Wrapper.MainImgWrapper>
        <a style={{ color: '#000' }} href='#description'>
          <Wrapper.Search />
        </a>
        <Wrapper.MainWrapper img src={imgSet[showImg]} />
      </Wrapper.MainImgWrapper>
    </Wrapper>
  );
};

export default LeftSide;
