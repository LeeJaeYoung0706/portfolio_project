import styled, {css, RuleSet} from "styled-components";
import {commonAnimation, displayFlex} from "@/style/theme/common";
import { mobileLeftGridAnimation, mobileRightGridAnimation, pcGridAnimation} from "@/style/animation";
import {AreaBack, areaCommonCSS, AreaEtc} from "@/atom/atoms/stack/grid/commonStyle";
import React, {useEffect, useRef} from "react";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {StackLogoTextStyle} from "@/atom/atoms/stack/logo/StackLogoText";


const StackAreaStyle = styled.div<{ $stackVisible: boolean , $area: RuleSet<Object>}>`
  gap: 40px;
  ${props => props.$area};
  ${displayFlex('column', 'flex-start', 'flex-start')}
  ${areaCommonCSS};
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.$stackVisible && commonAnimation(css`${pcGridAnimation} ${props.$area === AreaBack ? 1.4 : props.$area === AreaEtc ? 1.8 : 1}s normal linear;`) };
  background-color: ${props => props.theme.palette.background};
  opacity: 0.9;
  
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      // background-color: ${props => props.theme.palette.primary};
      // ${StackLogoTextStyle} {
      //   color: ${props => props.theme.palette.reverse};
      // }
      opacity: 1;
    }
  }
  
  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    ${(props) => props.$stackVisible && commonAnimation(css`${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`)};
    width: 100%;
    opacity: 1;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    ${(props) => props.$stackVisible && commonAnimation(css`${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`)};
    width: 100%;
    opacity: 1;
  }
`

/**
 * Stack Y축 그리드
 * @param children
 * @param $area => area 지정을 위한 Props
 * @constructor
 */
function StackArea({children , $area} : YAreaInterface) {


    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.1,
        root: null,
        rootMargin: '20%',
        freezeOnceVisible: true,
    })

    return (
        <StackAreaStyle $stackVisible={visible} ref={ref} $area={$area}>
            {children}
        </StackAreaStyle>
    )
}

export default React.memo(StackArea)