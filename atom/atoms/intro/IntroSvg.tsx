import styled, {css} from "styled-components";
import {introSvgKeyframes} from "@/style/animation";
import IntroSVG from '@/public/IntroSvg.svg';
import React from "react";
import {displayFlex} from "@/style/theme/common";
import {CinzelFont} from "@/style/font";

export const IntroSvgStyle = styled.div`
  position: relative;
  font-size: 30px;
  width: 100%;
  background-image: url('/2.jpg');
  background-size:cover;
  background-attachment:fixed;
  background-position: 0 , 50%;
  height:105vh;
  ${displayFlex('row', 'center', 'center')}

  -webkit-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  -moz-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  -o-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  

  &:after{
    content: '';
    display:block;
    width:100%;
    height: 300px;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%);
    bottom: 0;
    position: absolute;
  }
  ${(props) => props.theme.media.tablet} {
    min-height: 700px;
    font-size: 40px;
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 370px;
    font-size: 40px;

  }
`;
/**
 * Intro Svg View
 * @param children
 * @constructor
 */
function IntroSvg(): React.JSX.Element {
    return (
        <IntroSvgStyle className={CinzelFont.className}>
            <IntroSVG/>
        </IntroSvgStyle>
    )
}

export default React.memo(IntroSvg)