import styled from 'styled-components'
import {ReactComponent as deletee} from '../../../assets/icons/delete.svg'

export const Container = styled.div`
    width: 85%;
    margin: auto;
    margin-bottom: 50px;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: ${({products})=>products?'51px':'36px'} ;
`

export const Nav_item = styled.div`
    font-style: normal;
    font-weight: ${({option})=>option?'bold':'normal'};
    font-size: 15px;
    line-height: 16px;  
    color: #3D3D3D;
    padding: 0 5px 0 5px;
`

export const Left = styled.div`
    width: 60%;
`


export const Wrapper__table = styled.div`
    display: flex;
    height: 30px;
    border-bottom:  0.3px solid rgba(70, 163, 88, 0.5);
`

export const Product = styled.div`
    display: flex;
    align-items: center;
    flex: 2;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;

`

export const Wrapper2 = styled.div`
    display: flex;
    background: #FBFBFB;
    margin-top: 15px;
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;

`

export const Img = styled.img`
    width: 70px;
    height: 70px;
`

export const Left_Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
`

export const Left_desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    margin-top: 6px;
`

export const Plus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 900;
    width: 21.71px;
    height: 25px;
    left: 578px;
    top: 241px;
    background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
    border-radius: 29px;
`

export const Count = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 10px;
    color: #3D3D3D;
    margin: 0 10px;
`

export const Delete_icon = styled(deletee)`
    transition: all .2s ease;
    :active{
        transform: scale(0.97);
    }
`

export const Delete = styled.div`
    display: flex;
    align-items: center;
    flex: 0.3;

`

export const Total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #46A358;

`

export const Right = styled.div`
    width: 40%;
    padding-left:75px;
 
`


export const Right__Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3D3D3D;
    padding-bottom: 15px;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);;
`

export const Right__apply = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #3D3D3D;
    margin-top: 10px;
`

export const Right__wrapper = styled.div`
    display: flex;
    margin-top: 8px;
    margin-bottom: 20px;
`

export const Right__input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #46A358;
    box-sizing: border-box;
    border-radius: 3px;
    outline: none;
    padding-left: 10px;
`

export const Right__btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 102px;
    height: 40px;
    background: #46A358;
    border-radius: 0px 3px 3px 0px;
    color: white;
`

export const Sub = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
`

export const Right__wrapper2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`

export const Right__price = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #3D3D3D;
`

export const Right__wrapper3 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
`

export const Right__total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
`

export const Right__totalprice = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46A358;
`

export const Checkout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #46A358;
    border-radius: 3px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 27px;
`

export const Continue__shopping = styled.div`
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #46A358;
    margin-top: 10px;
`