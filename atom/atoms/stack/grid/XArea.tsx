import React, {useEffect, useRef} from "react";
import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import {mobileRightGridAnimation, rightGridAnimation} from "@/style/animation";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";

const XAreaStyle = styled.div<{
    $stackVisible: boolean, $area: RuleSet<Object>, $ani_sec: string,
}>`
  ${props => props.$area};
  gap: 80px;
  ${displayFlex('row', 'center', 'center', 'flex', true)}
  align-content: flex-start;
  ${areaCommonCSS};
  ${(props) => props.$stackVisible && css`animation: ${rightGridAnimation} ${props.$ani_sec} normal linear;`}
  min-width: 800px;
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
    ${displayFlex('column', 'center', 'center')}
    ${(props) => props.$stackVisible && css`animation: ${mobileRightGridAnimation} ${props.$ani_sec} normal linear;`}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 470px;
    ${displayFlex('column', 'center', 'center')}
    ${(props) => props.$stackVisible && css`animation: ${mobileRightGridAnimation} ${props.$ani_sec} normal linear;`}
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

    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <XAreaStyle $stackVisible={visible} $area={$area} $ani_sec={$ani_sec} ref={ref}>
            {children}
        </XAreaStyle>
    )
}

export default React.memo(XArea)