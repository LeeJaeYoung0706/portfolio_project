import React, {useEffect, useRef} from "react";
import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {AreaBack, areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import {
    leftGridAnimation,
    mobileLeftGridAnimation,
    mobileRightGridAnimation,
    rightGridAnimation
} from "@/style/animation";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {AcademyGrid} from "@/atom/molecules/education/EducationStyle";
import {FunctionsGrid, IntroductionGrid} from "@/atom/atoms/project/slide/style";

const SlideStyle = styled.div<{
    $stackVisible: boolean, $area: RuleSet<Object> , $checked: boolean
}>`
  ${props => props.$area};
  gap: 80px;
  ${displayFlex('row', 'space-between', 'flex-start')}
  align-content: flex-start;
  border-radius: 1%;
  
  height: 100%;
  width: 100%;
  background-color: ${props => ( props.$area === IntroductionGrid || props.$area === FunctionsGrid ) ? props.theme.palette.primary : props.theme.palette.second};
  ${(props) => props.$stackVisible && css`animation: ${ ( props.$area === IntroductionGrid || props.$area === FunctionsGrid ) ? rightGridAnimation : leftGridAnimation} 1s normal linear;`}
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
    ${displayFlex('column', 'flex-start', 'flex-start')}
    ${(props) => props.$stackVisible && css`animation: ${ ( props.$area === IntroductionGrid || props.$area === FunctionsGrid ) ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 370px;
    ${displayFlex('column', 'flex-start', 'flex-start')}
    ${(props) => props.$stackVisible && css`animation: ${( props.$area === IntroductionGrid || props.$area === FunctionsGrid ) ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`}
  }
`
interface SlideAreaInterface extends ComponentPropsInterface {
    $area: RuleSet<object>
    children: React.ReactNode
    $checked: boolean
}

/**
 * X 축 그리드
 * @param $stackVisible
 * @param $area
 * @param $ani_sec
 * @param children
 * @constructor
 */
function SlideArea({$area , children , $checked}: SlideAreaInterface):React.JSX.Element {

    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <SlideStyle $stackVisible={visible} $area={$area} $checked={$checked} ref={ref}>
            {children}
        </SlideStyle>
    )
}

export default React.memo(SlideArea)