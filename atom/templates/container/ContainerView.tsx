'use client'
import React from "react";
import styled from "styled-components";
import {color} from "@/style/theme/color";


const ContainerLayoutStyle = styled.div`
  background-color: ${props => props.theme.palette.background};
  height: 100vh;
  min-height: 100%;
  position: relative;
`

const ContainerView = ({children}: ContainerPropsInterface) => {
    return (
        <ContainerLayoutStyle>
            {children}
        </ContainerLayoutStyle>
    )
}

export default React.memo(ContainerView);