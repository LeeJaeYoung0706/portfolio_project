import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const HeaderDropdownLinkStyle = styled(Link)<{ $checked: boolean }>`
  color: ${(props) => props.theme.palette.second};
  background-color: transparent;
  display: block;
  border: none;
  text-align: center;
  padding: 11px;
  font-weight: bold;
  font-size: 30px;
  &:active {
    color: ${(props) => props.theme.palette.main};
  }
`
/**
 * Mobile Header Dropdown Link route
 * @param route
 * @param checked
 * @param font
 * @param text
 * @param themeHandler
 * @constructor
 */
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

