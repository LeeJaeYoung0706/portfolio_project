import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {color} from "@/style/theme/color";
import {OrbitFont} from "@/style/font";

const HeaderDropdownLinkStyle = styled(Link)<{ $checked: boolean }>`
  color: ${(props) => props.theme.palette.reverse};
  background-color: ${color.white};
  display: block;
  border: none;
  text-align: center;
  padding: 11px;
  font-weight: bold;
  font-size: 24px;
  &:active {
    color: ${(props) => props.theme.palette.main};
  }
`
export default function DropdownLink( {route , checked , font , text , themeHandler} : DropDownLinkInterface): React.JSX.Element {
    return (
        <HeaderDropdownLinkStyle
            href={route}
            $checked={checked}
            className={font}
            onClick={themeHandler}
        >
            {text}
        </HeaderDropdownLinkStyle>
    )
}

