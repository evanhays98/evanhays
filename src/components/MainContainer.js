import React, {useState} from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainerC = styled.div`
    color: #ededed;
    background: ${({lightBg}) => (lightBg)};
    margin: 0 auto;

`

export const MainWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: calc (0.311526 * 100vh + 10);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    justify-content: center;
`

export const MainRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px)
    {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const TopLine = styled.p`
    color: ${({toplinecolor}) => (toplinecolor)};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 10px 0;
`

export const Heading = styled.h1`
    padding: 12px 0;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#1bb198' : '#1bb198')};

    @media screen and (max-width: 768px)
    {
        font-size: 27px;
    }
`

export const Subtitle = styled.p`
    padding: 17px 0;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#ededed' : '#ededed')};

    @media screen and (max-width: 768px)
    {
        font-size: 16px;
    }
`

export const Subtitle2 = styled.p`
    padding: 17px 0;
  text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#a7d9d0' : '#a7d9d0')};

    @media screen and (max-width: 768px)
    {
        font-size: 14px;
    }
`

export const ImgWrap = styled.div`
    height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
    border-radius: 20px;
`

const MainContainer = ({id,
                        lightBg,
                        lightText,
                        topLine,
                        lieux,
                        headline,
                        description,
                        imgStart,
                        img,
                        alt,
                        toplinecolor,
                        darkText}) => {
    return (
        <MainContainerC lightBg={lightBg} id={id}>
            <MainWrapper>
                <MainRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine toplinecolor={toplinecolor}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle2 darkText={darkText}>{lieux}</Subtitle2>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </MainRow>
            </MainWrapper>
        </MainContainerC>

        
    );
};

export default MainContainer;