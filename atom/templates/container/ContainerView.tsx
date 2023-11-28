'use client'
import React from "react";
import styled from "styled-components";


const ContainerLayoutStyle = styled.div`
  background-color: ${(props) => props.theme.palette.main};
  height: 100%;
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