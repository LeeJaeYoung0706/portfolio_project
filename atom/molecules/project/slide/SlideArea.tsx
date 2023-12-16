import React, {useRef} from "react";
import styled, {css, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {
    leftGridAnimation,
    mobileLeftGridAnimation,
    mobileRightGridAnimation,
    rightGridAnimation
} from "@/style/animation";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {FunctionsGrid, IntroductionGrid} from "@/atom/atoms/project/slide/StyleGridArea";


const SlideStyle = styled.div<{
    $stackVisible: boolean, $area: RuleSet<Object> , $checked: boolean
}>`
  ${props => props.$area};
  gap: 5px;
  ${displayFlex('column', 'flex-start', 'center')};
  align-content: flex-start;
  height: 100%;
  width: 100%;
    //background-color: ${props => (props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? props.theme.palette.primary : props.theme.palette.second};
  ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? rightGridAnimation : leftGridAnimation} 0.5s normal linear;`};
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
    ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? mobileRightGridAnimation : mobileLeftGridAnimation} 0.5s normal linear;`}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 360px;
    ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? mobileRightGridAnimation : mobileLeftGridAnimation} 0.5s normal linear;`}
  }
`

export const MinusMarginDiv = styled.div`

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
        threshold: 0.01,
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: true,
    })

    return (
        <SlideStyle $stackVisible={visible} $area={$area} $checked={$checked} ref={ref}>
            {children}
        </SlideStyle>
    )
}

export default React.memo(SlideArea)