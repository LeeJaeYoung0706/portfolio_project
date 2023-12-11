import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {color} from "@/style/theme/color";

const StackViewStyle = styled.section`
  background-color: ${props => props.theme.palette.background};
  background-image: url("/academy.jpg");
`

/**
 * 스택 부분 뷰
 * @param children
 * @constructor
 */
function StackView({children}: StackPropsInterface) : React.JSX.Element {
    return (
        <StackViewStyle>
            {children}
        </StackViewStyle>
    )
}

export default React.memo(StackView)

