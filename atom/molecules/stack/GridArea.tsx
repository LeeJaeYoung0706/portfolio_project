import styled, {css} from "styled-components";
import React from "react";
import {displayFlex} from "@/style/theme/common";


const yStyle = css`
  flex: 1;
  width: 100%;
  ${displayFlex('column', 'center', 'center')}
  max-height: 30px;
`

const xStyle = css`
  width: 40%;
  ${displayFlex('column', 'center', 'stretch')}
  max-height: 30px;
`

const GridAreaStyle= styled.div<{$style: string}>`
  ${props => props.$style === 'y' ? yStyle : xStyle}

  ${(props) => props.theme.media.tablet} {
    ${yStyle};
  }

  ${(props) => props.theme.media.mobile} {
    ${yStyle};
  }
`

export default function GridArea({children , $style}: {children: React.ReactNode , $style: string}) {

    return (
        <GridAreaStyle $style={$style}>
            {children}
        </GridAreaStyle>
    )
}