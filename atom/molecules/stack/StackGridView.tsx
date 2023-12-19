import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const StackGridViewStyle = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열
  margin: 0 auto;
  max-width: 1500px;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas: 'front back other'
                       'front back other';
  grid-gap: 17px; /* 각 그리드 아이템 사이의 간격 */

  ${(props) => props.theme.media.tablet} {
    max-width: 700px;
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 360px;
    ${displayFlex('column', 'center', 'center')}
  }
`

/**
 * Stack Grid View
 * @param children
 * @constructor
 */
function StackGridView({children} : {children: React.ReactNode[]}):React.JSX.Element {
    return (
        <StackGridViewStyle>
            {children}
        </StackGridViewStyle>
    )
}

export default React.memo(StackGridView)