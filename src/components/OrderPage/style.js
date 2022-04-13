import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 85%;
    margin: auto;
    margin-bottom: 50px;
`

export const Wrapper = styled.div`
    display: flex;
    margin-top: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
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
    flex: 2;
    /* background-color: red; */
    .inputs-first{
        margin-top: 50px;
    }
`

export const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;    
`


export const Input = styled.input`
    width: 48%;
    height: 33px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 3px;
`

export const Notes = styled.textarea`
    width: 48%;
    height: 140px;
    padding: 10px;
    outline: none;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 3px;

`
export const Right = styled.div`
    flex: 1.2;
    margin-left: 40px;
`

export const Right__title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin-bottom: 50px;
`

export const Right__total__subtotal = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.3px solid #EAEAEA;
    padding-bottom: 10px;
`

export const Right__total = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    margin-top: 15px;
`

export const Right__card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background: #FBFBFB;
    margin-top: 10px;
`

export const Right__card__img = styled.img`
    height: 100;
`

export const Right__card__wrapper = styled.div`
`

export const Right__card__title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
`

export const Right__card__desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #A5A5A5;
    margin-top: 6px;
`

export const Right__card__count = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #727272;
`

export const Right__card__price = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46A358;
    padding-right: 10px;
`

export const Have__a__coupon__code = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #3D3D3D;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
`

export const Click__here = styled.div`
    color: #46A358;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #46A358;
`

export  const Right__right__wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Right__flex__right = styled.div`
    width: 80%;
`

export const Right__Flex__item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    
`

export const Right__flex__title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D; 
`

export const Right__flex__price = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #3D3D3D;
`

export const Right__flex__view = styled.div`
    display: flex;
    justify-content: flex-end;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #46A358;
    margin-top: 10px;
`

export const Right__Flex__item2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    border-top: 1px solid rgba(70, 163, 88, 0.5);
    padding-top: 10px;
`

export const Payment__methods = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #3D3D3D;
    margin-top: 30px;
`

export const Payement__wrapper = styled.div`
    display: flex;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 3px;
    height: 45px;
    margin-top: 17px;
    align-items: center;
    padding: 0 10px;
`

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    border: 1.2px solid #46A358;
    box-sizing: border-box;
    border-radius: 50%;
    accent-color: #46A358;
`

export const Paypals = styled.img`
    margin-left: 10px;
`

export const Payment__title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3D3D3D;
    margin-left: 10px;
`

export const Place__order = styled.div`
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
    margin-top: 50px;
    cursor: pointer;
    transition: all .4s ease;
    :hover{
        transform: scale(0.97);
    }
`

