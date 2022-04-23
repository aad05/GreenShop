import styled from 'styled-components'
import {ReactComponent as arrow} from '../../../assets/icons/arrow.svg'
import {ReactComponent as arrowgreen} from '../../../assets/icons/arrow-green.svg'

export const Container = styled.div`
    width: 85%;
    margin:auto;
    margin-top: 138px;
`

Container.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 16px;
    text-align: center;
    color: #3D3D3D;
`

Container.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #727272;
    margin: 15px 0 35px 0;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

Wrapper.Card = styled.div`
    width: 280px;
    max-height: 362px;
    margin-bottom: 50px;
`

Wrapper.Img = styled.img`
    width: 100%;
    height: 190px;
`

Wrapper.Wrap = styled.div`
    width: 100%;
    padding: 9px 15px;
`

Wrapper.Month = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #46A358;
    margin-bottom: 4px;
`

Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #3D3D3D;
    margin-bottom: 4px;
`

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
`

Wrapper.Btn = styled.div`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-top: 9px;
    color: ${({state}) => state ? '#46A358' : '#3D3D3D'};
`

Wrapper.Arrow = styled(arrow)`
    display: ${({state}) => state ? 'none' : 'flex'};
    width: 10px;
    height: 13px;
    margin-left: 3.5px;
`

Wrapper.ArrowGreen = styled(arrowgreen)`
    display: ${({state}) => state ? 'flex' : 'none'};
    width: 10px;
    height: 13px;
    margin-left: 3.5px;
`