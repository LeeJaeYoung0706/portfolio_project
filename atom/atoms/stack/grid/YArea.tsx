import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {leftGridAnimation, mobileLeftGridAnimation} from "@/style/animation";
import {areaCommonCSS} from "@/atom/atoms/stack/grid/commonStyle";
import React, {useRef} from "react";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";


const YAreaStyle = styled.div<{ $stackVisible: boolean }>`
  gap: 80px;
  grid-area: front;
  ${displayFlex('column', 'center', 'center')}
  ${areaCommonCSS};
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};
  ${(props) => props.$stackVisible && css`animation: ${leftGridAnimation} 1s normal linear;`};
  transition: 0.5s;
  box-shadow: 0 10px 20px ${props => props.theme.palette.reverse}, 0 0 10px ${props => props.theme.palette.reverseSecond};

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    ${(props) => props.$stackVisible && css`animation: ${mobileLeftGridAnimation} 1s normal linear;`};
    width: 100%;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 470px;
    ${(props) => props.$stackVisible && css`animation: ${mobileLeftGridAnimation} 1s normal linear;`};
    width: 100%;
  }
`


function YArea({$stackVisible , children} : YAreaInterface) {


    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01, // 노출 %
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <YAreaStyle $stackVisible={visible} ref={ref}>
            {children}
        </YAreaStyle>
    )
}

export default React.memo(YArea)