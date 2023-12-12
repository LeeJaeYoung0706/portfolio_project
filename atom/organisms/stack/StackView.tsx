import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {color} from "@/style/theme/color";

const StackViewStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};

  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url("/pxfuel.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: 0, 10%;
    filter: grayscale(100%);
  }

  padding-bottom: 120px;

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

