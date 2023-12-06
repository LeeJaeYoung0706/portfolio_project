import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import { mobileLeftGridAnimation, mobileRightGridAnimation, pcGridAnimation} from "@/style/animation";
import {AreaBack, areaCommonCSS, AreaEtc} from "@/atom/atoms/stack/grid/commonStyle";
import React, {useRef} from "react";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";


const YAreaStyle = styled.div<{ $stackVisible: boolean , $area: RuleSet<Object>}>`
  gap: 40px;
  ${props => props.$area};
  ${displayFlex('column', 'flex-start', 'flex-start')}
  ${areaCommonCSS};
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.$stackVisible && css`animation: ${pcGridAnimation} ${props.$area === AreaBack ? 1.4 : props.$area === AreaEtc ? 1.8 : 1}s normal linear;`};
  background-color: ${props => props.theme.palette.second};
 
  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    ${(props) => props.$stackVisible && css`animation: ${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`};
    width: 100%;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 370px;
    ${(props) => props.$stackVisible && css`animation: ${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`};
    width: 100%;
  }
`

/**
 * Y축 그리드
 * @param $stackVisible
 * @param children
 * @constructor
 */
function YArea({children , $area} : YAreaInterface) {


    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <YAreaStyle $stackVisible={visible} ref={ref} $area={$area}>
            {children}
        </YAreaStyle>
    )
}

export default React.memo(YArea)