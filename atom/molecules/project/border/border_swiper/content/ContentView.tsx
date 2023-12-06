import React from "react";
import styled, {RuleSet} from "styled-components";



const BorderContentStyle = styled.div<{$grid : RuleSet<Object> | undefined}>`
  min-height: 100%;
  min-width: 100%;
  padding: 50px 50px 50px 110px;
  box-sizing: border-box;
  display: grid;
  
  ${(props) => props.theme.media.tablet} {
    padding: 50px;
  }
  
`

/**
 * 슬라이드 스와이퍼 영역 레이아웃
 * @param children
 * @constructor
 */
function ProjectBorderContentSwiperView ({children} : ComponentPropsInterface) : React.JSX.Element {
    return (
        <BorderContentStyle $grid={undefined}>
            {children}
        </BorderContentStyle>
    )
}

export default React.memo(ProjectBorderContentSwiperView)