import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const HeaderLayoutStyle = styled.header<{$isTop: boolean}>`
  position: fixed;
  width: 100%;
  min-height: 105px;
  background-color: ${(props) => props.theme.palette.main};
  z-index: 100;
  ${displayFlex('row' , 'space-between' , 'center')}
  flex-wrap: wrap;
  border-bottom: ${(props) => {
    return  !props.$isTop ? 'none' : `1px solid ${props.theme.palette.main70}`
  }};
  box-shadow: ${(props) => !props.$isTop ? 'none' : props.theme.palette.boxShadow};
`

function HeaderView ({ children , isTop}: HeaderPropsInterface) {
    return (
        <HeaderLayoutStyle $isTop={isTop}>
            {children}
        </HeaderLayoutStyle>
    )
}

export default React.memo(HeaderView)