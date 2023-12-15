import React, {useRef} from "react";
import styled, {css, keyframes} from "styled-components";
import {
  ContentLineHeight,
  displayFlex,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/style/theme/common";
import {kdamThmorPro, NGodicFont, NotoSansFont, RussoFont} from "@/style/font";
import Button from "@/atom/atoms/Button";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";


const InitSwiperContentStyle = styled.div`
  width: 100%;
  line-height: 1;
  //box-shadow: 0 10px 20px ${props => props.theme.palette.second}, 0 0 10px ${props => props.theme.palette.middle};
  position: relative;
  min-width: 1185px;
  padding: 3vw;
  min-height: 800px;

  ${displayFlex('column', 'center', 'center')};

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 360px;
  }
`

const TextAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(0, -4rem, 0);
  }
  59% {
    transform: translate3d(0, -4rem, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`


const TextStyle = styled.div<{ $content: string, $visible: boolean }>`
  color: ${props => props.theme.palette.second};
  font-size: 40px;
  font-weight: 700;
  bottom: 0;
  text-align: center;
  ${props => props.$visible && css` animation: ${TextAnimation} 1050ms ease-in normal;`};
  transform: translatez(0);
  flex: 1;

  ${(props) => props.theme.media.tablet} {
    font-size: 36px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 34px;
  }

  ${props => {
    switch (props.$content) {
      case 'p': {
        return css`
        `;
      }
      case 'r': {
        return css`
          //left: 1.4em;
          animation-delay: 200ms;
        `;
      }
      case 'o': {
        return css`
          //left: 2.1em;
          animation-delay: 400ms;
        `
      }
      case 'j': {
        return css`
          //left: 2.8em;
          animation-delay: 640ms;
        `
      }
      case 'e': {
        return css`
          //left: 3.5em;
          animation-delay: 860ms;
        `
      }
      case 'c': {
        return css`
          //left: 4.2em;
          animation-delay: 1000ms;
        `
      }
      case 't': {
        return css`
          //left: 4.9em;
          animation-delay: 1200ms;
        `
      }

    }
  }}
`

const TextFlexStyle = styled.div`
  ${displayFlex('row', 'center', 'center')};
  width: 70%;
  margin-bottom: 50px;
`

const CompanyIntroduceLayout = styled.div`
  padding-top: 100px;
  padding-bottom: 200px;

  ${(props) => props.theme.media.tablet} {
    padding-top: 100px;
    padding-bottom: 200px;
  }

  ${(props) => props.theme.media.mobile} {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  text-align: center;
`

const CompanyIntroduceText = styled.p`
  color: ${props => props.theme.palette.primary};
  ${MiddleTitleFontSizePC};
  ${ContentLineHeight};
  font-weight: bold;
  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`

const FiveSecondContentStyle = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 30px;
`

/**
 * 미 선택 시 보여줄 그리드
 * @param onCheckHandler
 * @constructor
 */
function InitSwiperContent({onCheckHandler}: InitSwiperContentInterface): React.JSX.Element {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.1,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })


  return (
    <InitSwiperContentStyle className={RussoFont.className}>
      <TextFlexStyle ref={ref}>
        <TextStyle $content={'p'} $visible={visible}>P</TextStyle>
        <TextStyle $content={'r'} $visible={visible}>R</TextStyle>
        <TextStyle $content={'o'} $visible={visible}>O</TextStyle>
        <TextStyle $content={'j'} $visible={visible}>J</TextStyle>
        <TextStyle $content={'e'} $visible={visible}>E</TextStyle>
        <TextStyle $content={'c'} $visible={visible}>C</TextStyle>
        <TextStyle $content={'t'} $visible={visible}>T</TextStyle>
      </TextFlexStyle>
      <CompanyIntroduceLayout>
        <CompanyIntroduceText className={NGodicFont.className}>
            Working for a ERSolution
        </CompanyIntroduceText>
        <CompanyIntroduceText className={NGodicFont.className}>
            2022.05 ~ 2023.08
        </CompanyIntroduceText>
      </CompanyIntroduceLayout>
      <FiveSecondContentStyle>
        <Button content={`READ MOREㅤ>`} onClick={onCheckHandler} font={NGodicFont.className} $type={''}/>
      </FiveSecondContentStyle>
    </InitSwiperContentStyle>
  )
}

export default React.memo(InitSwiperContent);