import React from 'react';
import {displayFlex} from "@/style/theme/common";
import styled from "styled-components";

/**
 * Menu 외 선택 시 Close 를 위한 Div
 */
export const CloseBackGround = styled.div`
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 350;
`


const HeaderMobileMenuStyle = styled.div`
  display: none;
  position: relative;
  padding-right: 18px;
  z-index: 450;

  ${(props) => props.theme.media.tablet} {
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    ${displayFlex('column', 'center', 'center')}
  }
`
/**
 * Mobile Menu View
 * @param children
 * @constructor
 */
const MobileMenuView = ({children}: MobileMenuPropsInterface): React.JSX.Element => {
  return (
    <HeaderMobileMenuStyle>
      {children}
    </HeaderMobileMenuStyle>
  )
}

export default React.memo(MobileMenuView)