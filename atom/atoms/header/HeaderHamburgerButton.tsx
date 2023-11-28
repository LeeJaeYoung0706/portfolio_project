import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";

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

const HamburgerButtonSpanStyle =
    styled.span<{ $top: string, $checked: boolean, $opacity?: number, $rotate?: string, $trans_top?: string }>`
      
      position: absolute;
      height: 5px;
      border-radius: 3px;
      width: 100%;
      background-color: ${color.primary};
      top: ${(props) => props.$checked && (props.$trans_top !== undefined) ? props.$trans_top : props.$top};
      opacity: ${(props) => {
        return props.$checked && (props.$opacity !== undefined) ? props.$opacity : 1;
    }};
      transform: ${(props) => {
        return props.$checked && (props.$rotate !== undefined) ? props.$rotate : 'none';
    }};
    `

export default function HeaderHamburgerButton({checked, onClick}: HeaderHamburgerButtonInterface) {

    return (
        <HamburgerButtonStyle onClick={onClick}>
            <HamburgerButtonSpanStyle $top={'0'} $checked={checked} $rotate={'rotate(45deg)'} $trans_top={'50%'}/>
            <HamburgerButtonSpanStyle $top={'50%'} $checked={checked} $opacity={0}/>
            <HamburgerButtonSpanStyle $top={'100%'} $checked={checked} $rotate={'rotate(-45deg)'} $trans_top={'50%'}/>
        </HamburgerButtonStyle>
    )
}