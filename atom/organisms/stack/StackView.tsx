import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {color} from "@/style/theme/color";

const StackViewStyle = styled.div`
  background-color: ${(props) => color.white};
`

function StackView({children}: StackPropsInterface) : React.JSX.Element {

    return (
        <StackViewStyle>
            {children}
        </StackViewStyle>
    )
}

export default React.memo(StackView)

