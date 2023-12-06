import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const IntroContentViewStyle = styled.div`
  ${displayFlex('column' , 'center' , 'flex-start')};
`
/**
 * 슬라이드 스와이퍼 영역 첫 번째 페이지
 * @param children
 * @constructor
 */
function IntroContentView ({children} : ComponentPropsInterface) : React.JSX.Element {
    return (
        <IntroContentViewStyle>
            {children}
        </IntroContentViewStyle>
    )
}

export default React.memo(IntroContentView)