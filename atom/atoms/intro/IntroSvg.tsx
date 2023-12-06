import styled, {css} from "styled-components";
import {introSvgKeyframes} from "@/style/animation";
import IntroSVG from '@/public/IntroSvg.svg';
import React from "react";
import {displayFlex} from "@/style/theme/common";
import {CinzelFont} from "@/style/font";

export const IntroSvgStyle = styled.div`
  min-height: 900px;
  font-size: 2.2em;
  width: 100%;
  ${displayFlex('row', 'center', 'center')}
  -webkit-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  -moz-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  -o-animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  animation: ${(props) => introSvgKeyframes(props.theme)} 8s infinite alternate;
  fill: coral;

  ${(props) => props.theme.media.tablet} {
    min-height: 700px;
    font-size: 2.5em;
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 470px;
    font-size: 2.4em;

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