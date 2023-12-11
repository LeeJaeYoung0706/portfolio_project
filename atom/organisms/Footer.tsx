'use client'
import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.palette.background};
  
  & > p {
    color:  ${props => props.theme.palette.primary70};
  }
  height: 160px;
  bottom: 0;
  width: 100%;
  ${displayFlex("row" , "center" , "center")}
  & > p {
    opacity: 0.8;
  }
`

function Footer() {
    return (
        <FooterStyle>
            <p>©2023 LeeJaeYoung. All Rights Reserved.</p>
        </FooterStyle>
    )
}

export default React.memo(Footer)