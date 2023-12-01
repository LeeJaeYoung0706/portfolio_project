import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const HeaderPcMenuStyle = styled.div<{$isTop: boolean}>`
  display: flex;
  padding-right: 1.7vw;
  ${displayFlex('row' , 'space-between' , 'center')};
  
  color: ${ (props) => props.$isTop ? props.theme.palette.middle : props.theme.palette.second};
  
  
  ${(props) => props.theme.media.tablet} {
    display: none;
  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

/**
 * PC menu View
 * @param children
 * @param $isTop
 * @constructor
 */
function PcMenuView({children , $isTop} : HeaderPcMenuInterface): React.JSX.Element {

    return (
        <HeaderPcMenuStyle $isTop={$isTop}>
            {children}
        </HeaderPcMenuStyle>
    )
}

export default React.memo(PcMenuView)