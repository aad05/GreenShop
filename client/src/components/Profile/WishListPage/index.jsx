
import React from 'react'
import { Wrapper } from './style'
import img1 from '../../../assets/imgs/flower1.png'
import img2 from '../../../assets/imgs/flower2.png'
import img3 from '../../../assets/imgs/flower3.png'

export const WishListPage = () => {
  return (
    <Wrapper>
        <Wrapper.Title>Wishlist</Wrapper.Title>
        <Wrapper.Card__container>
            <Wrapper.Card>
                <Wrapper.Img__wrapper>
                    <Wrapper.Img src={img1} />
                    <Wrapper.Icons__wrapper>
                        <Wrapper.Basket />
                        <Wrapper.Heart />
                        <Wrapper.Search />
                    </Wrapper.Icons__wrapper>
                </Wrapper.Img__wrapper>
                <Wrapper.Card__title>Barberton Daisy</Wrapper.Card__title>
                <Wrapper.Card__price>$119.00</Wrapper.Card__price>
            </Wrapper.Card>
            <Wrapper.Card>
                <Wrapper.Img__wrapper>
                    <Wrapper.Img src={img2} />
                    <Wrapper.Icons__wrapper>
                        <Wrapper.Basket />
                        <Wrapper.Heart />
                        <Wrapper.Search />
                    </Wrapper.Icons__wrapper>
                </Wrapper.Img__wrapper>
                <Wrapper.Card__title>Angel Wing Begonia</Wrapper.Card__title>
                <Wrapper.Card__price>$169.00</Wrapper.Card__price>
            </Wrapper.Card>
            <Wrapper.Card>
                <Wrapper.Img__wrapper>
                    <Wrapper.Img src={img3} />
                    <Wrapper.Icons__wrapper>
                        <Wrapper.Basket />
                        <Wrapper.Heart />
                        <Wrapper.Search />
                    </Wrapper.Icons__wrapper>
                </Wrapper.Img__wrapper>
                <Wrapper.Card__title>African Violet</Wrapper.Card__title>
                <Wrapper.Card__price>$199.00 <Wrapper.Card__oldPrice>$229.00</Wrapper.Card__oldPrice></Wrapper.Card__price>
            </Wrapper.Card>
        </Wrapper.Card__container>
    </Wrapper>
  )
}
