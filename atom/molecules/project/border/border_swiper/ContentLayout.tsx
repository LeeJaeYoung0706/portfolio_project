import React from "react";
import styled, {css, RuleSet} from "styled-components";

interface ProjectContentTransformLayoutInterface extends ComponentPropsInterface{
    projectIndex: any
    children: React.ReactNode
    touchMove: (e: React.TouchEvent) => void
    touchStart: (e: React.TouchEvent) => void
    touchEnd: (e: React.TouchEvent) => void
}

const ContentTransformLayoutStyle = styled.div<{$transform: RuleSet<Object>}>`
  width: 100%;
  border: 1px solid #d5132c;
  display: flex;
  ${props => props.$transform};
`


const ContentTransformLayout = React.forwardRef(({children , projectIndex ,
                                                     touchMove , touchStart, touchEnd} : ProjectContentTransformLayoutInterface , ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
    return (
        <ContentTransformLayoutStyle $transform={projectIndex.$transform} ref={ref}
                                     onTouchMove={touchMove}
                                     onTouchStart={touchStart}
                                     onTouchEnd={touchEnd}
        >
            {children}
        </ContentTransformLayoutStyle>
    )
})

export default React.memo(ContentTransformLayout)