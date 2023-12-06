import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const ResponsibilitiesContentViewStyle = styled.div`
  ${displayFlex('column' , 'center' , 'flex-start')};
`
/**
 * 슬라이드 스와이퍼 영역 두 번째 페이지
 * @param children
 * @constructor
 */
function ResponsibilitiesContentView ({children} : {children: React.ReactNode}) :React.JSX.Element {
    return (
        <ResponsibilitiesContentViewStyle>
            {children}
        </ResponsibilitiesContentViewStyle>
    )
}

export default React.memo(ResponsibilitiesContentView);