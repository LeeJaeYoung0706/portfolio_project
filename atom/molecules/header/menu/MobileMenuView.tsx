import React from 'react';
import {displayFlex} from "@/style/theme/common";
import styled from "styled-components";

export const CloseBackGround = styled.div`
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 300;
`


const HeaderMobileMenuStyle = styled.div`
  display: none;
  position: relative;
  padding-right: 6vw;
  z-index: 400;
  ${(props) => props.theme.media.tablet} {
    ${displayFlex('column' , 'center' , 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    ${displayFlex('column' , 'center' , 'center')}
  }
`

const MobileMenuView = ({children}: MobileMenuPropsInterface) => {
    return (
        <HeaderMobileMenuStyle>
            {children}
        </HeaderMobileMenuStyle>
    )
}

export default React.memo(MobileMenuView)