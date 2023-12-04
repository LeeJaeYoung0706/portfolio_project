import React from 'react';
import styled from "styled-components";
import {NGodicFont} from "@/style/font";
import {displayFlex} from "@/style/theme/common";


const BorderStackStyle = styled.div`
  width: 30%;
  font-size: 1em;
  font-weight: bold;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.theme.palette.middle};
  color: ${props => props.theme.palette.second};
  ${displayFlex('row' , 'center' , 'center')}
  ${(props) => props.theme.media.tablet} {
    width: 45%;
  }

  ${(props) => props.theme.media.mobile} {
    width: 45%;
    min-height: 60px;
  }
`
function BorderStack({stack} : {stack: string}):React.JSX.Element {
    return (
        <BorderStackStyle className={NGodicFont.className}>
            {stack}
        </BorderStackStyle>
    )
}

export default React.memo(BorderStack)