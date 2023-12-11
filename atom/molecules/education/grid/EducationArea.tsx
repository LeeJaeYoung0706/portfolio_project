import React, {useRef} from "react";
import styled, {css, keyframes, RuleSet} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {FunctionsGrid, IntroductionGrid} from "@/atom/atoms/project/slide/style";


const EducationAreaLayoutStyle = styled.div<{
  $stackVisible: boolean, $area: RuleSet<Object>
}>`
  ${props => props.$area};
  gap: 80px;
  ${displayFlex('row', 'space-between', 'flex-start')}
  align-content: flex-start;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? props.theme.palette.primary : props.theme.palette.reverse70};

  ${(props) => props.theme.media.tablet} {
    width: 100%;

  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    padding-bottom: 40px;
  }
`


/**
 * Education Area
 * @param $area area 설정을 위한 css
 * @param children
 * @param $delay 에니메이션 딜레이
 * @constructor
 */
function EducationArea({$area, children}: EducationAreaInterface): React.JSX.Element {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.01,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })

  return (
    <EducationAreaLayoutStyle $stackVisible={visible} $area={$area} ref={ref}>
      {children}
    </EducationAreaLayoutStyle>
  )
}

export default React.memo(EducationArea)