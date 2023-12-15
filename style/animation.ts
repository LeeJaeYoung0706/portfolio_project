import {css, DefaultTheme, keyframes} from 'styled-components';
import {color} from "@/style/theme/color";
import {commonAnimation} from "@/style/theme/common";


/*
* cubic-bezier(0.25, 0.25, 0.75, 0.75); 베지어 곡선 값 넣어서 사용하는 방법
* */
export const CircleAnimation = ( start?: number , end?: number) => keyframes`
  0% {
    transform: rotate(${start || 0});
  }
  100% {
    transform: rotate(${end || 360}deg);
  }
`
/**
 * 애니메이션 Theme 색 변경이 1회만 적용되는 문제 발생
 *
 * Intro Section SVG 애니메이션
 * @constructor
 * @param theme
 */

export const introSvgKeyframes = (theme: DefaultTheme) => keyframes`
  0% {
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    fill:  ${theme.palette.middle};
    stroke:  ${theme.palette.middle};
    stroke-width: 0.6;
  }
  50% {
    fill: rgba(72, 138, 204, 0);
    stroke:  ${theme.palette.second};
    stroke-width: 0.5;
  }
  80% {
    fill: rgba(169, 180, 185, 0);
    stroke:  ${theme.palette.primary};
  }
  100% {
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    fill:   ${theme.palette.primary};
    stroke:  ${theme.palette.primary};
    stroke-width: 0.3;
  }
`
/**
 *
 * AboutMe Section > Information Title 애니메이션
 */
export const aboutMeTitleAnimation = keyframes`
  0% {
    width: 0; left: 0;
  }

  25% {
    width: 0; left: 0;
  }
  
  50% {
    width: 100%; 
  }
  
  75% {
    width: 0; right: 0;
  }
  
  100% {
    width: 0; right: 0;
  }
`
/**
 * Header DropDown
 */
export const dropdownAnimation = keyframes`
  0% {
    transform: translateX(200px);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`


/**
 *
 * AboutMe Section Title 애니메이션
 */
// export const glitchLinkHeader= (theme: DefaultTheme) => keyframes`
//    0% , 100% {
//     text-shadow: 0 0 3px ${color.primary},
//     0 2px 4px ${color.primary},
//     0 2px 5px ${color.primary},
//     0 2px 5px ${color.primary},
//     0 0 5px ${color.primary},
//     0 0 4px ${color.primary},
//     0 0 3px ${color.primary};
//   }
//   50%  {
//     text-shadow: 0 0 3px ${color.primary} , 0 2px 4px ${color.primary}, 0 0 3px ${color.primary}; ;
//   }
// `


export const pcGridAnimation = keyframes`
  0% {
    transform: translateY(300px);
  }
  50% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
`
export const rightGridAnimation = keyframes`
  0% {
    transform: translateX(250px);
  }
  100% {
    transform: translateX(0);
  }
`
export const leftGridAnimation = keyframes`
  0% {
    transform: translateX(-250px);
  }
  100% {
    transform: translateX(0);
  }
`

export const mobileRightGridAnimation = keyframes`
  0% {
    transform: translateX(180px);
  }
  100% {
    transform: translateX(0);
  }
`
export const mobileLeftGridAnimation = keyframes`
  0% {
    transform: translateX(-180px);
  }
  100% {
    transform: translateX(0);
  }
`
