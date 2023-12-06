import React, {useEffect, useRef} from "react";
import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {AreaBack, areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import {
    mobileLeftGridAnimation,
    mobileRightGridAnimation,
    rightGridAnimation
} from "@/style/animation";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {AcademyGrid} from "@/atom/molecules/education/EducationStyle";

const XAreaStyle = styled.div<{
    $stackVisible: boolean, $area: RuleSet<Object>
}>`
  ${props => props.$area};
  gap: 80px;
  ${displayFlex('row', 'space-between', 'flex-start')}
  align-content: flex-start;
  border-radius: 1%;
  
  height: 100%;
  width: 100%;
  background-color: ${props => props.$area === AcademyGrid ? props.theme.palette.primary : props.theme.palette.second};
  ${(props) => props.$stackVisible && css`animation: ${ props.$area === AreaBack && rightGridAnimation } 1s normal linear;`}
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
    ${displayFlex('column', 'flex-start', 'flex-start')}
    ${(props) => props.$stackVisible && css`animation: ${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 470px;
    ${displayFlex('column', 'flex-start', 'flex-start')}
    ${(props) => props.$stackVisible && css`animation: ${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`}
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
function XArea({$area , children}: XAreaInterface):React.JSX.Element {

    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <XAreaStyle $stackVisible={visible} $area={$area} ref={ref}>
            {children}
        </XAreaStyle>
    )
}

export default React.memo(XArea)