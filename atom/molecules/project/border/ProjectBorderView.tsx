import React, {useRef} from "react";
import styled, {css, keyframes} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";


const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const ProjectBorderViewStyle = styled.article<{$visible: boolean}>`
  width: 100%;
  padding: 20px 12vw 80px 12vw;
 
  ${props => props.$visible && css`animation: ${OpacityAnimation} 1s linear normal`};
  ${(props) => props.theme.media.tablet} {
    ${displayFlex('column' , 'center' , 'center')}
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
  }
`

/**
 * Project Border View
 * @param children
 * @constructor
 */
function ProjectBorderView ({children} : ComponentPropsInterface) : React.JSX.Element {

    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref,  {
        threshold: 0.01,
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: false,
    })

    return (
        <ProjectBorderViewStyle ref={ref} $visible={visible}>
           {children}
        </ProjectBorderViewStyle>
    )
}

export default React.memo(ProjectBorderView)