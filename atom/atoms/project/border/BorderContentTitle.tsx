import React from 'react';
import styled from "styled-components";
import {NGodicFont} from "@/style/font";

const BorderContentTitleStyle = styled.div`
  line-height: 2.7em;
  font-weight: bold;
  font-size: 2.1em;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 2.0em;
    left: 0;
    width: 1.5em;
    height: 3px;
    border-radius: 1% 40% 40% 40%;
    background-image: linear-gradient(to bottom right, ${props => props.theme.palette.reverseSecond} , ${props => props.theme.palette.middle} );
  }
`


function BorderContentTitle({title} : {title: string}) {
    return (
        <BorderContentTitleStyle className={NGodicFont.className}>{title}</BorderContentTitleStyle>
    )
}

export default React.memo(BorderContentTitle);