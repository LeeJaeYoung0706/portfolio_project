import styled, {css} from "styled-components";
import {introSvgKeyframes} from "@/style/animation";
import IntroSvgPC from '@/public/IntroSvgPC.svg';
import React from "react";
import {commonAnimation, displayFlex} from "@/style/theme/common";
import {RussoFont} from "@/style/font";
import {purple} from "@/style/theme/purple";
import TestImage from "@/app/opengraph-image";



const IntroSVG = styled(IntroSvgPC)`
`

export const IntroSvgStyle = styled.div`
  position: relative;
  font-size: 30px;
  width: 100%;
  height: 105vh;

  ${displayFlex('row', 'center', 'center')}
  ${props => commonAnimation(css`${introSvgKeyframes(props.theme)} 8s infinite alternate;`)}
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0.4;
      //${props => props.theme === purple ? css`opacity: 0.4;` : css`opacity: 0.4;`}
    background-image: url('/intro_background.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: 0, 10%;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 300px;
    background: linear-gradient(0deg, ${props => props.theme.palette.reverse}, rgba(0, 0, 0, 0) 100%);
    bottom: -10px;
    position: absolute;
  }

  ${(props) => props.theme.media.tablet} {
    min-height: 700px;
    background-position: 50%, 50%;
    font-size: 40px;
  }


  ${(props) => props.theme.media.mobile} {
    min-height: 370px;
    background-position: 55%, 50%;
    font-size: 45px;
  }
`;



/**
 * Intro Svg View
 * @constructor
 */
function IntroSvg(): React.JSX.Element {
    return (
        <IntroSvgStyle className={RussoFont.className}>
          <IntroSVG>
            <text x="35%" y="30%" dy="25px"  textAnchor="middle">FRONT</text>
            <text x="55%" y="52%" dy="30px"  textAnchor="middle">DEVELOPER</text>
          </IntroSVG>
        </IntroSvgStyle>
    )
}

export default React.memo(IntroSvg)