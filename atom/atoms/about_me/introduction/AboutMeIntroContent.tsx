'use client'
import React, {useRef} from "react";
import styled, {css, keyframes} from "styled-components";
import {NGodicFont} from "@/style/font";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";

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

/**
 * AboutMe 한 마디 섹션
 * @constructor
 */
function AboutMeIntroContent():React.JSX.Element {

    // Target 요소 관찰
    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <IntroContentStyle $contentVisible={visible} ref={ref}>
            <IntroDefaultPStyle className={NGodicFont.className}><StrongPStyle>개발자로서</StrongPStyle>,</IntroDefaultPStyle>
            <IntroDefaultPStyle className={NGodicFont.className}>사용자에게 편안한 경험을 제공하는 것도 중요하지만,</IntroDefaultPStyle>
            <IntroDefaultPStyle className={NGodicFont.className}><StrongPStyle>협업하는 개발자에게도 편안한 경험을 제공</StrongPStyle>하고 싶습니다.</IntroDefaultPStyle>
        </IntroContentStyle>
    )
}

export default React.memo(AboutMeIntroContent);