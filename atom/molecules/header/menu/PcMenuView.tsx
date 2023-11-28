import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const HeaderPcMenuStyle = styled.div`
  display: flex;
  padding-right: 1.7vw;
  ${displayFlex('row' , 'space-between' , 'center')}

  ${(props) => props.theme.media.tablet} {
    display: none;
  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

function PcMenuView({children} : HeaderPcMenuInterface) {
    return (
        <HeaderPcMenuStyle>
            {children}
        </HeaderPcMenuStyle>
    )
}

export default React.memo(PcMenuView)