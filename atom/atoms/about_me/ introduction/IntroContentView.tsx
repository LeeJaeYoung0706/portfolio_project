'use client'
import React, {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {OrbitFont} from "@/style/font";
import {useAppSelector} from "@/lib/redux/hooks";

/**
 * 전체 에니메이션
 */
const contentAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
`
/**
 * 강조 선 에니메이션
 */
const lineAnimation = keyframes`
  0% {
    width: 0;
    height: 3px;
  }
  50% {
    width: 50%;
    height: 3px;
  }
  100% {
    width: 100%;
    height: 3px;
  }
`

const IntroContentStyle = styled.div<{$contentVisible : boolean}>`
  width: 100%;
  text-align: center;
  margin-bottom: 70px;
  padding: 20px;
  ${props => props.$contentVisible ? css`animation: ${contentAnimation} 2s linear normal; opacity: 1` : css`opacity: 0`}
`
const IntroDefaultPStyle = styled.p`
  font-size: 2rem;
  line-height: 1.7;

  ${(props) => props.theme.media.tablet} {
    font-size: 1.3rem;
    line-height: 1.5;
    
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.7;
  }
`

const StrongPStyle = styled.span`
  display: inline;
  font-size: 2.2rem;
  height: auto;
  line-height: 1.5;
  color: ${props => props.theme.palette.primary};
  font-weight: bold;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 1.4em;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 1% 40% 40% 40%;
    background-image: linear-gradient(to bottom right, red , ${props => props.theme.palette.middle} );
    animation: ${lineAnimation} 2s linear 1;
  }
  
  ${(props) => props.theme.media.tablet} {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.1;
  }
`
function IntroContentView():React.JSX.Element {

    // Target 요소 관찰
    const {about_me} = useAppSelector((state) => state.targetSlice);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (!contentVisible && about_me !== undefined) {
            setContentVisible(() => about_me.visible)
        }
    }, [about_me]);


    return (
        <IntroContentStyle $contentVisible={contentVisible}>
            <IntroDefaultPStyle className={OrbitFont.className}><StrongPStyle>개발자로서</StrongPStyle>,</IntroDefaultPStyle>
            <IntroDefaultPStyle className={OrbitFont.className}>사용자에게 편안한 경험을 제공하는 것도 중요하지만,</IntroDefaultPStyle>
            <IntroDefaultPStyle className={OrbitFont.className}><StrongPStyle>협업하는 개발자에게도 편안한 경험을 제공</StrongPStyle>하고 싶습니다.</IntroDefaultPStyle>
        </IntroContentStyle>
    )
}

export default React.memo(IntroContentView)