import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";
import {useScrollPosition} from "@/lib/useScrollPosition";

const HamburgerButtonStyle = styled.label<{}>`
  display: none;
  width: 38px;
  height: 25px;
  position: relative;
  cursor: pointer;
 

  ${(props) => props.theme.media.tablet} {
    display: block;
  }

  ${(props) => props.theme.media.mobile} {
    display: block;
  }
  
`

/**
 * Mobile Header Menu
 * @param children
 * @constructor
 */

const HamburgerButtonSpanStyle =
    styled.span<{ $top: string, $checked: boolean, $opacity?: number, $rotate?: string, $trans_top?: string , $isTop: boolean}>`
      
      position: absolute;
      height: 5px;
      border-radius: 3px;
      width: 100%;
      background-color: ${(props) => props.$isTop ? props.theme.palette.primary : props.theme.palette.second};
      top: ${(props) => props.$checked && (props.$trans_top !== undefined) ? props.$trans_top : props.$top};
      opacity: ${(props) => {
        return props.$checked && (props.$opacity !== undefined) ? props.$opacity : 1;
    }};
      transform: ${(props) => {
        return props.$checked && (props.$rotate !== undefined) ? props.$rotate : 'none';
    }};
    `

export default function HeaderHamburgerButton({checked, onClick}: HeaderHamburgerButtonInterface) {
    const [isTop] = useScrollPosition();

    return (
        <HamburgerButtonStyle onClick={onClick}>
            <HamburgerButtonSpanStyle $top={'0'} $checked={checked} $rotate={'rotate(45deg)'} $trans_top={'50%'} $isTop={isTop}/>
            <HamburgerButtonSpanStyle $top={'50%'} $checked={checked} $opacity={0} $isTop={isTop}/>
            <HamburgerButtonSpanStyle $top={'100%'} $checked={checked} $rotate={'rotate(-45deg)'} $trans_top={'50%'} $isTop={isTop}/>
        </HamburgerButtonStyle>
    )
}