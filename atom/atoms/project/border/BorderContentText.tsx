import React from 'react';
import styled from "styled-components";
import {NGodicFont} from "@/style/font";

const BorderContentTextStyle = styled.li`
  line-height: 1.3em;
  font-size: 1.2em;
  color: ${props => props.theme.palette.second};
  margin-bottom: 15px;
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    font-size: 1.1em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 0.96em;
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