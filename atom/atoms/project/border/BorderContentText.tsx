import React from 'react';
import styled from "styled-components";
import {NGodicFont} from "@/style/font";

const BorderContentTextStyle = styled.li`
  line-height: 1.5em;
  font-size: 1.4em;
  color: ${props => props.theme.palette.second};
  margin-bottom: 15px;
  font-weight: bold;
`


function BorderContentText({text} : {text: string}) {
    return (
        <BorderContentTextStyle className={NGodicFont.className}>{text}</BorderContentTextStyle>
    )
}

export default React.memo(BorderContentText);