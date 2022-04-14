import styled from 'styled-components';
import {ReactComponent as basket} from '../../../assets/icons/basket.svg'
import {ReactComponent as heart} from '../../../assets/icons/heart-red.svg'
import {ReactComponent as search} from '../../../assets/icons/search.svg'

export const Wrapper = styled.div`
  margin-top: 61px;
  margin-left: 28px;
  width: 100%;
  padding-bottom: 128px;
`;

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 51px;
`

Wrapper.Card__container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

Wrapper.Card = styled.div`
    width: 270px;
    padding-bottom: 20px;
`

Wrapper.Img__wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
`

Wrapper.Img = styled.img`
    width: 100%;
    height: 90%;
`

Wrapper.Card__title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin:25px 0 6px 0;
`

Wrapper.Card__price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #46A358;
    display: flex;
`

Wrapper.Icons__wrapper = styled.div`
    position: absolute;
    width: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
`

Wrapper.Basket = styled(basket)`
    width: 20px;
    height: 20px;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.2);
    }
`

Wrapper.Heart = styled(heart)`
    width: 20px;
    height: 20px;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.2);
    }
`

Wrapper.Search = styled(search)`
    width: 20px;
    height: 20px;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.2);
    }
`

Wrapper.Card__oldPrice = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #A5A5A5;
    margin-left: 5px;
`