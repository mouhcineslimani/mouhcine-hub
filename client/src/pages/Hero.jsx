import React from 'react'
import styled from 'styled-components'
import myPicture from '../assets/images/myPhoto.png'
import { bgColorPrimary, neutral, typeScale } from '../utils'

const HeroContainer = styled.div`
    display: flex; 
    align-items: center;
    & > div:nth-child(1) {
        flex: 2; 
    }

    & > div:nth-child(2) {
        flex: 1; 
    }

`
const HeroInfo = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 4rem;
`
const HeroInfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: ${typeScale["header1"]};
`
const HeroInfoText = styled.p`
    margin: 10px 0;
    color: ${props => props.color || ""}; 
    font-weight: 800;
`
const HeroInfoBtns = styled.div`
    display: flex; 
    gap: 1rem; 
`
const HeroInfoBtn = styled.button`
    padding: 1rem 1.4rem;
    font-size: ${typeScale["paragraph"]};
    background: ${props => props.bgColor ? bgColorPrimary[100]  : neutral[200]};
    color: ${props => props.color ? neutral[100] : ""};
    width: 13rem;
    border: none;
    border-radius: 1.7rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background: ${props => props.bgColor ? bgColorPrimary[400] : neutral[300]};
        color: ${neutral[600]} ;
    }
`
const HeroImageContainer = styled.div`
    width: 100%;
    img {
        width: 100%;
        background: ${bgColorPrimary[100]};
        border-top-right-radius: 40%;
        border-top-left-radius: 40%;
        padding-top : 60px ;
    }
`


export default function Hero() {
  return (
    <HeroContainer>
        <HeroInfo>
            <HeroInfoTextContainer>
                <HeroInfoText color={bgColorPrimary[100]}>Empowering individuals to achieve </HeroInfoText> 
                <HeroInfoText>efficiency while gaining freedom through</HeroInfoText>
                <HeroInfoText color={neutral[400]}>access to versatile content and tools.</HeroInfoText>         
            </HeroInfoTextContainer>
            <HeroInfoBtns>
                <HeroInfoBtn bgColor={true} color={true}>Stop Overthing</HeroInfoBtn>
                <HeroInfoBtn>Remote Lifestyle</HeroInfoBtn>
            </HeroInfoBtns>
        </HeroInfo>
        <HeroImageContainer>
            <img src={myPicture} alt="myPicture" />
        </HeroImageContainer>
    </HeroContainer>
  )
}
