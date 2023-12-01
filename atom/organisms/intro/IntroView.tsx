import React from "react";
import styled from "styled-components";
import {kdamThmorPro} from "@/style/font";
import {color} from "@/style/theme/color";



const IntroLayoutStyle = styled.div`
  background-color: ${(props) => color.white};
`

/**
 * Intro View
 * @param children
 * @constructor
 */
function IntroView({children}: IntroInterface): React.JSX.Element {
    return (
        <IntroLayoutStyle className={kdamThmorPro.className}>
            {children}
        </IntroLayoutStyle>
    )
}

export default React.memo(IntroView)