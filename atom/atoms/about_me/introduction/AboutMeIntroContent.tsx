'use client'
import React, {useRef} from "react";
import styled, {css, keyframes} from "styled-components";
import {NGodicFont} from "@/style/font";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {
  commonAnimation,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/style/theme/common";

/**
 * 전체 에니메이션
 */
const contentAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 30%;
  }
  100% {
    opacity: 100%;
  }
`
/**
 * 레이아웃
 */
const IntroContentStyle = styled.div<{$contentVisible : boolean}>`
  width: 100%;
  text-align: center;
  margin-bottom: 130px;
  padding: 90px 0;

  ${props => props.$contentVisible ? css`opacity: 1` : css`opacity: 0`};
  ${props => props.$contentVisible && commonAnimation(css`${contentAnimation} 3s linear normal;`)};
  
  ${(props) => props.theme.media.tablet} {
    margin-bottom: 70px;
  }

  ${(props) => props.theme.media.mobile} {
    margin-bottom: 40px;
  }
`

/**
 * 기본 글씨 스타일
 */
const IntroDefaultPStyle = styled.p`
  ${MiddleTitleFontSizePC};
  line-height: 1.5;
  color: ${props => props.theme.palette.primary};
  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`
/**
 * 강조글 스타일
 */
const StrongPStyle = styled.span`
  display: inline;
  ${MiddleTitleFontSizePC};
  height: auto;
  line-height: 1.5;
  color: ${props => props.theme.palette.second};
  font-weight: bold;
  position: relative;
  
  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
    font-weight: bold;
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
        threshold: 0.5,
        root: null,
        rootMargin: '10%',
        freezeOnceVisible: true,
    })

    return (
        <IntroContentStyle $contentVisible={visible} ref={ref}>
            <IntroDefaultPStyle className={NGodicFont.className}>
              <StrongPStyle>개발자로서 사용자에게 편안한 경험을 제공</StrongPStyle>하는 것도 중요하지만,
            </IntroDefaultPStyle>
            <IntroDefaultPStyle className={NGodicFont.className}>
                <StrongPStyle>협업하는 개발자에게도 편안한 경험을 제공</StrongPStyle>
                하고 싶습니다.
            </IntroDefaultPStyle>
        </IntroContentStyle>
    )
}

export default React.memo(AboutMeIntroContent);