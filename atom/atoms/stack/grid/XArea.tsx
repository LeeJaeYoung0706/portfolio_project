import React from "react";
import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import {rightGridAnimation} from "@/style/animation";

const XAreaStyle = styled.div<{
    $stackVisible: boolean, $area: RuleSet<Object>, $ani_sec: string,
}>`
  ${props => props.$area};
  gap: 50px;
  ${displayFlex('row', 'center', 'center', 'flex', true)}
  align-content: flex-start;
  ${areaCommonCSS};
  ${(props) => props.$stackVisible && css`animation: ${rightGridAnimation} ${props.$ani_sec} normal linear;`}
  min-width: 800px;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
    ${displayFlex('column', 'center', 'center')}
  
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 470px;
    ${displayFlex('column', 'center', 'center')}
  }
`

/**
 * X 축 그리드
 * @param $stackVisible
 * @param $area
 * @param $ani_sec
 * @param children
 * @constructor
 */
function XArea({$stackVisible ,$area , $ani_sec , children}: XAreaInterface):React.JSX.Element {
    return (
        <XAreaStyle $stackVisible={$stackVisible} $area={$area} $ani_sec={$ani_sec}>
            {children}
        </XAreaStyle>
    )
}

export default React.memo(XArea)