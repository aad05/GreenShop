import React from "react";
import { Button, Desc, Left, Right, Title, Wrapper, Image } from "./style";
// import bigflower from "../../../assets/imgs/big.png";
import { hero } from "../../../utils/hero";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const MainCard = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {hero.map((value) => (
          <SwiperSlide>
            <Left>
              <Desc top>{value?.descTop} </Desc>
              <Title>
                {value.title} <small>Planet</small>{" "}
              </Title>
              <Desc line>{value?.descLine}</Desc>
              <Button>{value?.btn ? "" : "Shop Now"}</Button>
            </Left>

            <Right>
              <Image src={value?.img} alt="cannot be used" />
            </Right>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default MainCard;
