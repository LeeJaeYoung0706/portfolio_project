import styled, {css} from "styled-components";
import React from "react";
import {displayFlex} from "@/style/theme/common";

/**
 * Y 축 , X 축 그리드
 */
const GridAreaStyle = styled.div`
  flex: 1;
  width: 100%;
  ${displayFlex('column', 'flex-start', 'center')}
  max-height: 30px;
`

export default function GridArea({children}: { children: React.ReactNode }) {

  return (
    <GridAreaStyle>
      {children}
    </GridAreaStyle>
  )
}