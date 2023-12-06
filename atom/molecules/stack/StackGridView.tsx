import React, {useEffect, useMemo} from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const StackGridViewStyle = styled.article`
  display: grid;
  grid-template-columns: repeat(1fr, 1fr, 1fr); // 3열
  //grid-template-rows: repeat(2, 1fr); // 2행
  padding: 20px 12vw 80px 12vw;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas: 'front back other'
                       'front back other';
                       //'other other';
  grid-gap: 15px; /* 각 그리드 아이템 사이의 간격 */
  
  ${(props) => props.theme.media.tablet} {
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
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