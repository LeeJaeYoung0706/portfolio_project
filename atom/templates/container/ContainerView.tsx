'use client'
import React from "react";
import styled from "styled-components";
import {color} from "@/style/theme/color";


const ContainerLayoutStyle = styled.div`
  background-color: ${color.white};
  height: 100vh;
  min-height: 100%;
  position: relative;
  
  ${(props) => props.theme.media.tablet} {
    
  }

  ${(props) => props.theme.media.mobile} {
   
  }
`

const ContainerView = ({children}: ContainerPropsInterface) => {
    return (
        <ContainerLayoutStyle>
            {children}
        </ContainerLayoutStyle>
    )
}

export default React.memo(ContainerView);