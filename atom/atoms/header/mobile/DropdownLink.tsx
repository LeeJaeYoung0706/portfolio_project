import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {MiddleTitleFontSizeMobile} from "@/style/theme/common";

const HeaderDropdownLinkStyle = styled(Link)<{ $checked: boolean }>`
  color: ${(props) => props.theme.palette.second};
  background-color: ${(props) => props.theme.palette.reverse};
  border-bottom: 1px solid ${(props) => props.theme.palette.reverseSecond};
  display: block;
  text-align: center;
  padding: 11px;
  font-weight: bold;

  ${MiddleTitleFontSizeMobile};
  &:active {
    color: ${(props) => props.theme.palette.primary};
  }
`
/**
 * Mobile Header Dropdown Link route
 * @param route => 클릭시 라우트
 * @param checked => 클릭 여부
 * @param font => 폰트 ClassName String
 * @param text => 노출 텍스트
 * @param themeHandler => 테마 변경 핸들러
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

