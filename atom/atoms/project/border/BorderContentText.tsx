import React from 'react';
import styled from "styled-components";
import {NGodicFont} from "@/style/font";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";

const BorderContentTextStyle = styled.li`
  ${fontMiddleSizePC};
  font-size: 1.2em;
  color: ${props => props.theme.palette.second};
  margin-bottom: 15px;
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${fontMiddleSizeMobile};
  }
`


/**
 * Border Text 부분
 * @param text
 * @constructor
 */
function BorderContentText({text}: BorderTextInterface): React.JSX.Element {
    return (
        <BorderContentTextStyle className={NGodicFont.className}>{text}</BorderContentTextStyle>
    )
}

export default React.memo(BorderContentText);