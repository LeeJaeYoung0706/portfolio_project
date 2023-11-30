import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {leftGridAnimation} from "@/style/animation";
import {areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import React from "react";


const YAreaStyle = styled.div<{ $stackVisible: boolean }>`
  gap: 50px;
  grid-area: front;
  ${displayFlex('column', 'center', 'center')}
  ${areaCommonCSS};
  ${(props) => props.$stackVisible && css`animation: ${leftGridAnimation} 1s normal linear;`}
  box-shadow: 0 10px 20px ${props => props.theme.palette.reverse}, 0 0 10px ${props => props.theme.palette.reverseSecond};

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    width: 100%;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 470px;
    width: 100%;
  }
`


function YArea({$stackVisible , children} : YAreaInterface) {
    return (
        <YAreaStyle $stackVisible={$stackVisible}>
            {children}
        </YAreaStyle>
    )
}

export default React.memo(YArea)